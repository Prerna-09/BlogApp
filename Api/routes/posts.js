import express from "express"
import { register} from "../Controller/auth.js"
// import { addPost } from "../Controller/post.js"

const router = express.Router()
router.post("/register" , register)

// router.get("/test", addPost)

export default router