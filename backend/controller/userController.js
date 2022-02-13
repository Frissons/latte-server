const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel')

//@desc  Register new User
//@route POST /api/users
//@access Public
const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password , grade, section} = req.body
    
    //Checks if all fields are not empty
    if(!name || !email || !password || !grade || !section){
        res.status(400)
        throw new Error('Please add all fields')
    }
    
    //check if the user exists
    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error('User already Exists')
    }

    //Hash Password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Create User
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        grade,
        section
    })

    //checks if user creation succedded
    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
        })
    }
    else{
        res.status(400)
        throw new Error('Invalid User Data')
    }
})

//@desc Authenticate a User
//@route POST /api/login
//@access Public
const loginUser = asyncHandler(async(req, res) => {
    res.json({ message: 'Login User'})
})

//@desc Get User Data
//@route GET /api/me
//@access Public
const getMe = asyncHandler(async (req, res) => {
    res.json({ message: 'User Data Display'})
})

module.exports = {
    registerUser,
    loginUser,
    getMe
}