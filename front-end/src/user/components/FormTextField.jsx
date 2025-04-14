import React from 'react'
import {Box, Typography, TextField} from '@mui/material'
import PropTypes from 'prop-types';

const FormTextField = ({label, id, placeholder, type, formik}) => {
  return (
    <Box sx={{ mb: 1 }}>
        <Typography 
            variant="subtitle1" 
            component="label" 
            htmlFor={id}
            sx={{ 
                display: 'block', 
                mb: 0.5,
                fontFamily: 'var(--font-display)'
            }}
        >
            {label}
        </Typography>
        <TextField
            id={id}
            name={id}
            placeholder={placeholder}
            type={type}
            variant="outlined"
            fullWidth
            size="small"
            value={formik.values[id]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched[id] && Boolean(formik.errors[id])}
            helperText={formik.touched[id] && formik.errors[id]}
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

  )
}
FormTextField.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string,
    formik: PropTypes.object.isRequired,
}

export default FormTextField
