import express from "express"
import cors from "cors"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
import cookieParser from "cookie-parser"



const app= express()
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
  });


// app.use(cors()); 
app.use(cors({ origin: 'http://localhost:5173' }));

app.use(express.json())

app.use(cookieParser())


// app.get("/test" ,  (req, res)=>{
//     res.json("It works!")
// })


app.use("/api/auth" , authRoutes)
app.use("/api/users" , userRoutes)
app.use("/api/posts" , postRoutes)



app.listen(8800, ()=>{
    console.log("Connected!")
})