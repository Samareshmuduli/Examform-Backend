const mongoose = require("mongoose");


const personSchema = new mongoose.Schema({
  // Personal Details
  name: { type: String, required: true, trim: true },

  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address']
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  verificationToken: {
    type: String
  },
  status:{
    type:Boolean,
    default: false
  }

}, {
  timestamps: true
});

// module.exports = mongoose.model("person", personSchema);
const user = mongoose.model("users", personSchema);
module.exports = user