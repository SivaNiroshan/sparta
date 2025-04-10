import React, { useState } from 'react';
import { Box, Button, Divider, TextField, Typography, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';
import CreatePassword from './CreatePassword';
import PropTypes from 'prop-types';
import Logo from './Logo';

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
    <Box sx={{ 
      position: 'relative',
      minHeight: '100vh',
      bgcolor: 'white',
      padding: 1
    }}>
      <Logo />

      <Box sx={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding:1,
        minHeight: '100vh'
      }}>
        <Box 
          sx={{ 
            maxWidth: '400px',
            width: '100%',
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          <Box 
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{ 
              backgroundColor: "#BAE5F8",
              padding: 3,
              paddingTop: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 1
        
            }}
          >
            <Typography 
              variant="h5" 
              component="h1" 
              sx={{ 
                textAlign: 'center',
                fontWeight: 'bold',
                marginBottom: 2,
              }}
            >
              Log In
            </Typography>

            <Box sx={{ mb: 1 }}>
              <Typography 
                variant="subtitle1" 
                component="label" 
                htmlFor="email"
                sx={{ 
                  display: 'block', 
                  mb: 0.5,
                  fontFamily: 'var(--font-display)'
                }}
              >
                Email
              </Typography>
              <TextField
                id="email"
                name="email"
                placeholder="Enter email here"
                type="email"
                variant="outlined"
                fullWidth
                size="small"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'white ', 
                    '& fieldset': {
                      borderColor: '#BAE5F8', 
                    },
                    '&:hover fieldset': {
                      borderColor: '#3C8EF8', 
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'blue', 
                    },
                    borderRadius:2
                  },
                }}
              />
            </Box>

            <Box sx={{ mb: 1 }}>
              <Typography 
                variant="subtitle1" 
                component="label" 
                htmlFor="password"
                sx={{ 
                  display: 'block', 
                  mb: 0.5,
                  fontFamily: 'var(--font-display)',
                }}
              >
                Password
              </Typography>
              <TextField
                id="password"
                name="password"
                placeholder="Enter password here"
                type="password"
                variant="outlined"
                fullWidth
                size="small"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'white ', 
                    '& fieldset': {
                      borderColor: '#BAE5F8', 
                    },
                    '&:hover fieldset': {
                      borderColor: '#3C8EF8', 
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'blue', 
                    },
                    borderRadius:2
                  },
                }}
              />
            </Box>

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
          </Box>
        </Box>
        {openForgotPassword && (
        <Dialog open={open} onClose={()=>{setOpenForgotPassword(false)}}>
          <DialogTitle sx={{textAlign:'center'}}>Forgot Password</DialogTitle>
          <DialogContent sx={{justifyContent:"center", alignItems:"center"}}>
            <ForgotPassword 
              setOpenForgotPassword = {setOpenForgotPassword}
              setOpenCreatePassword = {setOpenCreatePassword}
            />
          </DialogContent>
        </Dialog> )}
        {openCreatePassword && (
        <Dialog open={open} onClose={()=>{setOpenCreatePassword(false)}}>
          <DialogTitle sx={{textAlign:'center'}}>Create New Password</DialogTitle>
          <DialogContent sx={{justifyContent:"center", alignItems:"center"}}>
            <CreatePassword setOpenCreatePassword = {setOpenCreatePassword}/>
          </DialogContent>
        </Dialog> )}
      </Box>
    </Box>
  );
};

SignIn.propTypes = {
  setStatus: PropTypes.func.isRequired,
};

export default SignIn;
