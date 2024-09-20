const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the User schema
const userSchema = new mongoose.Schema({

    FirstName: {
        type: String,
        required: true,
        trim: true,
      },
      LastName: {
        type: String,
        required: true,
        trim: true,
      },
      fatherName: {
        type: String,
        required: true,
        trim: true
      },
      motherName: {
        type: String,
        required: true,
        trim: true
      },
      email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address']
      },
      phoneNumber: {
        type: String,
        required: true,
        trim: true,
        match: [/^\d{10}$/, 'Please provide a valid 10-digit phone number']
      },
      currentAddress: {
        type: String,
        required: true,
        trim: true
      },
      permanentAddress: {
        type: String,
        required: true,
        trim: true
      },
      dob: {
        type: Date,
        required: true
      },
      sex: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
      },
      aadhaarNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [/^\d{12}$/, 'Please provide a valid 12-digit Aadhaar number']
      },
      schoolName: {
        type: String,
        required: true,
        trim: true // Removes whitespace from the start and end of the input
      },
      matricPercentage: {
        type: Number,
        required: true,
        min: 0,
        max: 100
      },
      matricPassingYear: {
        type: Number,
        required: true,
        min: 1900, // You can adjust this as per requirements
        max: new Date().getFullYear() // Current year
      },
    
      // Secondary Education Details
      collegeNameSec: {
        type: String,
        required: true,
        trim: true
      },
      secPercentage: {
        type: Number,
        required: true,
        min: 0,
        max: 100
      },
      secPassingYear: {
        type: Number,
        required: true,
        min: 1900,
        max: new Date().getFullYear()
      },
    
      // Higher Education Details
      collegeNameHigh: {
        type: String,
        required: true,
        trim: true
      },
      highPercentage: {
        type: Number,
        required: true,
        min: 0,
        max: 100
      },
      highPassingYear: {
        type: Number,
        required: true,
        min: 1900,
        max: new Date().getFullYear()
      },
      companyName: { type: String, required: true },
      jobTitle: { type: String, required: true },
      experienceYears: { type: Number, required: true },
      jobStartDate: { type: Date, required: true },
      jobEndDate: { type: Date },
      skills: { type: [String], required: true },
      skillsCertificate: { type: String, required: true },
    
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
  },
    { 
        timestamps: true  
    });
// Export the User model based on the schema
  const user = mongoose.model("exam", userSchema);
module.exports = user