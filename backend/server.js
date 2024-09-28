

import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose, { Schema } from 'mongoose'
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())


mongoose.connect('mongodb+srv://muzaffar:muzaffar@cluster0.ur1atn2.mongodb.net/crud').then(()=>{console.log('MongoDB Connect')}).catch((e)=>{console.log(e)})
const schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
})
const User = mongoose.model('user',schema)


app.get('/employes',async(req,res)=>{
const user = await User.find({})
res.json({
    success:true,
    user
})
})

app.post('/createEmploye',async(req,res,next)=>{
   try {
    const {name,email,number,city} = req.body
    if(!name||!email||!city||!number){
        res.json({success:false,
            message:"All feild are Mendotry"
        })
    }
    let user = await User.findOne({email})
    if(user){
        throw new Error("Employe already exists")
    }
    user = await User.create({
        name,
        email,
        number,
        city
    })
    res.json({
        success:true,
        message:'Employe Created',
    })
   } catch (error) {
    next(error)
   }
})

app.delete('/delete',async(req,res,next)=>{
try {
    const {email} = req.body
    let user = await User.findOne({email})
    
    if(!user){
      throw new  Error("Employe is not found")
    }
    await user.deleteOne()
    res.json({
        success:true,
        message:"user deleted"
    })
} catch (error) {
    next(error)
}
})


app.put('/updateEmploye',async(req,res,next)=>{
    try {
        const {name,email,number,city,newemail} = req.body
        if(!name||!email||!city||!number){
            res.json({success:false,
                message:"All feild are Mendotry"
            })
        }
        let user = await User.findOne({email})
    
        if(!user){
          throw new  Error("Employe is not found")
        }
        user.email = newemail
        user.city = city
        user.number = number
        user.name = name
        await user.save()
res.json({
    success:true,
    message:"Employe updated"
})
    } catch (error) {
        next(error)
    }
})


app.use((err,req,res,next)=>{
    res.json(err.message)
})
app.listen(4000,()=>{
    console.log('server is running on port 4000')
})