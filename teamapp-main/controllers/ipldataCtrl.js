const Ipldatas=require('../models/IpldataModel')
require('dotenv').config()

const IpldataCtrl={
    CreateIpldata:async (req,res) =>{
        try{
            const {team,lose,match,runrate,winings,score,overs}=req.body

            const finding=await Ipldatas.find({team:team})
            if(!finding) return res.status(400).json({msg: "team does not exist"})
            const totalpoints=winings*2
            const runrated=score/(overs*6)
            const detect=await Ipldatas.findOne({team:team})
            if(detect) return res.status(400).json({msg: "this team already registered"})
            const newIpldata= new Ipldatas({
                team,winings,totalpoints:totalpoints,match,lose,runrate:runrated
            })
            await newIpldata.save()
            return res.json({msg: "created successfuly."})
        }catch(err){
            return res.status(500).json({msg: "err message"})
        }
    },

    getdata:async (req,res) =>{
        try{
            const team= await Ipldatas.find({}).sort({"totalpoints":-1,"runrate":-1})
            res.json(team)
        }catch(err){
            return res.status(500).json({msg: "err message"})
        }
    },

    imageupdatedata:async (req,res) =>{
        try{
            const description=req.body.description
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
            await Ipldatas.findByIdAndUpdate(req.params.id,{
                image:url,description:description
            })
            return res.json({msg: "updated successfuly."})
        }catch(err){
            return res.status(500).json({msg: "err message"})
        }
    },
   
    updatedata:async (req,res) =>{
        try{

            const {team,match,winings,lose,score,overs}=req.body
            const finding=await Ipldatas.find({team:team})
            if(!finding) return res.status(400).json({msg: "team does not exist"})
            const totalpoints=winings*2
            const guter=finding[0].runrate
            const id=finding[0]._id
            const runrated=(guter+(score/(overs*6)))/2
                 await Ipldatas.findByIdAndUpdate(id,{
                team,winings,totalpoints:totalpoints,match,lose,runrate:runrated
            })
            return res.json({msg: "updated successfuly."})
        }catch(err){
            return res.status(500).json({msg: "err message"})
        }
    },
   
    deletedata: async(req, res) =>{
        try {
            const {deleteteam}=req.body
            const finding=await Ipldatas.find({team:deleteteam})
            if(!finding) return res.status(400).json({msg: "team does not exist"})
            
            const id=finding[0]._id
            await Ipldatas.findByIdAndDelete(id)
            res.json({msg: "team has deleted"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}
module.exports = IpldataCtrl