import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'


const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

const arrivalURL=process.env.URL
console.log(arrivalURL);
const port = 3000

const Schema = mongoose.Schema;


const ArrivalSchema = new Schema({
  image:{type:String, required:true},
  title:{type:String, required:true},
  price:{type:Number,required:true}
});

const Arrivals = mongoose.model('Arrival',ArrivalSchema );

app.get('/', async(req, res) => {
    try {
        const allArrival=await Arrivals.find({})
      res.send(allArrival)  
    } catch (error) {
        res.status(500).json({message:error})
        
    }
  
})

app.get('/:id', async(req, res) => {
    try {
        const {id}=req.params
        const arrival=await Arrivals.findById(id)
        res.send(arrival)
        
    } catch (error) {
        res.status(500).json({message:error})
        
    }
  
})

app.post('/', async(req, res) => {
    try {
        const arrival=await Arrivals(req.body)
        await arrival.save()
        res.send(arrival)
        
    } catch (error) {
        res.status(500).json({message:error})
        
    }
  
})

app.delete('/:id', async(req, res) => {
    try {
        const {id}=req.params
        const arrival=await Arrivals.findByIdAndDelete(id)
        res.status(200).json({message:'deleted'})
        
    } catch (error) {
        res.status(500).json({message:error})
        
    }
  
})


mongoose.connect(arrivalURL)
  .then(() => console.log('Connected!'))
  .catch(() => console.log('db not connected'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})