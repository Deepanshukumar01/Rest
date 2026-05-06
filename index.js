// put = entire data change
// patch= partical data change

const express = require("express")
const app=express()
const port=3000

app.use(express.urlencoded({extended:true}))

const path=require("path")

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.set(express.static(path.join(__dirname,"public")))

app.get("/a",(req,res)=>{
    res.send("server working well")
})

app.listen(port,()=>{
    console.log(`${port} is working `)
})