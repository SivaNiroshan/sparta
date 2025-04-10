import React from "react";
import Logo from "../../../src/user/components/Logo";
import '@testing-library/jest-dom/vitest'
import {screen, render} from '@testing-library/react';
import {userEvent} from '@testing-library/user-event'

const mockNavigate = vi.fn()
vi.mock('react-router-dom',()=>({
    useNavigate: ()=> mockNavigate,
}))

describe("Logo Component",()=>{
    it("should navigate when logo is clicked",async()=>{
        render(<Logo/>)
        await userEvent.click(screen.getByRole('button'))
        expect(mockNavigate).toHaveBeenCalledWith('/')
    });
});