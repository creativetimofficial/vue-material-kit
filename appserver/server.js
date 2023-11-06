
const users = require('./users.json')
const rooms = require('./rooms.json')
const queue = require('./queue.json')
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

app.get('/room', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(users)
})
app.get('/room/:id', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(users.find(user => user.id === (req.params.id)))
})
app.post('/room', (req, res) => {
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
app.put('/room/:id', (req, res) => {
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

app.get('/queue', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(queue)
})
app.get('/queue/:id', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(queue.find(queue => queue.id === (req.params.id)))
})
app.post('/queue', (req, res) => {
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
app.delete('/queue/:id', (req, res) => {
    const deletedIndex = users.findIndex(user => user.id === Number(req.params.id))
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
    res.json(users)
})
app.get('/report/:id', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(users.find(user => user.id === (req.params.id)))
})
app.post('/report', (req, res) => {
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
app.put('/report/:id', (req, res) => {
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
app.delete('/report/:id', (req, res) => {
    const deletedIndex = users.findIndex(user => user.id === Number(req.params.id))
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