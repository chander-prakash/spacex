/* eslint-disable no-undef */
import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { MissionProvider } from './../../context/mission'
import FilterWrapper from './FilterWrapper'

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
    const { getByText } = renderFilterWrapper()
    const linkElement = getByText(/Filters/i)
    expect(linkElement).toBeInTheDocument()
})

test('renders filters component Launch Year', () => {
    const { getByText } = renderFilterWrapper()
    const linkElement = getByText(/Launch Year/i)
    expect(linkElement).toBeInTheDocument()
})

test('renders filters component Successfull Launch', () => {
    const { getByText } = renderFilterWrapper()
    const linkElement = getByText(/Successfull Launch/i)
    expect(linkElement).toBeInTheDocument()
})

// click event test
test('Year Filter clicked who have data ', async () => {
    const wrapper = renderFilterWrapper()
    const year2006 = wrapper.getByText(/2006/)
    // checking if filter is there
    expect(year2006).toBeInTheDocument()
    //  executing click event
    await fireEvent.click(year2006)

    const oneFilterApplied = wrapper.getByText('1/3')
    expect(oneFilterApplied).toBeInTheDocument()

    // re-clicking on same filter to check for 0/3
    //  executing click event
    await fireEvent.click(year2006)
    const noFilterApplied = wrapper.getByText('0/3')
    expect(noFilterApplied).toBeInTheDocument()
})
