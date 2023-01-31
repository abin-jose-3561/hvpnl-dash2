const express = require("express");
const app = express();
const cors =require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//get all data

app.get("/tb", async(req,res) => {
    try{
        const alltb = await pool.query("SELECT * FROM tb");
        res.json(alltb.rows);
    }
    catch (err){
        console.error(err.message)
    }
})


app.get("/dd", async(req,res) => {
    try{
        const alldd = await pool.query("SELECT * FROM ddstores");
        res.json(alldd.rows);
    }
    catch (err){
        console.error(err.message)
    }
})



app.listen(3001,()=> {
    console.log("server has started on port 3001")
})
