const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        email : { type: String , required: true, unique: true},
        password : { type : String, required: true},
        Admin : { type : Boolean, default : false},
        avatar : {type : String, default: ""},
        followers: {type: Array, default: []},
        followings: {type: Array, default: []},
        coverAvatar : {type : String, default: ""},
    },
    {
        timestamps : true,
    }
)

module.exports = mongoose.model("User", UserSchema)