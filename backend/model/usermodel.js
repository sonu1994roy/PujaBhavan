const mongoose = require('mongoose')
 const bcrypt  =  require('bcrypt')
 const validator = require('validator')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Your firstName"],
        maxLength: [30, "firstName cannot exceed 30 characters"],
        minLength: [3, "firstName should have more than 4 characters"],
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        validate: [validator.isEmail, "Please Enter a valid Email"],
    },
    gender: {
        type: String,
        enum: ['male', "female", 'others'],
        default: 'male'
    },
    phone: {
        type: Number,
        required: [true, "Please Enter Your phone"],
        unique: true,
        maxLength: [10, "Number cannot exceed 10 characters"],
        minLength: [10, "Number cannot less than 10 characters"],
    },
    password: {
        type: String,
        required: [true, "Please Enter Your Password"],
        minLength: [8, "Password should be greater than 8 characters"],
        select: false,
    },
    avatar: {
        public_id: {
            type: String,

        },
        url: {
            type: String,
            default: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1707383404~exp=1707384004~hmac=373d9b7cb9c9efb2b044b21ea23ef11041ef9defa3070b6b23504286dc8b3b7e'
        },
    },
    role: {
        type: String,
        default: "user",
    },
    isActive: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date,
}, {
    timestamps: true
},);

userSchema.pre('save' , async function(next){
 if (!this.isModified('password')) {
   next() 
 }
 this.password = await  bcrypt.hash(this.password ,10)
})