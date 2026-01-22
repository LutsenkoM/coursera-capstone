import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { vi } from 'vitest';
import BookingForm from './BookingForm';

const mockDispatch = () => {};
const mockSubmitForm = vi.fn();

// Helper function to get today's date in YYYY-MM-DD format
const getTodaysDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

// Helper function to get a future date
const getFutureDate = () => {
    const future = new Date();
    future.setDate(future.getDate() + 7); // 7 days from now
    const year = future.getFullYear();
    const month = String(future.getMonth() + 1).padStart(2, '0');
    const day = String(future.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

describe('BookingForm Static Text Tests', () => {
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
});

describe('BookingForm HTML5 Validation Attributes', () => {
    test('Date input has required attribute', () => {
        render(<BookingForm availableTimes={['17:00', '18:00', '19:00']} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
        const dateInput = screen.getByLabelText(/Choose reservation date/i);
        expect(dateInput).toHaveAttribute('required');
    });

    test('Date input has correct type', () => {
        render(<BookingForm availableTimes={['17:00', '18:00', '19:00']} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
        const dateInput = screen.getByLabelText(/Choose reservation date/i);
        expect(dateInput).toHaveAttribute('type', 'date');
    });

    test('Date input has min attribute set to today', () => {
        render(<BookingForm availableTimes={['17:00', '18:00', '19:00']} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
        const dateInput = screen.getByLabelText(/Choose reservation date/i);
        expect(dateInput).toHaveAttribute('min', getTodaysDate());
    });

    test('Time select has required attribute', () => {
        render(<BookingForm availableTimes={['17:00', '18:00', '19:00']} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
        const timeSelect = screen.getByLabelText(/Choose reservation time/i);
        expect(timeSelect).toHaveAttribute('required');
    });

    test('Guests input has required attribute', () => {
        render(<BookingForm availableTimes={['17:00', '18:00', '19:00']} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
        const guestsInput = screen.getByLabelText(/Number of guests/i);
        expect(guestsInput).toHaveAttribute('required');
    });

    test('Guests input has min attribute of 1', () => {
        render(<BookingForm availableTimes={['17:00', '18:00', '19:00']} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
        const guestsInput = screen.getByLabelText(/Number of guests/i);
        expect(guestsInput).toHaveAttribute('min', '1');
    });

    test('Guests input has max attribute of 10', () => {
        render(<BookingForm availableTimes={['17:00', '18:00', '19:00']} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
        const guestsInput = screen.getByLabelText(/Number of guests/i);
        expect(guestsInput).toHaveAttribute('max', '10');
    });

    test('Guests input has type number', () => {
        render(<BookingForm availableTimes={['17:00', '18:00', '19:00']} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
        const guestsInput = screen.getByLabelText(/Number of guests/i);
        expect(guestsInput).toHaveAttribute('type', 'number');
    });

    test('Occasion select has required attribute', () => {
        render(<BookingForm availableTimes={['17:00', '18:00', '19:00']} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
        const occasionSelect = screen.getByLabelText(/Choose occasion/i);
        expect(occasionSelect).toHaveAttribute('required');
    });
});

describe('BookingForm JavaScript Validation - Invalid States', () => {
    test('Submit button is disabled when form is invalid (no date selected)', () => {
        render(<BookingForm availableTimes={['17:00', '18:00', '19:00']} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
        const submitButton = screen.getByRole('button', { name: /Make reservation/i });
        expect(submitButton).toBeDisabled();
    });

    test('Form shows validation message when invalid', () => {
        render(<BookingForm availableTimes={['17:00', '18:00', '19:00']} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
        const validationMessage = screen.getByText(/Please fill in all required fields/i);
        expect(validationMessage).toBeInTheDocument();
    });

    test('Submit button has disabled styling when form is invalid', () => {
        render(<BookingForm availableTimes={['17:00', '18:00', '19:00']} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
        const submitButton = screen.getByRole('button', { name: /Make reservation/i });
        expect(submitButton).toHaveClass('bg-gray-300');
        expect(submitButton).toHaveClass('cursor-not-allowed');
    });

    test('Does not call submitForm when form is submitted while invalid', async () => {
        const mockSubmit = vi.fn();
        render(<BookingForm availableTimes={['17:00', '18:00', '19:00']} dispatch={mockDispatch} submitForm={mockSubmit} />);
        const form = screen.getByRole('form', { name: /Reservation form/i });

        fireEvent.submit(form);

        await waitFor(() => {
            expect(mockSubmit).not.toHaveBeenCalled();
        });
    });
});

describe('BookingForm JavaScript Validation - Valid States', () => {
    test('Submit button is enabled when all fields are valid', async () => {
        render(<BookingForm availableTimes={['17:00', '18:00', '19:00']} dispatch={mockDispatch} submitForm={mockSubmitForm} />);

        const dateInput = screen.getByLabelText(/Choose reservation date/i);
        const submitButton = screen.getByRole('button', { name: /Make reservation/i });

        // Fill in the date field with a future date
        fireEvent.change(dateInput, { target: { value: getFutureDate() } });

        await waitFor(() => {
            expect(submitButton).not.toBeDisabled();
        });
    });

    test('Submit button has active styling when form is valid', async () => {
        render(<BookingForm availableTimes={['17:00', '18:00', '19:00']} dispatch={mockDispatch} submitForm={mockSubmitForm} />);

        const dateInput = screen.getByLabelText(/Choose reservation date/i);
        const submitButton = screen.getByRole('button', { name: /Make reservation/i });

        fireEvent.change(dateInput, { target: { value: getFutureDate() } });

        await waitFor(() => {
            expect(submitButton).toHaveClass('bg-[#F4CE14]');
            expect(submitButton).not.toHaveClass('cursor-not-allowed');
        });
    });

    test('Validation message is hidden when form is valid', async () => {
        render(<BookingForm availableTimes={['17:00', '18:00', '19:00']} dispatch={mockDispatch} submitForm={mockSubmitForm} />);

        const dateInput = screen.getByLabelText(/Choose reservation date/i);

        fireEvent.change(dateInput, { target: { value: getFutureDate() } });

        await waitFor(() => {
            const validationMessage = screen.queryByText(/Please fill in all required fields/i);
            expect(validationMessage).not.toBeInTheDocument();
        });
    });

    test('Calls submitForm with correct data when valid form is submitted', async () => {
        const mockSubmit = vi.fn();
        render(<BookingForm availableTimes={['17:00', '18:00', '19:00']} dispatch={mockDispatch} submitForm={mockSubmit} />);

        const dateInput = screen.getByLabelText(/Choose reservation date/i);
        const timeSelect = screen.getByLabelText(/Choose reservation time/i);
        const guestsInput = screen.getByLabelText(/Number of guests/i);
        const occasionSelect = screen.getByLabelText(/Choose occasion/i);
        const submitButton = screen.getByRole('button', { name: /Make reservation/i });

        const testDate = getFutureDate();

        // Fill in all fields
        fireEvent.change(dateInput, { target: { value: testDate } });
        fireEvent.change(timeSelect, { target: { value: '18:00' } });
        fireEvent.change(guestsInput, { target: { value: '4' } });
        fireEvent.change(occasionSelect, { target: { value: 'Anniversary' } });

        await waitFor(() => {
            expect(submitButton).not.toBeDisabled();
        });

        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(mockSubmit).toHaveBeenCalledWith({
                date: testDate,
                time: '18:00',
                guests: 4,
                occasion: 'Anniversary'
            });
        });
    });

    test('Guests input validates range correctly - accepts valid value', async () => {
        render(<BookingForm availableTimes={['17:00', '18:00', '19:00']} dispatch={mockDispatch} submitForm={mockSubmitForm} />);

        const guestsInput = screen.getByLabelText(/Number of guests/i);

        fireEvent.change(guestsInput, { target: { value: '5' } });

        await waitFor(() => {
            expect(guestsInput).toHaveValue(5);
        });
    });

    test('Available times are displayed correctly', () => {
        const testTimes = ['17:00', '18:00', '19:00', '20:00'];
        render(<BookingForm availableTimes={testTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);

        testTimes.forEach(time => {
            expect(screen.getByRole('option', { name: time })).toBeInTheDocument();
        });
    });

    test('Dispatches UPDATE_TIMES when date changes', () => {
        const mockDispatchFn = vi.fn();
        render(<BookingForm availableTimes={['17:00', '18:00', '19:00']} dispatch={mockDispatchFn} submitForm={mockSubmitForm} />);

        const dateInput = screen.getByLabelText(/Choose reservation date/i);
        const testDate = getFutureDate();

        fireEvent.change(dateInput, { target: { value: testDate } });

        expect(mockDispatchFn).toHaveBeenCalledWith({
            type: 'UPDATE_TIMES',
            payload: testDate
        });
    });
});
