const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const host = process.env.host;
const portNumber = process.env.portNumber ? process.env.portNumber : 8800;
const url = `${process.env.url}:${portNumber}`;
const connectDB = require('./src/db/connectionDB');
const routes = require('./src/route/index');

// heartbeat api
app.get('/', (_, res) => {
    console.log("Server is up and running!!!");
    res.status(200).send({
        statusCode: 200,
        success: true,
        status: `OK`,
        message: `Server is up and running`
    });
});

app.use(routes);

// route not found
app.use((req, res) => {
    console.log(`${req.method + ' ' + req.url} route not found`);
    res.status(404).json({
        status: 404,
        message: 'Route Not Found'
    });
});

async function startServer() {
    console.log("-----------------In index file & startServer method-------------");
    try{
        await connectDB();
        app.listen(portNumber, host, (err) => {
            if(!err) {
                console.log(`Server is running and listening on port: ${portNumber} and host: ${host}`);
                console.log(`To access the http server run the following url in browser: ${url}`);
            } else {
                console.log(`Error occurred, server can't start: ${err}`);
            }
        });
    }catch(err){
        console.log("---------------In catch block of index file & startServer method-------------");
        console.log(`Server can't start - connection to DataBase cannot establish\n${err}`);
    }
};

startServer();


