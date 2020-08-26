/* eslint-disable indent */
import queryString from 'query-string'
import React, { useContext, useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
// filter service
import { getFilters } from '../../services/filters'
import { getApiData } from '../../services/spacex'
// importing context
import { MissionContext } from './../../context/mission'
// Filter Each component
import Filter from './Filter'

interface FilterValues {
    [key: string]: {
        header: string,
        values: string[],
        key: string
    }
}

const FilterWrapper = ({ history, location }: any) => {
    // use context
    const { setMissions, setIsLoading } = useContext(MissionContext)

    // selected filters
    const [selectedFilterCount, setSelectedFilterCount] = useState(0)
    const [selectedFilters, setSelectedFilters] = useState<any>({
        launch_year: null,
        launch_success: null,
        landing_success: null
    })

    // filter options
    const filters: FilterValues = getFilters()

    // updating the counter
    useEffect(() => {
        checkCounterAndUdpate()
    }, [location.search])

    const checkCounterAndUdpate = async () => {
        const params = queryString.parse(location.search)
        let counter = 0

        // making a copy of selectedFilterValues
        const filterValues = { ...selectedFilters }

        // updating counter variable && updating filter values
        Object.keys(selectedFilters).map(key => {
            // checking for valid value's only, not updating any value in state
            if ((params[key] !== undefined && filters[key].values.indexOf(params[key] as string) !== -1)) {
                counter++
                filterValues[key] = params[key]
            } else {
                filterValues[key] = null
            }
        })

        // updating selected filter values
        setSelectedFilters(filterValues)

        // setting counter value
        setSelectedFilterCount(counter)

        // setting loader
        setIsLoading(true)

        // calling API
        const missions = await getApiData(queryString.stringify(filterValues))
        setIsLoading(false)
        setMissions(missions)
    }

    return (
        <aside className='filters-container'>
            <header className='filter-header'>
                <h2>
                    Filters
                </h2>
                <div className='selected-filter-count'>
                    {selectedFilterCount}/3
                </div>
            </header>

            <section className='filter-groups'>
                {/* Each Filter's */}

                {
                    Object.values(filters).map((filter, index) => {
                        return (
                            <Filter key={index} filter={filter} history={history} selectedFilters={selectedFilters} />
                        )
                    })
                }
            </section>
        </aside>
    )
}

export default withRouter(FilterWrapper)
