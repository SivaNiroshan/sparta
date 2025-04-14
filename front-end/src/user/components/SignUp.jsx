import React from 'react';
import { 
  Box, Button, 
  FormControl, 
  MenuItem, Select, 
  Typography, Checkbox, 
  ListItemText, FormHelperText } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import FormTextField from './FormTextField';
import FormContainer from './FormContainer';

const SignUp = ({setStatus}) => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required('First name is required'),
    lastName: Yup.string()
      .required('Last name is required'),
      favouriteGenere: Yup.array()
      .min(1, 'Please select at least one genre')
      .required('Please select your favourite genre'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/\d/, "Password must contain at least one number")
      .matches(/[@$!%*?&#/^()]/, "Password must contain at least one special character")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Please confirm your password'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      favouriteGenere: [],
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // TO DO
      // need to handle backend calls
      setStatus(true)
      navigate('/home');
    },
  });

  return (
    <Box>
      <FormContainer
        title="Create Account"
        formik={formik}
       >
        <FormTextField
          id='firstName'
          label='First Name'
          placeholder="Enter first name here"
          formik={formik}
        /> 

        <FormTextField
          id='lastName'
          label='Last Name'
          placeholder="Enter last name here"
          formik={formik}
        />  

        <Box sx={{ mb: 1 }}>
          <Typography 
            variant="subtitle3" 
            component="label" 
            htmlFor="favouriteGenere"
            sx={{ 
              display: 'block', 
              mb: 0.5,
              fontFamily: 'var(--font-display)'
            }}
          >
            Favourite Genere
          </Typography>
          <FormControl 
            fullWidth
            size="small"
            error={formik.touched.favouriteGenere && Boolean(formik.errors.favouriteGenere)}
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
          >
            <Select
              id="favouriteGenere"
              name="favouriteGenere"
              multiple 
              value={formik.values.favouriteGenere}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              displayEmpty
              renderValue={(selected) => selected.length > 0 
                ? selected.join(',') 
                : <span style={{ color: '#9e9e9e' }}>
                    Select genere
                  </span>}
                  
            >
              {['action', 'comedy', 'drama', 'romance'].map((genere) => (
                <MenuItem key={genere} value={genere}>
                  <Checkbox checked={formik.values.favouriteGenere.indexOf(genere) > -1} />
                  <ListItemText primary={genere.charAt(0).toUpperCase() + genere.slice(1)} />
                </MenuItem>
              ))}
            </Select>
              <FormHelperText>
                {formik.touched.favouriteGenere && formik.errors.favouriteGenere}
              </FormHelperText>
          </FormControl>
        </Box>

        <FormTextField
          id='email'
          label='Email'
          type="email"
          placeholder="Enter email here"
          formik={formik}
        /> 
        
        <FormTextField
          id="password"
          label="Password"
          placeholder="Enter password here"
          type="password"
          formik={formik}
        />

        <FormTextField
          id="confirmPassword"
          label="Confirm Password"
          placeholder="Re-enter password here"
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
            Register
          </Button>
          <Typography
            sx={{  
              color:"#423333",
            }}
          >
            Already have an account?{' '}
            <Typography 
              component="span" 
              sx={{ 
                textDecoration: 'underline', 
                cursor: 'pointer',
                '&:hover': {
                color: 'blue',
              }}}
              onClick={() => navigate('/sign-in')}
            >
              Sign in
            </Typography>
          </Typography>
        </Box>
      </FormContainer>   
    </Box>
  );
};

SignUp.propTypes = {
  setStatus: PropTypes.func.isRequired,
}
export default SignUp;
