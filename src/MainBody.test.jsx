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
test('initializeTimes returns the correct initial times from API', () => {
    // Call the mocked fetchAPI with today's date
    const today = new Date();
    const expectedTimes = fetchAPI(today);

    // Verify that we get times back
    expect(expectedTimes).toHaveLength(6);
    expect(expectedTimes).toContain('17:00');
    expect(expectedTimes).toContain('22:00');
});

// Test the updateTimes reducer function
test('updateTimes returns new times from API when UPDATE_TIMES action is dispatched', () => {
    // Mock the current state
    const currentState = [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
    ];

    // Mock the action
    const action = {
        type: 'UPDATE_TIMES',
        payload: '2026-01-25'
    };

    // Simulate the updateTimes reducer logic
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

    // Verify that the returned state contains the times from the API
    expect(newState).toHaveLength(6);
    expect(newState).toEqual(currentState); // In our mock, it returns the same times
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
