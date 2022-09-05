import React from 'react';
import {render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Person from '../Person';


test('Intial Test',  () => {

    render(<Person />)
    const personName = screen.getByTestId ('name');
    expect(personName).toBeInTheDocument();
})



test('Input Test',  () => {

    render(<Person />)
    const personAge = screen.getByTestId ('age');
    expect(personAge).toBeInTheDocument();

    const personGender = screen.getByTestId ('gender');
    expect(personGender).toBeInTheDocument();
})




test('Rendered Data Test',  () => {

    render(<Person />)
    const renderedData = screen.getByTestId ('renderedData');
    expect(renderedData).toContainHTML(  '<h2 data-testid="renderedData">  </h2>');
    
    
})





// test('Inputs Test', async  () => {

//     render(<Person />)
//     const enteredName = screen.getByTestId ('name');
//     const renderedName=screen.getByTestId('renderedName');
//     const button = screen.getByTestId('button');
//     fireEvent.change(enteredName, {target: {value: 'Test1'}});
//     fireEvent.click(button)

//     expect(renderedName).toHaveTextContent('Test');
// })