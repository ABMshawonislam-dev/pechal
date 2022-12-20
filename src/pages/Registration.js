import React from 'react'
import Header from '../components/Header'
import Heading from '../components/Heading'
import Button from '@mui/material/Button';

const Registration = () => {


  return (
   <>
    <Header>
       <Heading className="one" as="h2"/>
       <Heading className="two" as="h2"/>
    </Header>

    <Button style={{background:"red"}} variant="text">Text</Button>
   </>
  )
}

const kire ={
    borderRadius: 50
}



export default Registration