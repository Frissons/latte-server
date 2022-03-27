import React from 'react'
import './candidate.css'
import { FcManager } from 'react-icons/fc'


const CandidateItem = ({candidates}) => {
  return (
    <div className='container__candidate'>
      <FcManager size={70}/>
      <div className='container__candidate-text'>
        <h4>Name: {candidates.candidate}</h4>
        <h4>Position: {candidates.position}</h4>
        <h4>Party: {candidates.party}</h4>
      </div>
      <div className='container__candidate-percent'>
        <h4>Votes:  {candidates.votes}10% </h4>
      </div>
    </div>
  )
}

export default CandidateItem  