const process = require('process');
const https = require( 'https' );

const year_on = require( "./functions/year_on" );
const { country_data, is_country } = require( "./functions/country_data" );
const { COUNTRY_DEFAULT, YEAR_DEFAULT, url } = require( "./config" );

const COUNTRY_INPUT = process.argv[ 2 ];
const YEAR_INPUT = process.argv[ 3 ];

let country = ( COUNTRY_INPUT ) ? COUNTRY_INPUT : COUNTRY_DEFAULT;
const year = ( YEAR_INPUT >= 1960 && YEAR_INPUT <= 2016 ) ? YEAR_INPUT : YEAR_DEFAULT;

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
