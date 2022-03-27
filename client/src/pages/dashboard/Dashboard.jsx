import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import GoalForm from '../../components/goalform/GoalForms';
import Spinner from '../../components/spinner/Spinner'
import { getGoals, reset } from '../../features/goals/goalsSlice'
import GoalItem from '../../components/goalitem/GoalItem';

function Dashboard() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector((state) => state.goals)

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate('/welcome')
    } else {

      dispatch(getGoals())
    }

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }
  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name} 😁</h1>
        <p>Goals Dashboard</p>
      </section>
      <GoalForm />

      <section className="content">
        {goals.length > 0 ? (
          <div className="goals">
            {
              goals.map(
                (goal) => (<GoalItem key={goal._id} goal={goal} />)
              )
            }
          </div>)
          : (
            <h3>You have no any goals</h3>
          )}
      </section>
    </>
  )
}

export default Dashboard