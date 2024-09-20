const router = require("express").Router();
const { verify } = require("../middleware/JWTverification");
const userRouter = require("../controller/userController");
router.post('/userspost', userRouter.createUser);       // Create a new user
router.get('/user_id/:id', userRouter.getUserById);   // Get a user by ID
router.get('/post/:id', userRouter.getPost); 


module.exports = router;