// put = entire data change
// patch= partical data change

// response.redirect(url)

const express = require("express")
const app=express()
const port=3000

app.use(express.urlencoded({extended:true}))

const path=require("path")

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public")))

let posts=[
    {
        username:"google",
        work:"you can search"
    },
    {
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
app.post("/posts",(req,res)=>{
    let {username,work}=req.body
    posts.push({username,work})
    res.redirect("/post")
})


app.listen(port,()=>{
    console.log(`${port} is working `)
})