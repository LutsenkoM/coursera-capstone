import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import ConfirmedBooking from './ConfirmedBooking';

test('Renders the confirmation heading', () => {
    render(
        <BrowserRouter>
            <ConfirmedBooking />
        </BrowserRouter>
    );
    const headingElement = screen.getByText("Booking Confirmed!");
    expect(headingElement).toBeInTheDocument();
});

test('Renders the confirmation message', () => {
    render(
        <BrowserRouter>
            <ConfirmedBooking />
        </BrowserRouter>
    );
    const messageElement = screen.getByText(/Your reservation has been successfully confirmed/i);
    expect(messageElement).toBeInTheDocument();
});

test('Renders the Return to Home button', () => {
    render(
        <BrowserRouter>
            <ConfirmedBooking />
        </BrowserRouter>
    );
    const buttonElement = screen.getByText("Return to Home");
    expect(buttonElement).toBeInTheDocument();
});

