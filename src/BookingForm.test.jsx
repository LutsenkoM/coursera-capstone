import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the Choose date label', () => {
    render(<BookingForm availableTimes={['17:00', '18:00', '19:00']} dispatch={() => {}} />);
    const labelElement = screen.getByText("Choose date");
    expect(labelElement).toBeInTheDocument();
});

test('Renders the Choose time label', () => {
    render(<BookingForm availableTimes={['17:00', '18:00', '19:00']} dispatch={() => {}} />);
    const labelElement = screen.getByText("Choose time");
    expect(labelElement).toBeInTheDocument();
});

test('Renders the Number of guests label', () => {
    render(<BookingForm availableTimes={['17:00', '18:00', '19:00']} dispatch={() => {}} />);
    const labelElement = screen.getByText("Number of guests");
    expect(labelElement).toBeInTheDocument();
});

test('Renders the Occasion label', () => {
    render(<BookingForm availableTimes={['17:00', '18:00', '19:00']} dispatch={() => {}} />);
    const labelElement = screen.getByText("Occasion");
    expect(labelElement).toBeInTheDocument();
});

test('Renders the submit button with correct text', () => {
    render(<BookingForm availableTimes={['17:00', '18:00', '19:00']} dispatch={() => {}} />);
    const submitButton = screen.getByDisplayValue("Make Your reservation");
    expect(submitButton).toBeInTheDocument();
});

