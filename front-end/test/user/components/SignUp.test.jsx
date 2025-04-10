import SignUp from "../../../src/user/components/SignUp";
import {screen, render, within} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import { beforeEach, expect } from 'vitest'

const mockNavigate = vi.fn();
const mockSetStatus = vi.fn();

vi.mock("react-router-dom",()=>({
    useNavigate: ()=> mockNavigate
}))

describe("Sign Up page tests",()=>{
    beforeEach(()=>{
        vi.clearAllMocks();
    })

    it("should render sign up form",()=>{
        render(<SignUp />)

        expect(screen.getByText('Create Account')).toBeInTheDocument();
        expect(screen.getByLabelText('First Name')).toBeInTheDocument();
        expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
        expect(screen.getByLabelText('Email')).toBeInTheDocument();
        expect(screen.getByLabelText('Password')).toBeInTheDocument();
        expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument();
    });

    it('validates input fields', async () => {
        render(<SignUp setStatus={mockSetStatus} />)
         
        await userEvent.click(screen.getByRole('button', { name: /Register/i }));
    
        expect(await screen.findByText(/Email is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Password is required/i)).toBeInTheDocument();
    });

    it("should navigate to home after successful account creation", async () => {
        const user = userEvent.setup();
        render(<SignUp setStatus={mockSetStatus} />);
        
        await user.type(screen.getByLabelText("First Name"), "user");
        await user.type(screen.getByLabelText("Last Name"), "name");
        await user.type(screen.getByLabelText("Email"), "test@example.com");
        await user.type(screen.getByLabelText("Password"), "ValidPass1!");
        await user.type(screen.getByLabelText("Confirm Password"), "ValidPass1!");
        
        const selectElement = document.getElementById("favouriteGenere");
        await user.click(selectElement);
        
        const actionOption = within(document.body).getByText("Action");
        await user.click(actionOption);
        
        const registerButton = screen.getByText("Register");
        await user.click(registerButton);
        
        expect(mockSetStatus).toHaveBeenCalledWith(true);
        expect(mockNavigate).toHaveBeenCalledWith("/home");
    });

    it("should navigate to sign page if sign in clicked",async()=>{
        render(<SignUp/>)
        await userEvent.click(screen.getByText('Sign in'))
        expect(mockNavigate).toHaveBeenCalledWith('/sign-in')
    })
})