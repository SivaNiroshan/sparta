import {screen, render} from '@testing-library/react'
import LandingPage from '../../../src/user/components/LandingPage'
import React from 'react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { beforeEach } from 'vitest'

const mockNavigate = vi.fn();
vi.mock("react-router-dom",()=>({
    useNavigate: ()=> mockNavigate
}))
describe("Landing Page Test",()=>{
    beforeEach(()=>{
        vi.clearAllMocks();
    })

    it("should render landing page texts",()=>{
        render(<LandingPage />)

        expect(screen.getByText('Get Ready to Experience Unstoppable Entertainment !')).toBeInTheDocument();
        expect(screen.getByText(/SPARTA is an online streaming platform/i)).toBeInTheDocument();
        expect(screen.getByText(/where you can watch , share and download your favorite/i)).toBeInTheDocument();
        expect(screen.getByText(/movies, series and TV shows/i)).toBeInTheDocument();
    });

    it("should call useNavigate with /sign-in",async()=>{
        render(<LandingPage />)

        const buttonSignIn = screen.getByRole('button',{name: /SIGN IN/});
        await userEvent.click(buttonSignIn)
        expect(mockNavigate).toHaveBeenCalledWith('/sign-in');
    });

    it("should call useNavigate with /sign-up",async()=>{
        render(<LandingPage />)

        const buttonSignUp = screen.getByRole('button',{name: /SIGN UP/});
        await userEvent.click(buttonSignUp)
        expect(mockNavigate).toHaveBeenCalledWith('/sign-up');
    });
});