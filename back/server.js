const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const cors = require( 'cors' );

const app = express();
const PORT = 3000;

app.use( bodyParser.json() );
app.use( cors() );

let users = [];

app.post( '/submit', ( req, res ) => {
    const {
        name,
        email
    } = req.body;
    users.push( {
        name,
        email
    } );
    res.status( 200 ).json( {
        message: 'User data received and stored'
    } );
} );

app.listen( PORT, () => {
    console.log( `Server is running on http://localhost:${PORT}` );
} );
