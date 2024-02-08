const mongoose = require("mongoose")
const todoSchema = new mongoose.Schema({
        task: {
            type:String,
            required: true
        },
        priority:{
            type: Number,
        complete: Boolean
        },
        complete:{
            type:Boolean,
            default:false
        }
})
module.exports=mongoose.model("note", todoSchema)