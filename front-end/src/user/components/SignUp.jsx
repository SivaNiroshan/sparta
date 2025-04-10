import React from 'react';
import { 
  Box, 
  Button, 
  FormControl, 
  MenuItem, 
  Select, 
  TextField, 
  Typography, 
  Checkbox, 
  ListItemText, 
  FormHelperText } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from './Logo';

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
        minHeight: '80vh'
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
              Create Account
            </Typography>

            <Box sx={{ mb: 1 }}>
              <Typography 
                variant="subtitle3" 
                component="label" 
                htmlFor="firstName"
                sx={{ 
                  display: 'block', 
                  mb: 0.5, 
                  fontFamily: 'var(--font-display)'
                }}
              >
                First Name
              </Typography>
              <TextField
                id="firstName"
                name="firstName"
                placeholder="Enter first name here"
                variant="outlined"
                fullWidth
                size="small"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
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
                variant="subtitle3" 
                component="label" 
                htmlFor="lastName"
                sx={{ 
                  display: 'block', 
                  mb: 0.5,
                  fontFamily: 'var(--font-display)'
                }}
              >
                Last Name
              </Typography>
              <TextField
                id="lastName"
                name="lastName"
                placeholder="Enter last name here"
                variant="outlined"
                fullWidth
                size="small"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
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

            <Box sx={{ mb: 1 }}>
              <Typography 
                variant="subtitle3" 
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
                variant="subtitle3" 
                component="label" 
                htmlFor="password"
                sx={{ 
                  display: 'block', 
                  mb: 0.5,
                  fontFamily: 'var(--font-display)'
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

            <Box sx={{ mb: 2 }}>
              <Typography 
                variant="subtitle3" 
                component="label" 
                htmlFor="confirmPassword"
                sx={{ 
                  display: 'block', 
                  mb: 0.5,
                  fontFamily: 'var(--font-display)'
                }}
              >
                Confirm Password
              </Typography>
              <TextField
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Re-enter password here"
                type="password"
                variant="outlined"
                fullWidth
                size="small"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
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
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

SignUp.propTypes = {
  setStatus: PropTypes.func.isRequired,
}
export default SignUp;
