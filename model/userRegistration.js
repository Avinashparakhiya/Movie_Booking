const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');


const UserSchema=new mongoose.Schema({
    firstName:{
        type:'String',
        required:true
    },
    lastName:{
        type:'String',
        required:true
    },
    age:{
        type:'Number',
        required:true
    },
    email:{
        type:'String',
        required:true
    },
    password:{
        type:'String',
        required:true
    },
    tokens:[{
        token:{
            type:'String',
            required:true
        }
    }]
})

UserSchema.methods.generateAuthToken=async function()
{
    try {
        const token=jwt.sign({_id:this._id},"hello_world")
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;
    } catch (error) {
        res.send("The Error part" + error)
    }
}

var User = mongoose.model('User',UserSchema);

module.exports=User;