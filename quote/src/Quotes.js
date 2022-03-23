import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Quotes = (props) => {
  return (
    <div>
    
        
    <Box sx={{ width: '100%' }}>
    <Stack spacing={2}>
        <Item>{props.author}</Item>
        <h1>{props.text}</h1>
    </Stack>
    </Box>
    </div>
  )
}

export default Quotes