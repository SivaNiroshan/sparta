import React from 'react'
import { Box, Button } from '@mui/material';
import SPARTA_IMG from "../../assets/sparta_img.png";
import { useNavigate } from 'react-router-dom';

const Logo = () => {
    const navigate = useNavigate();
  return (
    <Box 
        sx={{ 
          position: 'absolute', 
          top: '10px', 
          left: '10px', 
          zIndex: 2 
        }}
      >
        <Button
          onClick={() => navigate("/")}
          sx={{ 
            minWidth: 0, 
            padding: 0, 
            borderRadius: 0, 
            backgroundColor: 'transparent', 
            '&:hover': { backgroundColor: 'transparent' } 
          }}
        >
          <img 
            src={SPARTA_IMG} 
            alt="Sparta Logo" 
            style={{ height: '70px', width: '70px' }} 
          />
        </Button>
      </Box>
  )
}

export default Logo
