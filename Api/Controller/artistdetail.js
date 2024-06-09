import {db} from "../db.js"




export const getArtistDetails=(req, res)=>{
    const { id } = req.params;

    const q =  "SELECT * FROM artistdetail  WHERE artistid = ?";
 
    db.query(q, [id], (err, data) =>{
        if(err) return res.status(500).json(err);

        return res.status(200).json(data);
    })
}




