import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

const ResetPassword = ({ setOpenResetPassword }) => {
  const [otpSent, setOtpSent] = useState(false); 

  const emailValidationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
  });

  const otpValidationSchema = Yup.object({
    otp: Yup.string().required("OTP is required"),
  });

  const formik = useFormik({
    initialValues: { email: "", otp: "" },
    validationSchema: otpSent ? otpValidationSchema : emailValidationSchema,
    onSubmit: (values) => {
      if (!otpSent) {
        console.log("Sending OTP to:", values.email);
        // TO DO 
        // have to check the email provided is exist in the system if not throw errormessage else send otp to email
        setOtpSent(true);
      } else {
        console.log("Verifying OTP:", values.otp);
        //TO DO
        // HAVE TO CHECK THE PROVIDED OTP IS CORRECT WITH THE EMAIL AND NAVIGATE TO PASSWORD CREATION PAGE OR POPUP

      }
    },
  });

  const handleResendOTP = ()=>{
    setOtpSent(true);
  }

  const handleSubmitOrSend =()=>{

  }

  return (
    <Box
      sx={{
        minWidth: 350,
        maxWidth: 400,
        p: 3,
        borderRadius: 2,
        backgroundColor: "white",
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Typography 
            variant="subtitle1" 
            component="label" 
            htmlFor="email" 
            sx={{ display: "block", mb: 1, fontFamily: 'var(--font-display)'}}
        >
          Email
        </Typography>

        <TextField
          id="email"
          name="email"
          placeholder="Enter your email"
          type="email"
          variant="outlined"
          fullWidth
          size="small"
          disabled={otpSent}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "white",
              "& fieldset": { borderColor: "#BAE5F8" },
              "&:hover fieldset": { borderColor: "#3C8EF8" },
              "&.Mui-focused fieldset": { borderColor: "blue" },
              borderRadius: 2,
            },
          }}
        />

        {/* after otp sent succefully */}

        {otpSent && (
          <>
            <Typography 
                variant="subtitle1" 
                component="label" 
                htmlFor="otp" 
                sx={{ display: "block", mt: 2, mb: 1, fontFamily:"var(--font-display)" }}>
              Enter OTP
            </Typography>

            <TextField
              id="otp"
              name="otp"
              placeholder="Enter the OTP you received"
              type="text"
              variant="outlined"
              fullWidth
              size="small"
              value={formik.values.otp}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.otp && Boolean(formik.errors.otp)}
              helperText={formik.touched.otp && formik.errors.otp}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "white",
                  "& fieldset": { borderColor: "#BAE5F8" },
                  "&:hover fieldset": { borderColor: "#3C8EF8" },
                  "&.Mui-focused fieldset": { borderColor: "blue" },
                  borderRadius: 2,
                },
              }}
            />
          </>
        )}

        
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
          onClick={()=>{handleSubmitOrSend()}}
        >
          {otpSent ? "Submit OTP" : "Send OTP"}
        </Button>

        {otpSent && (
          <Button
            fullWidth
            sx={{
              mt: 1,
              backgroundColor: "transparent",
              color: "#3C8EF8",
              textTransform: "none",
              "&:hover": { textDecoration: "underline" },
            }}
            onClick={() => {handleResendOTP()}}
          >
            Resend OTP
          </Button>
        )}
      </form>
    </Box>
  );
};

export default ResetPassword;
