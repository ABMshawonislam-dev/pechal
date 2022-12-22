import React from 'react'
import Header from '../components/Header'
import Heading from '../components/Heading'
import Grid from '@mui/material/Grid';
import InputBox from '../components/InputBox';
import PButton from '../components/PButton';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import AuthenticationLink from '../components/AuthenticationLink';

const CommonButton = styled(Button)({
    width: "100%",
    padding: '19px 12px',
    backgroundColor: '#5F35F5',
    borderRadius: "86px",
    marginTop: "56px",
    fontFamily:['Nunito', "sans-serif"],
    
    '&:hover': {
      backgroundColor: '#000',
    },
  });




const Registration = () => {


  return (
   <>

<Grid container spacing={2}>
  <Grid item xs={6}>
    <div className='regleftside'>
      <div>
        <Header>
          <Heading title="Get started with easily register" className="heading" as="h2"/>
          <p className='regsubheading'>Free register and you can enjoy it</p>
        </Header>
          <div className='inputboxcontainer'>
            <InputBox className="reginput" label="Email Address" variant="outlined"/>
            <InputBox className="reginput" label="Full Name" variant="outlined"/>
            <InputBox className="reginput" label="Password" variant="outlined"/>
            <PButton bname={CommonButton} title="Sign up"/>
            <AuthenticationLink className="reglink" title="Already  have an account ?" href="/login" hreftitle="Sign In"/>
          </div>
      </div>
    </div>
  </Grid>
  <Grid item xs={6}>
    <img className='registrationimg' src="assets/registrationimg.png"/>
  </Grid>
  
</Grid>

    

   </>
  )
}

const kire ={
    borderRadius: 50
}



export default Registration