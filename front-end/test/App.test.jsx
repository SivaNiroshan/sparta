import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../src/App';

describe('App', () => {
//   it('renders LandingPage on default route (/)', () => {
//     render(
//       <MemoryRouter initialEntries={['/']}>
//         <App />
//       </MemoryRouter>
//     );
//     // Adjust this based on actual content in LandingPage
//     expect(screen.getByText(/Landing/i)).toBeDefined();
//   });

//   it('renders SignUp page on /sign-up', () => {
//     render(
//       <MemoryRouter initialEntries={['/sign-up']}>
//         <App />
//       </MemoryRouter>
//     );
//     expect(screen.getByText(/Sign Up/i)).toBeDefined();
//   });

//   it('renders SignIn page on /sign-in', () => {
//     render(
//       <MemoryRouter initialEntries={['/sign-in']}>
//         <App />
//       </MemoryRouter>
//     );
//     expect(screen.getByText(/Sign In/i)).toBeDefined();
//   });

  it('renders Layout on /home', () => {
    render(
      <MemoryRouter initialEntries={['/home']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Home/i)).toBeDefined(); // Update based on Layout content
  });
});
