import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CandidateItem from '../../components/candidateitem/CandidateItem';
import { getCandidates, reset } from '../../features/candidates/candidateSlice'

function Welcome() {

    const dispatch = useDispatch();

    const { candidates, isError, message } = useSelector((state) => state.candidate)
    useEffect(() => {
        dispatch(getCandidates())
        if (isError) {
            console.log(message)
        }
        return () => {
            dispatch(reset())
        }
    }, [isError, message, dispatch])
    return (
        <>
            <div >
                <h1>SSG - Elections {new Date().getFullYear()}</h1>
                <p>Leaderboard</p>
            </div>
            <div>
                {candidates.length > 0 ? (
                    <div className="candidates">
                        {
                            candidates.map(
                                (candidates) => (<CandidateItem key={candidates._id} candidates={candidates} />)
                            )
                        }
                    </div>)
                    : (
                        <h3>No Running Candidates</h3>
                    )}
            </div>

        </>
    )
}

export default Welcome