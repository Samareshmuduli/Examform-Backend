const router = require("express").Router();
const { verify } = require("../middleware/JWTverification");
const persionRouter = require("../controller/persionController");
router.post('/register', persionRouter.register);       // Create a new user
router.post('/login', persionRouter.login);   // Get a user by ID
router.get('/verify-email',persionRouter.verifyEmail)
router.post('/googleLogin', persionRouter.googleLogin);  

module.exports = router;