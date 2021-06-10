let express = require('express')
let app = express()
let path = require('path')

app.get("/",(req,res)=>res.sendFile(path.join(__dirname,"views/home.html")))
app.use(express.static("public"))
app.listen(4000,()=>console.log("Server ready brother"))
