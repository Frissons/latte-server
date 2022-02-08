const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')



//@desc get goals
//@route GET /api/goals
//@access Private
const getGoals = asyncHandler( async (req,res) => {
    const goals = await Goal.find()

    res.status(200).json(goals);
})

//@desc set goals
//@route POST /api/goals
//@access Private
const setGoal = asyncHandler(async (req,res) => {
    if(!req.body.text)
    {
        res.status(400)
        throw new Error('Please add a text Field')
    }

    const goal =await  Goal.create({
        text: req.body.text
    })

    res.status(200).json(goal)
})

//@desc  update goals
//@route PUT /api/goals
//@access Private
const updateGoal = asyncHandler(async (req,res) => {
    res.status(200).json({ message: `Update Goals ${req.params.id}`} )
    console.log('hit update'); 
})

//@desc delete goals
//@route DELETE /api/goals
//@access Private
const deleteGoal = asyncHandler( async (req,res) => {
    res.status(200).json({ message: `Delete Goals ${req.params.id}`} )
    console.log('hit delete');
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}