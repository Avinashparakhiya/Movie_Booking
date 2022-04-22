const express = require ('express');
const router = express.Router();
const jwt = require ('jsonwebtoken')
const userModel = require ('../model/userRegistration')
const saltRound = 10;
const bcrypt = require ('bcrypt')



router.post('/userRegistration',async(req,res)=>
{
    const exitingUser = await userModel.findOne({email:req.body.email});
    if(exitingUser)
    {
        return res.status(400).send({message:"You Are Already Registration..Please Login and Enjoy It.."})
    }else{
        try {
            const salt = await bcrypt.genSalt(Number(10));
            const hasePassword = await bcrypt.hash(req.body.password,salt);

            const user=await new userModel({...req.body,password:hasePassword}).save();
            const token = await user.generateAuthToken();
            res.cookie('jwt',token,{
                expires:new Date(Date.now()+50000),
                httpOnly:true
            })
            console.log('*** User Registration Successfully ***');
            res.send({message:'User Registration Successfully'});

        } catch (error) {
            res.status(500).send(error)
        }
    }
})

router.post('/userLogin',async(req,res)=>
{
        try {
            const email=req.body.email
            const password=req.body.password


            const userEmail = await userModel.findOne({email:email})
            const isMatch = await bcrypt.compare(password,userEmail.password)

            const token = await userEmail.generateAuthToken();

            res.cookie("jwt",token,{
                expires:new Date(Date.now()+5000),
                httpOnly:true
            })

            if(isMatch)
            {
                res.status(201).send({message:"User Login SuccessFully",token})
            }else if(!isMatch)
            {
                res.status(400).send({message:"Invalid Login details"})
            }
        } catch (error) {
            res.status(400).send({message:"Invalid Login Details"})
            
        }
})




module.exports=router;