import { useState } from "react"
import { useDispatch } from "react-redux"
import {createGoal} from '../../features/goals/goalsSlice';


function GoalForm() {
  
  const dispatch = useDispatch();
  const [text, setText] = useState('')
  
  const goalSubmit = (e) => {
    e.preventDefault()
    dispatch(createGoal({text}))
    setText('')
  }
  return (
    <section className="form">
      <form onSubmit={goalSubmit}>
        <div className="form-group">
          <label htmlFor="text">Goal</label>
          <input type="text"
          name='text'
          value={text}
          placeholder="write something..."
          onChange={(e) =>
          setText(e.target.value)}/>
        </div>
        <div className="form-group">
          <button
          className="btn btn-block" 
          type="submit">Add Goal</button>
        </div>
      </form>
    </section>
  )
}

export default GoalForm