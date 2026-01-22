import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

const mockDispatch = () => {};
const mockSubmitForm = () => {};

test('Renders the Choose date label', () => {
    render(<BookingForm availableTimes={['17:00', '18:00', '19:00']} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
    const labelElement = screen.getByText(/Choose date/i);
    expect(labelElement).toBeInTheDocument();
});

test('Renders the Choose time label', () => {
    render(<BookingForm availableTimes={['17:00', '18:00', '19:00']} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
    const labelElement = screen.getByText(/Choose time/i);
    expect(labelElement).toBeInTheDocument();
});

test('Renders the Number of guests label', () => {
    render(<BookingForm availableTimes={['17:00', '18:00', '19:00']} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
    const labelElement = screen.getByText(/Number of guests/i);
    expect(labelElement).toBeInTheDocument();
});

test('Renders the Occasion label', () => {
    render(<BookingForm availableTimes={['17:00', '18:00', '19:00']} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
    const labelElement = screen.getByText(/Occasion/i);
    expect(labelElement).toBeInTheDocument();
});

test('Renders the submit button with correct text', () => {
    render(<BookingForm availableTimes={['17:00', '18:00', '19:00']} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
    const submitButton = screen.getByRole('button', { name: /Make reservation/i });
    expect(submitButton).toBeInTheDocument();
});
