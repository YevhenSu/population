const process = require('process');
const https = require( 'https' );

const { country_data, is_country, year_on  } = require( "./functions" );
const { COUNTRY_DEFAULT, YEAR_DEFAULT, url, YEAR_START, YEAR_END } = require( "./config" );

const COUNTRY_INPUT = process.argv[ 2 ];
const YEAR_INPUT = process.argv[ 3 ];

const country = ( COUNTRY_INPUT ) ? COUNTRY_INPUT : COUNTRY_DEFAULT;
const year = ( YEAR_INPUT >= YEAR_START && YEAR_INPUT <= YEAR_END ) ? YEAR_INPUT : YEAR_DEFAULT;

https.get( url, ( res ) => {
	let body = "";

	res.on( "data", ( chunk ) => {
		body += chunk;
	} );

	res.on( "end", () => {
		try {
			const data = JSON.parse( body );
			const country_checked = is_country( country, data ) ? country : COUNTRY_DEFAULT;
			const obj_years_all = country_data( country_checked, data );
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
