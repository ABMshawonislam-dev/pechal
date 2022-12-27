import React, { useState } from 'react'
import Header from '../components/Header'
import Heading from '../components/Heading'
import Grid from '@mui/material/Grid';
import InputBox from '../components/InputBox';
import PButton from '../components/PButton';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import AuthenticationLink from '../components/AuthenticationLink';
import Alert from '@mui/material/Alert';
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai'
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification  } from "firebase/auth";

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

  const auth = getAuth();

  let [formData,setFormData] = useState({
    email: "",
    fullname:"",
    password: ""
  })

  let [show,setShow] = useState(false)

  let [error,setError] = useState({
    email: "",
    fullname:"",
    password: ""
  })


  let handleForm = (e)=>{
    let {name,value} = e.target

    setFormData({...formData,[name]:value})

    setError({...error,[name]:""})

   
  }

  let handleClick=()=>{
   
    if(formData.email == ""){
      setError({...error,email: "Email Required"})
    }else if(formData.fullname == ""){
      setError({...error,fullname: "Fullname Required"})
    }else if(formData.password == ""){
      setError({...error,password: "Password Required"})
    }else{
      createUserWithEmailAndPassword(auth,formData.email,formData.password).then((user)=>{
        sendEmailVerification(auth.currentUser)
          .then(() => {
          console.log("Email send")
          });

    
      }).catch((error) => {
        const errorCode = error.code;
        if(errorCode.includes("auth/email-already-in-use")){
          setError({...error,email:"Email Already Exists"})
        }
        
      });
    
    }


  }

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
            <InputBox type="email" name="email" textChange={handleForm} className="reginput" label="Email Address" variant="outlined"/>

              {error.email &&
                <Alert className='error' variant="filled" severity="error">
                  {error.email}
                </Alert>
              }

 
            <InputBox className="reginput"  type="text" name="fullname" textChange={handleForm}  label="Full Name" variant="outlined"/>
            {error.fullname &&
                <Alert className='error' variant="filled" severity="error">
                  {error.fullname}
                </Alert>
              }

            <div style={{width:"100%",position:"relative"}}>
              <InputBox type={show? "text": "password"} name="password" textChange={handleForm} className="reginput" label="Password" variant="outlined"/>
              {show 
              ?
              <AiFillEye onClick={()=>setShow(false)} className="eyeicon"/>
              :
              <AiFillEyeInvisible onClick={()=>setShow(true)} className="eyeicon"/>
              }
              
              
            </div>
            {error.password &&
                <Alert className='error' variant="filled" severity="error">
                  {error.password}
                </Alert>
              }
          
            
            <PButton click={handleClick}  bname={CommonButton} title="Sign up"/>
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