const bcrypt = require('bcryptjs');
const User = require('../model/userSchema');
const jwt = require("jsonwebtoken");
const newUser=require('../model/personSchema')
// Create a new user
exports.createUser = async (req, res) => {
    
  try {
    const user = new User(req.body); 
    console.log("hello")
    const savedUser = await user.save(); 
    // console.log('all data',savedUser)
    // console.log('user_id',savedUser.user_id)
    const newuser = await newUser.findByIdAndUpdate(savedUser.user_id,{status:true},{new:true}); 
    // console.log('new user',newuser)
    res.status(201).json({message: 'user data  created successfully',
        personsetails: savedUser}); 
  } catch (error) {
    res.status(400).json({ message: error.message }); 
  }
};

// Get a user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.find({user_id:req.params.id}); // Finding user by ID
   
    if (user==[]) return res.status(404).json({ message: 'Form  are not found' }); 
        console.log(user)

        res.status(200).json({
            message: "Form retrieved successfully",
            payload: user
        });
    } catch (err) {
        res.status(500).json({ message: err.message }); 
    }
};
//Get a form through id

exports.getPost = async (req, res) => {
  try {
      const post = await User.findById(req.params.id);
      if (!post) return res.status(404).json({ message: 'Post not found' }); 

      res.status(200).json({
          message: "Post retrieved successfully",
          Blogs: post
      });
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
};

