import express from "express"
import { getArtists} from "../Controller/artist.js"



const router = express.Router()
router.get("/", getArtists);


export default router