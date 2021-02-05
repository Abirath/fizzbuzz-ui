import '@testing-library/jest-dom';
import React from 'react'
import ReactDOM from 'react-dom'
import FizzBuzz from './FizzBuzz'
 
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FizzBuzz />, div);
    ReactDOM.unmountComponentAtNode(div);
});

