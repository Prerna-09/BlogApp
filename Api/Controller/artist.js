import {db} from "../db.js"



export const getArtists=(req, res)=>{

    const q =  "SELECT * FROM artist";
 
    db.query(q, [req.id], (err, data) =>{
        if(err) return res.status(500).json(err);

        return res.status(200).json(data);
    })
}

