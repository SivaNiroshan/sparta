import React, { useState } from 'react';
import { Box, Button, Divider, Typography, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';
import CreatePassword from './CreatePassword';
import PropTypes from 'prop-types';
import FormTextField from './FormTextField';
import FormContainer from './FormContainer';

const SignIn = ({setStatus}) => {
  const navigate = useNavigate();

  const [openForgotPassword, setOpenForgotPassword] = useState(false);
  const [openCreatePassword, setOpenCreatePassword] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string()
          .email('Invalid email format')
          .required('Email is required'),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/\d/, "Password must contain at least one number")
      .matches(/[@$!%*?&#/^()]/, "Password must contain at least one special character")
      .required("Password is required")
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      //TO DO
      //handle backend calls
      setStatus(true)
      navigate('/home');
    },
  });

  return (
    <Box>
      <FormContainer 
        title='Log In'
        formik={formik}
      >            
        <FormTextField
          id="email"
          label="Email"
          placeholder="Enter email here"
          type="email"
          formik={formik}
        />
        <FormTextField
          id="password"
          label="Password"
          placeholder="Enter password here"
          type="password"
          formik={formik}
        />
                    
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'space-between',
          textAlign: "center", 
          gap: 2, 
          mt: 1
        }}>
          <Button 
            type="submit" 
            variant="contained" 
            sx={{ 
              flex: 1,
              backgroundColor: '#09BD66',
              borderRadius: 1,
              textTransform: 'none',
              fontWeight: 'bold',
              padding: '8px 16px',
              '&:hover': {
                backgroundColor: '#058D60',
              }
            }}
          >
            LogIn
          </Button>
          <Typography
            sx={{ 
              cursor: 'pointer', 
              textDecoration: 'underline',
              color:"#423333",
              '&:hover': {
                color: '#3C8EF8',
              }
            }}
            onClick={()=>{setOpenForgotPassword(true)}}
          >
            Forgot Password?
          </Typography>
        </Box>
        <Divider 
          sx={{                
            borderColor: "black",                
            borderBottomWidth: 2,               
            width: "100%",                
            margin: "1rem 0"             
          }} 
        />
        <Typography
          sx={{  
            color: "#686666",
            textAlign: 'center',
          }}
          
        >
          New to Sparta?{' '}
          <Typography 
            component="span" 
            sx={{ 
              textDecoration: 'underline', 
              cursor: 'pointer',
              '&:hover': {
              color: 'blue',
            }}}
            onClick={() => navigate('/sign-up')}
          >
            Sign up
          </Typography>
        </Typography>
      </FormContainer>
    
      {openForgotPassword && (
        <Dialog open={openForgotPassword} onClose={()=>{setOpenForgotPassword(false)}}>
          <DialogTitle sx={{textAlign:'center'}}>Forgot Password</DialogTitle>
          <DialogContent sx={{justifyContent:"center", alignItems:"center"}}>
            <ForgotPassword 
              setOpenForgotPassword = {setOpenForgotPassword}
              setOpenCreatePassword = {setOpenCreatePassword}
            />
          </DialogContent>
        </Dialog> )}
        {openCreatePassword && (
        <Dialog open={openCreatePassword} onClose={()=>{setOpenCreatePassword(false)}}>
          <DialogTitle sx={{textAlign:'center'}}>Create New Password</DialogTitle>
          <DialogContent sx={{justifyContent:"center", alignItems:"center"}}>
            <CreatePassword setOpenCreatePassword = {setOpenCreatePassword}/>
          </DialogContent>
        </Dialog> )}
    </Box>
  );
};

SignIn.propTypes = {
  setStatus: PropTypes.func.isRequired,
};

export default SignIn;
