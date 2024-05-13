const User = require('../models/user')
async function handleGetAllUser(req, res) {
    const allUser = await User.find()
    return res.json(allUser)
}

async function handleGetUserById(req, res) {
    const user = await User.findById(req.params.id)
    if (!user) return res.status(404).json({ error: 'User not found' })
    return res.json(user)
}

async function handleUpdateUserById(req, res) {
    const user = await User.findByIdAndUpdate(req.params.id, { lastName: 'Kumar' })
    if (!user) return res.status(404).json({ error: 'User not found' })
    return res.json({ status: 'Success' })
}

async function handleDeleteUserById(req, res) {
    const user = await User.findByIdAndDelete(req.params.id)
    if (!user) return res.status(404).json({ error: 'User not found' })
    return res.json({ status: 'Success' })
}

async function handleCreateNewUser(req, res) {
    const body = req.body
    if (
        !body ||
        !body.firstName ||
        !body.lastName ||
        !body.email ||
        !body.jobTitle ||
        !body.gender

    ) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required'
        })
    }
    const result = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        jobTitle: body.jobTitle,
        gender: body.gender
    })

    console.log(result)
    return res.status(201).json({
        message: 'user created successfully',
        id : result._id
    })
}



module.exports = {
    handleGetAllUser,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
}