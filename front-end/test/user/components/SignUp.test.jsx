import SignUp from "../../../src/user/components/SignUp";
import {screen, render,} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import { beforeEach } from 'vitest'

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
        const buttonSignUp = screen.getByRole('button', { name: /Register/i })
        await userEvent.click(buttonSignUp);
    
        expect(await screen.findByText(/Email is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Password is required/i)).toBeInTheDocument();
      });
})