import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react'
import ReactDOM from 'react-dom'
import FizzBuzz from './FizzBuzz'
 
test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FizzBuzz />, div);
    ReactDOM.unmountComponentAtNode(div);
});