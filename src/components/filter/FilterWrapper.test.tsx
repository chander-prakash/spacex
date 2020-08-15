import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { MissionProvider } from "./../../context/mission";
import FilterWrapper from './FilterWrapper';


const renderFilterWrapper = () => {

    return render(
        <BrowserRouter>
            <MissionProvider>
                <FilterWrapper />
            </MissionProvider>
        </BrowserRouter>
    )
}
test('renders filters', () => {

    const { getByText } = renderFilterWrapper();
    const linkElement = getByText(/Filters/i);
    expect(linkElement).toBeInTheDocument();
});


test('renders filters component Launch Year', () => {
    const { getByText } = renderFilterWrapper();
    const linkElement = getByText(/Launch Year/i);
    expect(linkElement).toBeInTheDocument();
});


test('renders filters component Successfull Launch', () => {
    const { getByText } = renderFilterWrapper();
    const linkElement = getByText(/Successfull Launch/i);
    expect(linkElement).toBeInTheDocument();
});