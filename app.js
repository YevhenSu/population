const process = require('process');
const https = require( 'https' );

const year_on = require( "./functions/year_on" );
const country_data = require( "./functions/country_data" );
const { url } = require( "./config" );

const COUNTRY = process.argv[ 2 ];
const YEAR = process.argv[ 3 ];

https.get( url, ( res ) => {
    let body = "";

    res.on( "data", ( chunk ) => {
        body += chunk;
    } );

    res.on( "end", () => {
        try {
            const data = JSON.parse( body );
            const obj_years = country_data( COUNTRY, data )[ 0 ];
			const populationInYear = obj_years[ year_on( YEAR ) ];
			console.log( `Population in ${ COUNTRY } in ${ YEAR }: ${ populationInYear }` );        
		} catch ( error ) {
            console.error( error.message );
        };
    } );

} ).on( "error", ( error ) => {
    console.error( error.message );
} );
