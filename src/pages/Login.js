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
    marginTop: "56px",
    fontFamily:['Nunito', "sans-serif"],
    
    '&:hover': {
      backgroundColor: '#000',
    },
  });

const Login = () => {
  return (
    <>

<Grid container spacing={2}>
  <Grid item xs={6}>
    <div className='regleftside'>
      <div>
        <Header>
          <Heading title="Login to your account!" className="heading" as="h2"/>
          <img style={{marginTop: "20px"}} src="assets/googlelogin.png"/>
        </Header>
          <div className='inputboxcontainer'>
            <InputBox className="logininput" label="Email Address" variant="standard"/>
            <InputBox className="logininput" label="Password" variant="standard"/>
            <PButton bname={CommonButton} title="Login to Continue"/>
            <AuthenticationLink className="reglink" title="Don’t have an account ?" href="/" hreftitle="Sign Up"/>
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

export default Login