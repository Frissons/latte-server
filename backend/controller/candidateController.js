const asyncHandler = require('express-async-handler')
const Candidate= require('../models/candidateModel')
const User = require('../models/userModel')




//@desc get Candidates
//@route GET /api/candidates/all
//@access Public
const getAll = asyncHandler(async (req, res) => {
    const candidates = await Candidate.find()
    res.status(200).json(candidates);
})


//@desc get Candidates
//@route GET /api/candidate
//@access Private
const getCandidate = asyncHandler(async (req, res) => {
    const candidates = await Candidate.find({ user: req.user.id })
    res.status(200).json(candidates);
})


//@desc create candidates
//@route POST /api/candidate
//@access Private
const setCandidate = asyncHandler(async (req, res) => {
    if (!req.body.candidate && !req.body.position && !req.body.party && !req.user.id) {
        res.status(400)
        throw new Error('Please add a text Field')
    }
    try {
        const candi = await Candidate.create({
            user: req.user.id,
            candidate: req.body.candidate,
            position: req.body.position,
            party: req.body.party,
        })
        res.status(200).json(candi)

    } catch (error) {
        res.status(400)
        throw new Error('Idunno what happen')
    }


})



//@desc  update candidate info
//@route PUT /api/candidates/:id
//@access Private
const updateCandidate = asyncHandler(async (req, res) => {
    const candid = await Candidate.findById(req.params.id)

    if (!candid) {
        res.status(400)
        throw new Error('Candidate not Found')
    }

    //check for user
    if(!req.user) {
        res.status(401)
        throw new Error('User not Found')
    }

    // Checks the loggin user matches candidate user
    if(Candidate.user.toString() != req.user.id){
        res.status(401)
        throw new Error('User not Authorized')
    }


    const updatedCandidate = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(updatedCandidate)


})


//@desc delete goals
//@route DELETE /api/goals/:id
//@access Private
const deleteCandidate = asyncHandler(async (req, res) => {
    const voter = await Candidate.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal not Found')
    }


    //check for user
    if(!req.user) {
        res.status(401)
        throw new Error('User not Found')
    }

    // Checks the loggin user matches goal user
    if(voter.user.toString() != req.user.id){
        res.status(401)
        throw new Error('User not Authorized')
    }

    await goal.remove()
    res.status(200).json({ id: req.params.id })

})

module.exports = {
    getAll,
    getCandidate,
    setCandidate,
    updateCandidate,
    deleteCandidate
}