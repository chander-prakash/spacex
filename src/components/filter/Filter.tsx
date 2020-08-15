/* eslint-disable indent */
import React from 'react'

interface Filter {
    header: string,
    values: string[],
    key: string
}

interface PropType {
    history: any,
    filter: Filter,
    selectedFilters: any

}
const Filter = ({ history, filter, selectedFilters }: PropType) => {
    const setFilter = (value: string) => {
        const selectedValues = Object.assign({}, selectedFilters)

        // checking if same tile clicked, then remove the value
        selectedValues[filter.key] = ((selectedValues[filter.key] == value) ? null : value)

        // generating query parameters
        const query = Object.keys(selectedValues).map(key => selectedValues[key] !== null ? `${key}=${selectedValues[key]}` : null).filter((val) => val !== null).join('&')
        history.replace(`/?${query}`)
    }

    return (
        <div className="filter-group">
            <div className="filter-group-header">
                <span>{filter.header}</span>
            </div>
            <div className="filter-group-items">
                {
                    filter.values.map((value: any, index: number) => {
                        return (
                            <div className={`filter-group-item ${(selectedFilters[filter.key] == value && 'active')}`} key={index} onClick={() => setFilter(value)}>
                                <i className={selectedFilters[filter.key] == value ? 'fa fa-check-circle' : 'fa fa-circle-o'} aria-hidden="true"></i>
                                <span>{value}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Filter
