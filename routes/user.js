const express = require('express')
const {
    handleGetAllUser,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
} = require('../controllers/user')
const router = express.Router();

// Post Api
// router.post('/', handleCreateNewUser)

// Get Api in JSON format
// router.get('./', handleGetAllUser)

// Grouping above request with the help of routes
router.route('/').get(handleGetAllUser).post(handleCreateNewUser)

// Get Api for particular user
router
    .route("/:id")
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById)

module.exports = router;