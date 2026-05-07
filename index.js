// put = entire data change
// patch= partical data change

// response.redirect(url)
// for id assign use npm i uuid package 


const express = require("express")
const app=express()
const port=3000
const path=require("path")
const { v4:uuidv4 }=require('uuid')


app.use(express.urlencoded({extended:true}))


app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public")))

let posts=[
    {
        id:uuidv4(),
        username:"google",
        work:"you can search"
    },
    {
        id:uuidv4(),
        username:"youtube",
        work:"you can watch movies"
    }
]

app.get("/post",(req,res)=>{
    res.render("index.ejs",{posts})
})
app.get("/post/new",(req,res)=>{
    res.render("new.ejs")
})
app.post("/post",(req,res)=>{
    let {username,work}=req.body
    let id=uuidv4()
    posts.push({username,work,id})
    res.redirect("/post")
})
app.get("/post/:id",(req,res)=>{
    let {id}=req.params
    let post=posts.find((p)=>id===p.id)
    res.render("show.ejs",{post})
})
app.patch("/post/:id",(req,res)=>{
    let {id}=req.params
    let newwork=req.body.work

     let post=posts.find((p)=>id===p.id)
     post.work=newwork
    console.log(post)
    res.send("patch request is working")
})


app.listen(port,()=>{
    console.log(`${port} is working `)
})