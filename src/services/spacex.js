const { queryByRole } = require("@testing-library/react")

module.exports = {
    getApiData: (queryString) => {
        return fetch(`https://api.spacexdata.com/v3/launches?${queryString}`).then(res => res.json());
    }
}