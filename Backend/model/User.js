const mongoose=required("mongoose");
const User = new.mongoose.userSchema(
{
    name:{
        type:String,
        trim: true,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone_number:{
        type: Number,
    }
 },

 {
    timestamp: true
 }
);

module.export = mongoose.model("User", userSchema)