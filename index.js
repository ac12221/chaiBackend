const express = require('express')
require('dotenv').config()
const app = express()



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("hiteshchoudjerydotcom")
})

app.get('/youtube',(req,res)=>{
  res.send("<h2> Chai aur Code </h2>")
})

app.get('/login',(req,res)=>{
  res.send("<h1> Please login at chai aure code </h1>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port `)
})