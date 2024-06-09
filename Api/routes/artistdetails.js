import express from "express"
import { getArtistDetails} from "../Controller/artistdetail.js"



const router = express.Router()
router.get("/:id", getArtistDetails);


export default router