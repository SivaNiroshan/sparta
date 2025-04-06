import React from 'react'
import * as Yup from 'yup';
import {useFormik} from 'formik'
import {Box, Button, Typography, TextField} from '@mui/material'
import PropTypes from 'prop-types';

const CreatePassword = ({setOpenCreatePassword}) => {
    const validationSchema = Yup.object({
        newPassword: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .matches(/[a-z]/, "Password must contain at least one lowercase letter")
            .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
            .matches(/\d/, "Password must contain at least one number")
            .matches(/[@$!%*?&#/^()]/, "Password must contain at least one special character")
            .required("Password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('newPassword'),null],'Passwords must match')
            .required('Please confirm your password')   
    })

    const formik = useFormik({
        initialValues:{
            newPassword:'',
            confirmPassword:''
        },
        validationSchema: validationSchema,
        onSubmit:(values)=>{
            //TO DO
            //handle backend call for reset new password
            setOpenCreatePassword(false)
        }
    })

  return (
    <Box
      sx={{
        minWidth: 400,
        maxWidth: 400,
        p: 3,
        borderRadius: 2,
        backgroundColor: "white",
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ mb: 1 }}>
            <Typography 
                variant="subtitle3" 
                component="label" 
                htmlFor="newPassword"
                sx={{ 
                display: 'block', 
                mb: 0.5,
                fontFamily: 'var(--font-display)'
                }}
            >
                NewPassword
            </Typography>
            <TextField
                id="newPassword"
                name="newPassword"
                placeholder="Enter password here"
                type="password"
                variant="outlined"
                fullWidth
                size="small"
                value={formik.values.newPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
                helperText={formik.touched.newPassword && formik.errors.newPassword}
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
        
        <Button
          type="submit"
          fullWidth
          sx={{
            mt: 2,
            backgroundColor: "#3C8EF8",
            color: "white",
            py: 1.2,
            borderRadius: 2,
            "&:hover": { backgroundColor: "#1A6FE9" },
          }}
        >
            Create New Password
        </Button>
      </form>
    </Box>
  )
};

CreatePassword.PropTypes = {
    setOpenCreatePassword = PropTypes.func.isRequired
}

export default CreatePassword