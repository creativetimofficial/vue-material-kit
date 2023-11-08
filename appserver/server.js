
const users = require('./users.json')
const rooms = require('./rooms.json')
const queue = require('./queue.json')
const building = require('./building.json')
const Expenses = require('./Expenses.json')
const history = require('./้history.json')
const reports = require('./report.json')
const masterData = require('./masterData.json')
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3001;
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
// - เวอร์ชั่น Express 4.16.0+ ขึ้นไป
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.options('*', cors())

app.get("/", (req, res) => {
    res.send("Hello! Node.js");
});
app.get('/users', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(users)
})

app.get('/users/:id', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(users.find(user => user.id === (req.params.id)))
})
app.post('/users', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    let id = uuidv4();
    let body = req.body
    let data = { id: id, ...body }
    users.push(data)
    fs.writeFile('./users.json', JSON.stringify(users), err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file', users)
        }
    })
    res.json(users)
})
app.put('/users/:id', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const updateIndex = users.findIndex(user => user.id === (req.params.id))
    let dataOld = users[updateIndex]
    let filterdata = users.filter(user => user.id !== (req.params.id))
    const parsedData = dataOld;
    if (req.body.firstName) parsedData.firstName = req.body.firstName
    if (req.body.lastName) parsedData.lastName = req.body.lastName
    if (req.body.affiliation) parsedData.affiliation = req.body.affiliation
    if (req.body.rank) parsedData.rank = req.body.rank
    if (req.body.idcard) parsedData.idcard = req.body.idcard
    if (req.body.phone) parsedData.phone = req.body.phone
    if (req.body.status) parsedData.status = req.body.status
    if (req.body.typeAffiliation) parsedData.typeAffiliation = req.body.typeAffiliation
    if (req.body.typeRanks) parsedData.typeRanks = req.body.typeRanks
    if (req.body.queue) parsedData.queue = req.body.queue
    if (req.body.no) parsedData.no = req.body.no
    if (req.body.bookNumber) parsedData.bookNumber = req.body.bookNumber
    if (req.body.pickedBook) parsedData.pickedBook = req.body.pickedBook
    if (req.body.typeRoom) parsedData.typeRoom = req.body.typeRoom
    filterdata.push(parsedData)
    fs.writeFile('./users.json', JSON.stringify(filterdata, null, 2), (err) => {
        if (err) {
            console.log("Failed to write updated data to file");
            return;
        }
        console.log("Updated file successfully");
    });
    res.send(`Update user id: '${req.params.id}' completed.`)
})
app.delete('/users/:id', (req, res) => {
    const deletedIndex = users.findIndex(user => user.id === Number(req.params.id))
    res.send(`Delete user '${users[deletedIndex].username}' completed.`)
})

app.get('/buildings', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(building)
})
app.get('/buildings/:name', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(building.find(user => user.name === (req.params.name)))
})
app.post('/buildings', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    let id = uuidv4();
    let body = req.body
    let data = { id: id, ...body }
    building.push(data)
    fs.writeFile('./building.json', JSON.stringify(building), err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file', building)
        }
    })
    res.json(building)
})

app.get('/expenses', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(Expenses)
})

app.post('/expenses', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    let id = uuidv4();
    let body = req.body
    let data = { id: id, ...body }
    Expenses.push(data)
    fs.writeFile('./Expenses.json', JSON.stringify(Expenses), err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file', Expenses)
        }
    })
    res.json(Expenses)
})

app.get('/rooms', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(rooms)
})
app.get('/rooms/:id', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log(req.params.id);
    res.json(rooms.find(room => room.index == (req.params.id)))
})
app.post('/rooms', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    let id = uuidv4();
    let body = req.body
    let data = { id: id, ...body }
    rooms.push(data)
    fs.writeFile('./rooms.json', JSON.stringify(rooms), err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file', rooms)
        }
    })
    res.json(rooms)
})
app.put('/rooms/:id', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const updateIndex = rooms.findIndex(user => user.id === (req.params.id))
    let dataOld = rooms[updateIndex]
    let filterdata = rooms.filter(user => user.id !== (req.params.id))
    const parsedData = dataOld;
    if (req.body.firstName) parsedData.firstName = req.body.firstName
    if (req.body.lastName) parsedData.lastName = req.body.lastName
    if (req.body.affiliation) parsedData.affiliation = req.body.affiliation
    if (req.body.rank) parsedData.rank = req.body.rank
    if (req.body.idcard) parsedData.idcard = req.body.idcard
    if (req.body.phone) parsedData.phone = req.body.phone
    if (req.body.status) parsedData.status = req.body.status
    if (req.body.typeAffiliation) parsedData.typeAffiliation = req.body.typeAffiliation
    if (req.body.typeRanks) parsedData.typeRanks = req.body.typeRanks
    filterdata.push(parsedData)
    fs.writeFile('./rooms.json', JSON.stringify(filterdata, null, 2), (err) => {
        if (err) {
            console.log("Failed to write updated data to file");
            return;
        }
        console.log("Updated file successfully");
    });
    res.send(`Update user id: '${req.params.id}' completed.`)
})

app.get('/queue/:name', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    let list = users.filter(user => user.queue === req.params.name)
    res.json(list)
})
app.get('/queue/:id', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(queue.find(queue => queue.id === (req.params.id)))
})
app.put('/queue', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    let id = uuidv4();
    let body = req.body
    let data = { id: id, ...body }
    queue.push(data)
    fs.writeFile('./queue.json', JSON.stringify(queue), err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file', queue)
        }
    })
    res.json(queue)
})
app.put('/queue/:id', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const updateIndex = users.findIndex(user => user.id === (req.params.id))
    let dataOld = users[updateIndex]
    let filterdata = users.filter(user => user.id !== (req.params.id))
    const parsedData = dataOld;
    console.log(req.body);
    if (req.body.firstName) parsedData.firstName = req.body.firstName
    if (req.body.lastName) parsedData.lastName = req.body.lastName
    if (req.body.affiliation) parsedData.affiliation = req.body.affiliation
    if (req.body.rank) parsedData.rank = req.body.rank
    if (req.body.idcard) parsedData.idcard = req.body.idcard
    if (req.body.phone) parsedData.phone = req.body.phone
    if (req.body.status) parsedData.status = req.body.status
    if (req.body.typeAffiliation) parsedData.typeAffiliation = req.body.typeAffiliation
    if (req.body.typeRanks) parsedData.typeRanks = req.body.typeRanks
    if (req.body.queue) parsedData.queue = req.body.queue
    if (req.body.no) parsedData.no = req.body.no
    if (req.body.bookNumber) parsedData.bookNumber = req.body.bookNumber
    if (req.body.pickedBook) parsedData.pickedBook = req.body.pickedBook
    if (req.body.typeRoom) parsedData.typeRoom = req.body.typeRoom
    filterdata.push(parsedData)
    fs.writeFile('./users.json', JSON.stringify(filterdata, null, 2), (err) => {
        if (err) {
            console.log("Failed to write updated data to file");
            return;
        }
        console.log("Updated file successfully");
    });
    res.send(`Update user id: '${req.params.id}' completed.`)
})

app.get('/history', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    let list = users.filter(history => history.queue === req.params.name)
    res.json(list)
})
app.get('/history/:id', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(history.find(history => history.id === (req.params.id)))
})
app.post('/history', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    let id = uuidv4();
    let body = req.body
    let data = { id: id, ...body }
    history.push(data)
    fs.writeFile('./history.json', JSON.stringify(history), err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file', history)
        }
    })
    res.json(history)
})
app.put('/history/:id', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const updateIndex = history.findIndex(user => user.id === (req.params.id))
    let dataOld = history[updateIndex]
    let filterdata = history.filter(user => user.id !== (req.params.id))
    const parsedData = dataOld;
    if (req.body.firstName) parsedData.firstName = req.body.firstName
    if (req.body.lastName) parsedData.lastName = req.body.lastName
    if (req.body.affiliation) parsedData.affiliation = req.body.affiliation
    if (req.body.rank) parsedData.rank = req.body.rank
    if (req.body.idcard) parsedData.idcard = req.body.idcard
    if (req.body.phone) parsedData.phone = req.body.phone
    if (req.body.status) parsedData.status = req.body.status
    if (req.body.typeAffiliation) parsedData.typeAffiliation = req.body.typeAffiliation
    if (req.body.typeRanks) parsedData.typeRanks = req.body.typeRanks
    if (req.body.queue) parsedData.queue = req.body.queue
    if (req.body.no) parsedData.no = req.body.no
    if (req.body.bookNumber) parsedData.bookNumber = req.body.bookNumber
    filterdata.push(parsedData)
    fs.writeFile('./history.json', JSON.stringify(filterdata, null, 2), (err) => {
        if (err) {
            console.log("Failed to write updated data to file");
            return;
        }
        console.log("Updated file successfully");
    });
    res.send(`Update user id: '${req.params.id}' completed.`)
})
app.delete('/history/:id', (req, res) => {
    const deletedIndex = history.findIndex(history => user.id === Number(req.params.id))
    res.send(`Delete user '${users[deletedIndex].username}' completed.`)
})


app.get('/layout', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(users)
})
app.get('/layout/:id', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(users.find(user => user.id === (req.params.id)))
})
app.post('/layout', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    let id = uuidv4();
    let body = req.body
    let data = { id: id, ...body }
    users.push(data)
    fs.writeFile('./users.json', JSON.stringify(users), err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file', users)
        }
    })
    res.json(users)
})
app.put('/layout/:id', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const updateIndex = users.findIndex(user => user.id === (req.params.id))
    let dataOld = users[updateIndex]
    let filterdata = users.filter(user => user.id !== (req.params.id))
    const parsedData = dataOld;
    if (req.body.firstName) parsedData.firstName = req.body.firstName
    if (req.body.lastName) parsedData.lastName = req.body.lastName
    if (req.body.affiliation) parsedData.affiliation = req.body.affiliation
    if (req.body.rank) parsedData.rank = req.body.rank
    if (req.body.idcard) parsedData.idcard = req.body.idcard
    if (req.body.phone) parsedData.phone = req.body.phone
    if (req.body.status) parsedData.status = req.body.status
    if (req.body.typeAffiliation) parsedData.typeAffiliation = req.body.typeAffiliation
    if (req.body.typeRanks) parsedData.typeRanks = req.body.typeRanks
    filterdata.push(parsedData)
    fs.writeFile('./users.json', JSON.stringify(filterdata, null, 2), (err) => {
        if (err) {
            console.log("Failed to write updated data to file");
            return;
        }
        console.log("Updated file successfully");
    });
    res.send(`Update user id: '${req.params.id}' completed.`)
})
app.delete('/layout/:id', (req, res) => {
    const deletedIndex = users.findIndex(user => user.id === Number(req.params.id))
    res.send(`Delete user '${users[deletedIndex].username}' completed.`)
})

app.get('/report', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(reports)
})
app.get('/report/:id', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(reports.find(user => user.id === (req.params.id)))
})
app.post('/report', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    let id = uuidv4();
    let body = req.body
    let data = { id: id, ...body }
    users.push(data)
    fs.writeFile('./report.json', JSON.stringify(users), err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file', reports)
        }
    })
    res.json(reports)
})
app.put('/report/:id', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const updateIndex = reports.findIndex(user => user.id === (req.params.id))
    let dataOld = reports[updateIndex]
    let filterdata = reports.filter(user => user.id !== (req.params.id))
    const parsedData = dataOld;
    if (req.body.firstName) parsedData.firstName = req.body.firstName
    if (req.body.lastName) parsedData.lastName = req.body.lastName
    if (req.body.affiliation) parsedData.affiliation = req.body.affiliation
    if (req.body.rank) parsedData.rank = req.body.rank
    if (req.body.idcard) parsedData.idcard = req.body.idcard
    if (req.body.phone) parsedData.phone = req.body.phone
    if (req.body.status) parsedData.status = req.body.status
    if (req.body.typeAffiliation) parsedData.typeAffiliation = req.body.typeAffiliation
    if (req.body.typeRanks) parsedData.typeRanks = req.body.typeRanks
    filterdata.push(parsedData)
    fs.writeFile('./users.json', JSON.stringify(filterdata, null, 2), (err) => {
        if (err) {
            console.log("Failed to write updated data to file");
            return;
        }
        console.log("Updated file successfully");
    });
    res.send(`Update user id: '${req.params.id}' completed.`)
})
app.delete('/report/:id', (req, res) => {
    const deletedIndex = reports.findIndex(user => user.id === Number(req.params.id))
    res.send(`Delete user '${users[deletedIndex].username}' completed.`)
})

app.get('/utilitie', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(users)
})
app.get('/utilitie/:id', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(users.find(user => user.id === (req.params.id)))
})
app.post('/utilitie', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    let id = uuidv4();
    let body = req.body
    let data = { id: id, ...body }
    users.push(data)
    fs.writeFile('./users.json', JSON.stringify(users), err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file', users)
        }
    })
    res.json(users)
})
app.put('/utilitie/:id', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const updateIndex = users.findIndex(user => user.id === (req.params.id))
    let dataOld = users[updateIndex]
    let filterdata = users.filter(user => user.id !== (req.params.id))
    const parsedData = dataOld;
    if (req.body.firstName) parsedData.firstName = req.body.firstName
    if (req.body.lastName) parsedData.lastName = req.body.lastName
    if (req.body.affiliation) parsedData.affiliation = req.body.affiliation
    if (req.body.rank) parsedData.rank = req.body.rank
    if (req.body.idcard) parsedData.idcard = req.body.idcard
    if (req.body.phone) parsedData.phone = req.body.phone
    if (req.body.status) parsedData.status = req.body.status
    if (req.body.typeAffiliation) parsedData.typeAffiliation = req.body.typeAffiliation
    if (req.body.typeRanks) parsedData.typeRanks = req.body.typeRanks
    filterdata.push(parsedData)
    fs.writeFile('./users.json', JSON.stringify(filterdata, null, 2), (err) => {
        if (err) {
            console.log("Failed to write updated data to file");
            return;
        }
        console.log("Updated file successfully");
    });
    res.send(`Update user id: '${req.params.id}' completed.`)
})
app.delete('/utilitie/:id', (req, res) => {
    const deletedIndex = users.findIndex(user => user.id === Number(req.params.id))
    res.send(`Delete user '${users[deletedIndex].username}' completed.`)
})
app.listen(port, () => {
    console.log(`Starting node.js at port ${port}`);
});