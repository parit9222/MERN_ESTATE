import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: "https://static.vecteezy.com/system/resources/thumbnails/011/675/374/small/man-avatar-image-for-profile-png.png",
    },
}, {timestamps: true});

const User = mongoose.model('Users', userSchema);

export default User;