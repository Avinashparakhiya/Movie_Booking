const express = require ('express');
const router = express.Router();
const jwt = require ('jsonwebtoken')
const loginModel = require ('../model/adminRegistration')
const saltRound = 10;
const bcrypt = require ('bcrypt')

router.post('/adminRegistration',async(req,res)=>
{
    const exitingUser = await loginModel.findOne({email:req.body.email});
    if(exitingUser)
    {
        return res.status(400).send({message:"Y0u Are Already Registration..Please Login and Enjoy It.."})
    }else{
        try {
            const salt = await bcrypt.genSalt(Number(10));
            const hasePassword = await bcrypt.hash(req.body.password,salt);

            const user=await new loginModel({...req.body,password:hasePassword}).save();
            const token = await user.generateAuthToken();
            res.cookie('jwt',token,{
                expires:new Date(Date.now()+50000),
                httpOnly:true
            })
            console.log('*** Admin Registration Successfully ***');
            res.send({message:'Admin Registration Successfully'});

        } catch (error) {
            res.status(500).send(error)
        }
    }
})

router.post('/adminLogin',async(req,res)=>
{
        try {
            const email=req.body.email
            const password=req.body.password


            const userEmail = await loginModel.findOne({email:email})
            const isMatch = await bcrypt.compare(password,userEmail.password)

            const token = await userEmail.generateAuthToken();

            res.cookie("jwt",token,{
                expires:new Date(Date.now()+5000),
                httpOnly:true
            })

            if(isMatch)
            {
                res.status(201).send({message:"Admin Login SuccessFully",token})
            }else if(!isMatch)
            {
                res.status(400).send({message:"Invalid Login details"})
            }
        } catch (error) {
            res.status(400).send({message:"Invalid Login Details"})
            
        }
})


module.exports=router;