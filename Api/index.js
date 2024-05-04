import express from "express"
import cors from "cors"
import authRoutes from "./routes/posts.js"
import userRoutes from "./routes/posts.js"
import postRoutes from "./routes/posts.js"




const app= express()

app.use(express.json())
app.use(cors()); 

// app.get("/test" ,  (req, res)=>{
//     res.json("It works!")
// })


app.use("/api/auth" , authRoutes)
app.use("/api/users" , userRoutes)
app.use("/api/posts" , postRoutes)



app.listen(8800, ()=>{
    console.log("Connected!")
})