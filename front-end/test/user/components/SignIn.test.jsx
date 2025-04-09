import SignIn from "../../../src/user/components/SignIn";
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

describe("Sign In page tests",()=>{
    beforeEach(()=>{
        vi.clearAllMocks();
    })

    it("should render sign in form",()=>{
        render(<SignIn />)

        expect(screen.getByText('Log In')).toBeInTheDocument();
        expect(screen.getByLabelText('Email')).toBeInTheDocument();
        expect(screen.getByLabelText('Password')).toBeInTheDocument();
    });
    it('validates email and password fields', async () => {
        
        render(<SignIn setStatus={mockSetStatus} />)
        const butt = screen.getByRole('button', { name: /LogIn/i })
        await userEvent.click(butt);
    
        expect(await screen.findByText(/Email is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Password is required/i)).toBeInTheDocument();
      });
})