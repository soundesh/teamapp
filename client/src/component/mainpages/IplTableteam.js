import React,{useContext}from 'react'
import {Link} from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {GlobalState} from '../../GlobalState'

const IplTableteam = () => {

  const State = useContext(GlobalState)
  const teams=State.IplDataState.Iplteam[0]
  console.log(teams)
  return (
  <div>
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell  align="center">Team</TableCell>
            <TableCell align="center">Team Match</TableCell>
            <TableCell align="center">winings</TableCell>
            <TableCell align="center">lose</TableCell>
            <TableCell align="center">totalpoints</TableCell>
            <TableCell align="center">runrate</TableCell>
            <TableCell align="center">team details</TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
          {teams.map((team) => (

            <TableRow
              key={team._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell align="center"  component="th" scope="row">{team.team} </TableCell>

            <TableCell align="center">{team.match} </TableCell>

            <TableCell align="center">{team.winings} </TableCell>

            <TableCell align="center">{team.lose} </TableCell>

            <TableCell align="center">{team.totalpoints} </TableCell>

            <TableCell align="center">{Math.round(team.runrate * 10000) / 10000}</TableCell>
            
            <TableCell align="center"><Link  to={`/ipltable/${team._id}`}>team details</Link></TableCell>
            </TableRow>

          ))}
        </TableBody>
      </Table>
    </TableContainer>
</div>
  )
}
export default IplTableteam
