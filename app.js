const path=require('path');
const express=require('express');
const app=express();
require('dotenv').config();

const port = process.env.PORT || 4000;

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname)));
app.get("/",function(req,res){
    res.render("index")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

