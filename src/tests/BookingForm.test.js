import {fireEvent, getByText, render, screen} from "@testing-library/react"
import BookingForm from "../components/BookingForm"
import '@testing-library/jest-dom/extend-expect'; // Import this line for the toBeInTheDocument matcher
import { MemoryRouter } from "react-router-dom";
import { act } from "react";


// testing for the header on the booking form page
//MemoryRouter is b/c of the use of useNavigate() and 
//BrowserRouter on certain pages individually?
describe("Render Header", () => {
    test("Renders the BookingForm heading", () => {
        render(
        <MemoryRouter>
            <BookingForm 
                availableTimes={{"2024-07-19": ["17:00", "18:00", "19:00"]}} 
                updateTimes={() => {}}
                initializeTimes={() => {}}
                currDate={"2024-07-19"}
                dispatch={(jest.fn())}
            />
        </MemoryRouter>
        );
        const headingElement = screen.getByText(/Make your reservation today/i);
        expect(headingElement).toBeInTheDocument();
        
    });
});


//starting form validation

describe("Form validation: Testing inputs for certain attributes, correct input & incorrect input ", () => {
    test("Testing if the form inout field have the correct attributes", () => {
        const mockSubmitForm = jest.fn();
        const mockInitializeTimes = jest.fn();
        const mockUpdateTimes = jest.fn();
        const mockDispatch = jest.fn();

        render(
            <MemoryRouter>
                <BookingForm
                    availableTimes={{"2024-07-19": ["17:00", "18:00", "19:00"]}} 
                    updateTimes={mockUpdateTimes}
                    initializeTimes={mockInitializeTimes}
                    currDate="2024-07-19"
                    dispatch={mockDispatch}
                    submitForm={mockSubmitForm}
                />
            </MemoryRouter>
        );

        // Check that the form elements are rendered
        // expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
        // expect(screen.getByLabelText(/Choose Time/i)).toBeInTheDocument();
        // expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
        // expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
        const guests = screen.getByLabelText(/Number of guests/i);
        
        expect(guests).toBeInTheDocument();
        expect(guests).toHaveAttribute("min", "1");
        expect(guests).toHaveAttribute("max", "10");
        expect(guests).toBeRequired();

    });


    test("Testing if the form will properly reject an invalid number of guests", () => {
        const mockSubmitForm = jest.fn();
        const mockInitializeTimes = jest.fn();
        const mockUpdateTimes = jest.fn();
        const mockDispatch = jest.fn();

        render(
            <MemoryRouter>
                <BookingForm
                    availableTimes={{"2024-07-19": ["17:00", "18:00", "19:00"]}} 
                    updateTimes={mockUpdateTimes}
                    initializeTimes={mockInitializeTimes}
                    currDate="2024-07-19"
                    dispatch={mockDispatch}
                    submitForm={mockSubmitForm}
                />
            </MemoryRouter>
        );

        const date = screen.getByLabelText(/Choose date/i);
        const guests = screen.getByLabelText(/Number of guests/i);
        const time = screen.getByLabelText(/Choose time/i);
        const occasion = screen.getByLabelText(/Occasion/i);
        const submitButton = screen.getByRole('button', { name: /Confirm your reservation/i });

        fireEvent.change(guests, { target: { value: "0" } });
        fireEvent.change(date, { target: { value: '2024-03-19' } } );
        fireEvent.change(time, { target: { value: '19:00' } });
        fireEvent.change(occasion, { target: { value: 'Birthday' } });
        fireEvent.click(submitButton);


        expect(mockSubmitForm).not.toHaveBeenCalled();
        
    });


    test("Testing for form submission", () => {
        const mockSubmitForm = jest.fn();
        const mockInitializeTimes = jest.fn();
        const mockUpdateTimes = jest.fn();
        const mockDispatch = jest.fn();
        const mockNavigate = jest.fn();
        
        render(
            <MemoryRouter>
                <BookingForm
                    availableTimes={{"2024-07-19": ["17:00", "18:00", "19:00"]}} 
                    updateTimes={mockUpdateTimes}
                    navigate={mockNavigate}
                    currDate="2024-07-19"
                    submitForm={mockSubmitForm}
                    dispatch={mockDispatch}
                />
            </MemoryRouter>
        );

        const date = screen.getByLabelText(/Choose date/i);
        const guests = screen.getByLabelText(/Number of guests/i);
        const time = screen.getByLabelText(/Choose time/i);
        const occasion = screen.getByLabelText(/Occasion/i);

        //name is aria-label not button content
        const submitButton = screen.getByRole('button', { name: /Confirm your reservation/i });

        fireEvent.change(guests, { target: { value: '5' } });
        fireEvent.change(date, { target: { value: '2024-03-19' } } );
        fireEvent.change(time, { target: { value: '19:00' } });
        fireEvent.change(occasion, { target: { value: 'Birthday' } });

        fireEvent.click(submitButton);

        expect(mockSubmitForm).toHaveBeenCalled();
    });

});