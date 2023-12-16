import axios from 'axios';

export default async function pd(req, res){
    const { token, score, qd } = req.query;
    
    try{
        const pd = async()=>{
            const r = await axios.get(`https://cohort.avidia.in/api/quiz/put_score?token=${token}&score=${score}&qd=${qd}`);
            console.log(r, r.data);
        }
        pd()
        res.status(200).json({success: "200 OK"})
    } catch (e){
        res.status(500).json({error: e});
    }
}