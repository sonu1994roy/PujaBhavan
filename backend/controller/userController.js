const User = require('../model/usermodel')
const Cloudnery = require('cloudinary')
const { catchSyncError ,newError } = require('expressive-error-handler');

exports.createUser = catchSyncError(async (req, res ,next) => {
  const {name} = req.body
    if (!name ) {
        return next(newError('requred name ' ,400))
    }
    const myCloud = await Cloudnery.v2.uploader.upload(req.body.avatar, {
        folder: "users",
        width: 150,
        height: 150,
        crop: "scale",
    })
    req.body.avatar = {
        public_id: myCloud.public_id,
        url: myCloud.secure_ur
    }
    const user = User.create(req.body)

    res.status(201).json({
        success: true,
        user
    })
})

exports.user = catchSyncError(async (req, res ,next) => {
    const {name} = req.body
    if(!name){
        return next(newError('messgae ' ,400))
    }
    res.send('hello wolrd')
})