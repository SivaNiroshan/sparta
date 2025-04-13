import React from 'react'
import {render,screen, } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import userEvent from '@testing-library/user-event';
import CreatePassword from '../../../src/user/components/CreatePassword';

describe("Create Password Pop Up",()=>{
    let setOpenCreatePassword;
    beforeEach(()=>{
        setOpenCreatePassword = vi.fn();
        render(
            <CreatePassword 
                setOpenCreatePassword = {setOpenCreatePassword}
            />
        )
    })

    it("should show error if input is empty",async()=>{
        await userEvent.click(screen.getByRole('button',{name: /CREATE NEW PASSWORD/i}))
        expect(screen.getByText('Password is required')).toBeInTheDocument;
        expect(screen.getByText('Please confirm your password')).toBeInTheDocument;
    }) 
})