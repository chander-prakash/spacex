/* eslint-disable indent */
const dataSet = {}
module.exports = {
    getApiData: (queryString) => {
        const url = `https://api.spacexdata.com/v3/launches?${queryString}`
        if (dataSet[url] !== undefined) return dataSet[url]
        return fetch(url).then(res => res.json()).then((missions) => {
            // setting for later calls
            dataSet[url] = missions
            return missions
        })
    }
}
