const mysql=require('mysql2')
const db=mysql.createPool({
    host :'localhost',
    user:'root',
    password:'monkatwork',
    database:'ipldb',
})
const authAdmin = async (req, res, next) =>{
    try {
        
        const Adminuser='SELECT * FROM Users WHERE id=?'
        db.query(Adminuser,[req.user.id],(err,user)=>{
           if(err){
               return res.json({msg: err.message})
               }
               if(user.role === 0)
               return res.status(400).json({msg: "Admin resources access denied"})
   
           next()
       })    

        
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

module.exports = authAdmin