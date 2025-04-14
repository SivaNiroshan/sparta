import React from 'react'
import PropTypes from 'prop-types';
import Logo from './Logo';
import { Box, Typography } from '@mui/material';

const FormContainer = ({formik,title,children}) => {
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
                        {title}
                    </Typography>
                    {children}
                </Box>
            </Box> 
        </Box>
    </Box>                
  )
}
FormContainer.propTypes = {
    formik: PropTypes.object.isRequired, 
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };
export default FormContainer
