require('dotenv').config()
const mysql=require('mysql2')
const db=mysql.createPool({
    host :'localhost',
    user:'root',
    password:'monkatwork',
    database:'ipldb',
})
const IpldataCtrl={
    CreateIpldata:async (req,res) =>{
        try{
            const {team,match,winings,lose,score,overs,draw}=req.body
            const matchs=match
            const totalpoints=winings*2 + parseInt(draw)
            const runrate=score/(overs*6)
            console.log(req.body)

           const create="INSERT INTO Ipldata(team,matchs,winings,lose,runrate,totalpoints,draw) VALUES (?,?,?,?,?,?,?)";
           db.query(create,[team,matchs,winings,lose,runrate,totalpoints,draw],(err,result)=>{
              if(err){
                  return res.json({msg: err.message})
                  }
                  
            return res.json({msg: "created successfuly."})
          })
        }catch(err){
            return res.status(500).json({msg: "err message"})
        }
    },

    getdata:async (req,res) =>{
        try{
            const teams='SELECT * FROM Ipldata '
           
            db.query(teams,(err,team)=>{
               if(err){
                   return res.json({msg: err.message})
                   }
            res.json(team) 
           })
        }catch(err){
            return res.status(500).json({msg: "err message"})
        }
    },

    imageupdatedata:async (req,res) =>{
        try{
            const {description,teamer}=req.body
            console.log(image)
            const file=req.files.image
            const url = req.protocol + '://' + req.get('host') + '/img/'+"team"+req.params.id+file.name
            if(!req.files)
            return res.status(400).json({msg:"please upload file"})
           
            if(file.mimetype !=='image/jpeg'&& file.mimetype !=='image/png'){
                return res.status(400).json({msg:"file format incorrect"})
            }
            if(file.size> 1024*1024){
            
                return res.status(400).json({msg:"size to large"})
            }
            file.mv('./img/'+"team"+req.params.id+file.name)
            const image=url
            const Updateteam= "UPDATE Ipldata SET image=?,description=? WHERE team=?"
                db.query(Updateteam,[image,description,teamer],(err,team)=>{
                return res.json({msg: "updated successfuly."})
                })
        }catch(err){
            return res.status(500).json({msg: "err message"})
        }
    },
    updatedata:async (req,res) =>{
        try{
          const  {
                team1,matchs1,winings1,lose1,draw1,score1,overs1,ball,
                team2,matchs2,winings2,lose2,draw2,score2,overs2,ball2,
                runrate1,runrate2,
              }=req.body
              console.log(req.body)
            const teams='SELECT * FROM Ipldata WHERE team=?'
            db.query(teams,[team1],(err,teamer)=>{
               if(err){
                   return res.json({msg: err.message})
                   }
                   console.log(teamer)
            const totalpoints=winings1*2 + parseInt(draw1)
            const runrate=runrate1+teamer[0].runrate
            const Updateteam= "UPDATE Ipldata SET matchs=?,winings=?,lose=?,runrate=?,totalpoints=?, draw=? WHERE team=?"
                db.query(Updateteam,[matchs1,winings1,lose1,runrate,totalpoints,draw1,team1],(err,team)=>{
                })
           })
           db.query(teams,[team2],(err,teamer)=>{
            if(err){
                return res.json({msg: err.message})
                }
                const totalpoints=winings2*2 + parseInt(draw2)
                const teamer1=teamer[0].runrate
                const runrate=runrate2+teamer[0].runrate
         const Updateteam= "UPDATE Ipldata SET matchs=?,winings=?,lose=?,runrate=?,totalpoints=?, draw=? WHERE team=?"
             db.query(Updateteam,[matchs2,winings2,lose2,runrate,totalpoints,draw2,team2],(err,team)=>{
             })
        })
        return res.json({msg: "updated successfuly."})
        }catch(err){
            return res.status(500).json({msg: "err message"})
        }
    },


    deletedata: async(req, res) =>{
        try {
            const {deleteteam}=req.body
            const teamDelete='DELETE FROM Ipldata WHERE team=?'

            db.query(teamDelete,[deleteteam],(err,team)=>{
                if(err){
                    return res.json({msg: err.message})
                    }
        
            res.json({msg: "team has deleted"})
        })
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}
module.exports = IpldataCtrl