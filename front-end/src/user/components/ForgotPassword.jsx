import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import PropTypes from 'prop-types';

const ForgotPassword = ({ setOpenForgotPassword, setOpenCreatePassword }) => {
  const [otpSent, setOtpSent] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(30);

  const emailValidationSchema = Yup.object({
    email: Yup.string().email("Invalid email format")
        .required("Email is required"),
  });

  const otpValidationSchema = Yup.object({
    otp: Yup.string().required("OTP is required"),
  });

  const formik = useFormik({
    initialValues: { email: "", otp: "" },
    validationSchema: otpSent ? otpValidationSchema : emailValidationSchema,
    onSubmit: (values) => {
      if (!otpSent) {
        sendOTP(values.email);
        setOtpSent(true);
      } else {
        verifyOTP(values.email, values.otp);
      }
    },
  });

  const sendOTP = (email) => {
    // TO DO: backend call to send OTP
    
    //if email exist in system and otp sent succesfully
    setResendDisabled(true);
    setCountdown(30);
  };

  const verifyOTP = (email, otp) => {
    // TO DO: backend  call to verify OTP
    
    // if otp verification passed then
    setOpenForgotPassword(false);
    setOpenCreatePassword(true);
  };

  const handleResendOTP = () => {
    sendOTP(formik.values.email);
  };

  useEffect(() => {
    let timer;
    if (resendDisabled && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      setResendDisabled(false);
    }
    
    return () => {
      clearTimeout(timer);
    };
  }, [resendDisabled, countdown]);

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
        >
          {otpSent ? "Submit OTP" : "Send OTP"}
        </Button>

        {otpSent && (
          <Button
            fullWidth
            disabled={resendDisabled}
            onClick={handleResendOTP}
            sx={{
              mt: 1,
              backgroundColor: "transparent",
              color: resendDisabled ? "gray" : "#3C8EF8",
              textTransform: "none",
              "&:hover": { textDecoration: resendDisabled ? "none" : "underline" },
            }}
          >
            {resendDisabled ? `Resend OTP in ${countdown}s` : "Resend OTP"}
          </Button>
        )}
      </form>
    </Box>
  );
};

ForgotPassword.propTypes = {
  setOpenForgotPassword : PropTypes.func.isRequired,
  setOpenCreatePassword : PropTypes.func.isRequired,
}
export default ForgotPassword;