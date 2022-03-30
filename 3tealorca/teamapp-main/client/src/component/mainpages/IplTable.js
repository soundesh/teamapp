import React, {useContext} from 'react'
import IplTableteam from './IplTableteam'

import {GlobalState} from '../../GlobalState'

const IplTable = () => {
  const State = useContext(GlobalState)
  const teams=State.IplDataState.Iplteam[0]
  
  return (
    
    <div className='someone'>
        <div>
              {
                teams.map(team =>{
                  return <IplTableteam key={team._id} team={team}/>
                })
              }
        </div>
    </div>
  )
}

export default IplTable