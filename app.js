const process = require('process');
const https = require( 'https' );

const year_on = require( "./functions/year_on" );
const { country_data, is_country } = require( "./functions/country_data" );
const { COUNTRY_DEFAULT, YEAR_DEFAULT, url } = require( "./config" );

const proc = process.argv;

let country = ( proc[ 2 ] ) ? proc[ 2 ] : COUNTRY_DEFAULT;
const year = ( proc[ 3 ] >= 1960 && proc[ 3 ] <= 2016 ) ? proc[ 3 ] : YEAR_DEFAULT;

https.get( url, ( res ) => {
	let body = "";

	res.on( "data", ( chunk ) => {
		body += chunk;
	} );

	res.on( "end", () => {
		try {
			const data = JSON.parse( body );
			country = is_country( country, data ) ? country : COUNTRY_DEFAULT;
			const obj_years_all = country_data( country, data );
			const obj_years = obj_years_all[ 0 ];
			const key = year_on( year );
			const population_in_year = obj_years[ key ];
			console.log( `Population in ${ country } in ${ year }: ${ population_in_year }` );        
		} catch ( error ) {
			console.error( error.message );
		};
	} );

} ).on( "error", ( error ) => {
	console.error( error.message );
} );
