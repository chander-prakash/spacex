/* eslint-disable indent */
module.exports = {
    getFilters: () => {
        return {
            launch_year: {
                header: 'Launch Year',
                values: ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                key: 'launch_year'
            },
            launch_success: {
                header: 'Successfull Launch',
                values: ['true', 'false'],
                key: 'launch_success'
            }

            // filter is not working
            // landing_success: {
            //     header: 'Successfull Landing',
            //     values: ['true', 'false'],
            //     key: 'landing_success'
            // }
        }
    }
}
