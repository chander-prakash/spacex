/* eslint-disable indent */
const express = require('express')
const path = require('path')
const app = express()

// const staticFileOptions = {
//     etag: true,
//     maxage: 360000, // 1hr
//     redirect: true,
//     setHeaders: (res) => {
//         res.set({
//             'x-timestamp': Date.now()
//         })
//     }

// }
app.use(express.static(path.join(__dirname, '..', 'build')))
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
app.listen(8080)
