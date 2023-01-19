//import { app } from "./app.js"
const app = require("./app");

app.get("/", (req,res)=>{
    res.send("<h1>working </h1>");
})

app.route("/user").get((req,res,next)=>{
    res.send({
        user:[],
        success: true,
    })
})

app.listen(process.env.PORT, () =>{
    console.log("is working");
})