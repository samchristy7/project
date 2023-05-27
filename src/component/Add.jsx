import { TextField} from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div style={{textAlign:'center'}}>
       <h2>Blog : <TextField variant="standard" size="small" placholder="Blogname"></TextField></h2>
       <h2>Description: <TextField variant="standard" size="small" placholder="Description"></TextField></h2>
       <h2>Author : <TextField variant="standard"size="small"  placholder="Authorname"></TextField></h2>
    </div>
  )
}

export default Add