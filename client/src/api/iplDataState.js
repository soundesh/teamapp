import {useState, useEffect} from 'react'
import axios from 'axios'

const IplDataState = (token) => {
    const [Iplteam,setIplteam]=useState('')
    const [callback, setCallback] = useState(false)
   
    
    useEffect(() =>{
        const getIplteams = async () => {
            const res = await axios.get(`/app/iplteam`,{
              headers: {Authorization: token}
            })
            setIplteam(res.data)
        }
        getIplteams()
    },[callback,token])
  return ({
    Iplteam:[Iplteam,setIplteam],
    callback: [callback, setCallback],
  }
  )
}

export default IplDataState