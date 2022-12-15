const express=require("express");
const mongoose=require("mongoose")
const route=require("./router/route")

const app=express();

app.use(express.json());
mongoose.connect("mongodb+srv://anubhav0347:anubhav0347@cluster0.ndyglrb.mongodb.net/Assignment-1", {
    useNewUrlParser: true
})
    .then(()=> console.log("mongodb is connect"))
    .catch((error)=>console.log(error.message))

app.use("/",route)

app.listen(process.env.PORT|| 3000, function() {
    console.log("Express app running on port "+(process.env.PORT|| 3000) )
} )
