import React from 'react'
import { 
  Button, 
  Box,  
  Typography, 
  AppBar, 
  Toolbar, 
  Divider, 
  IconButton 
} from '@mui/material';
import SPARTA_IMG from "../../assets/sparta_img.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => { 
  const navigate = useNavigate(); 
  return (
    <div style={{ backgroundColor: "#BAE5F8", minHeight: "100vh" }}>
      <AppBar position="static" sx={{ backgroundColor: "#BAE5F8", boxShadow: "none", padding:1 }}>
        <Toolbar>
          <img src={SPARTA_IMG} alt="SPARTA" style={{ height: 60 }} />
    
          <Box sx={{ display: "flex", gap: 3, ml: 5 }}>
            <Typography sx={{ color: "black", cursor: "pointer" }}>Pricing</Typography>
            <Typography sx={{ color: "black", cursor: "pointer" }}>Docs</Typography>
          </Box>
    
          <Box
            sx={{
              display: "flex",
              gap: 2,
              ml: "auto",
              "& button": {
                backgroundColor: "#070E9E",
                color: "white",
                borderRadius: 2,
                fontWeight: "bold",
                padding: "6px 16px",
                "&:hover": { 
                  backgroundColor: "white", 
                  color: "black" 
                },
              },
            }}
          >
            <Button onClick={()=>navigate('/sign-up')}>SIGN UP</Button>
            <Button onClick={()=>navigate('/sign-in')}>SIGN IN</Button>
          </Box>
        </Toolbar>
      </AppBar>
  
      <Divider sx={{ 
        borderColor: "black", 
        borderBottomWidth: 2,
        width: "100%" 
      }} />

      <Box sx={{ 
        textAlign: "center", 
        py: 15, 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center",
        px: 3
      }}>
        <Typography 
          variant="h3" 
          component="h1" 
          sx={{ 
            fontWeight: "bold", 
            mb: 4,
            color: "black"
          }}
        >
          Get Ready to Experience Unstoppable Entertainment !
        </Typography>
        
        <Typography 
          variant="body1" 
          sx={{ 
            maxWidth: 600, 
            mx: "auto",
            color: "black", 
            lineHeight: 1.6,
            fontSize: "1.1rem"
          }}
        >
          SPARTA is an online streaming platform
          <br />
          where you can watch , share and download your favorite
          <br />
          movies, series and TV shows
        </Typography>
      </Box>
  
      <Box sx={{ 
        position: "absolute", 
        bottom: 0, 
        flexDirection:"column",
        width: "100%", 
        display: "flex", 
        justifyContent: "center",
        alignItems:"center", 
        padding: "20px 0",
        gap: 2
      }}>
        <Box sx={{display:"flex", justifyContent:"center", gap:5}}>
          <Typography sx={{ color: "black", cursor: "pointer" }}>Privacy</Typography>
          <Typography sx={{ color: "black", cursor: "pointer" }}>contact us</Typography>
          <Typography sx={{ color: "black", cursor: "pointer" }}>Help</Typography>
        </Box>
      
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <XIcon />
          </IconButton>
          <IconButton>
            <LinkedInIcon />
          </IconButton>
        </Box>
    </Box>
    </div>
  );
}

export default LandingPage;
