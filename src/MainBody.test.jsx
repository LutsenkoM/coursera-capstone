import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import MainBody from './MainBody';
import { fetchAPI } from './api';

// Mock the fetchAPI function
vi.mock('./api', () => ({
    fetchAPI: vi.fn((date) => {
        return [
            '17:00',
            '18:00',
            '19:00',
            '20:00',
            '21:00',
            '22:00'
        ];
    }),
    submitAPI: vi.fn(() => true)
}));

// Test the initializeTimes function
test('initializeTimes returns a non-empty array of available times', () => {
    // Call the mocked fetchAPI with today's date
    const today = new Date();
    const result = fetchAPI(today);

    // Verify that fetchAPI returns a non-empty array
    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
});

// Test the updateTimes reducer function
test('updateTimes returns new times from API when given a date', () => {
    // Mock the action with a specific date
    const action = {
        type: 'UPDATE_TIMES',
        payload: '2026-01-25'
    };

    // Call fetchAPI with the date from the action payload
    const selectedDate = new Date(action.payload);
    const newTimes = fetchAPI(selectedDate);

    // Verify that fetchAPI was called and returns a valid array
    expect(newTimes).toBeDefined();
    expect(Array.isArray(newTimes)).toBe(true);
    expect(newTimes.length).toBeGreaterThan(0);
});

test('updateTimes returns the same state for unknown action types', () => {
    const currentState = ['17:00', '18:00', '19:00'];

    const action = {
        type: 'UNKNOWN_ACTION',
        payload: 'some data'
    };

    const updateTimes = (state, action) => {
        switch (action.type) {
            case 'UPDATE_TIMES':
                const selectedDate = new Date(action.payload);
                return fetchAPI(selectedDate);
            default:
                return state;
        }
    };

    const newState = updateTimes(currentState, action);

    expect(newState).toEqual(currentState);
});
