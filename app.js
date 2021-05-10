const process = require('process');
const https = require( 'https' );

const year_on = require( "./functions/year_on" );
const country_data = require( "./functions/country_data" );
const { COUNTRY_DEFAULT, YEAR_DEFAULT, url } = require( "./config" );

const country = process.argv[ 2 ] ? process.argv[ 2 ] : COUNTRY_DEFAULT;
const year = process.argv[ 3 ] ? process.argv[ 3 ] : YEAR_DEFAULT;

https.get( url, ( res ) => {
    let body = "";

    res.on( "data", ( chunk ) => {
        body += chunk;
    } );

    res.on( "end", () => {
        try {
            const data = JSON.parse( body );
            const obj_years = country_data( country, data )[ 0 ];
			const population_in_year = obj_years[ year_on( year ) ];
			console.log( `Population in ${ country } in ${ year }: ${ population_in_year }` );        
		} catch ( error ) {
            console.error( error.message );
        };
    } );

} ).on( "error", ( error ) => {
    console.error( error.message );
} );
