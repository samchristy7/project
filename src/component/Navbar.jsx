import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
        <Toolbar>
            <Typography  variant="h3" component="div" sx={{ flexGrow: 1 }}>
                BLOG DASHBOARD
            </Typography>
            <Button variant="contained" color="error"><Link to={'/'}>HOME</Link></Button>
            <Button variant="contained" color="inherit"><Link to={'/add'}>ADD</Link></Button>
        </Toolbar>
        </AppBar>
    </Box>
  )
}

export default Navbar