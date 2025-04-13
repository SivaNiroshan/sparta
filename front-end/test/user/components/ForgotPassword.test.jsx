import React from 'react'
import {render,screen} from '@testing-library/react'
import ForgotPassword from '../../../src/user/components/ForgotPassword';
import '@testing-library/jest-dom/vitest'
import userEvent from '@testing-library/user-event';

describe("Forgot password Pop Up",()=>{
    let setOpenForgotPassword, setOpenCreatePassword;
    beforeEach(()=>{
        setOpenForgotPassword = vi.fn();
        setOpenCreatePassword = vi.fn();
        render(
            <ForgotPassword 
                setOpenForgotPassword = {setOpenForgotPassword}
                setOpenCreatePassword = {setOpenCreatePassword}
            />
        )
    })

    it("should render email input box",()=>{
        expect(screen.getByPlaceholderText(/Enter your email/i)).toBeInTheDocument;
    })

    it('should show error msg when input is empty',async()=>{
        await userEvent.click(screen.getByRole('button',{name: /SEND OTP/i}))
        expect(screen.getByText(/Email is required/i)).toBeInTheDocument;
    })

    it('should show error msg when otp is empty',async()=>{
        const emailInput = screen.getByPlaceholderText(/Enter your email/i)
        await userEvent.type(emailInput,'test@example.com')
        await userEvent.click(screen.getByRole('button',{name: /SEND OTP/i}))
        expect(screen.getByPlaceholderText(/Enter the OTP you received/i)).toBeInTheDocument();
        await userEvent.click(screen.getByRole('button',{name: /SUBMIT OTP/i}))
        expect(screen.getByText(/OTP is required/i)).toBeInTheDocument;

    })
})