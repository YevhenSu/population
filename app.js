const process = require('process');
const https = require( 'https' );

const { 
	country_data, 
	is_country, 
	year_on, 
	verify_to,
	processed_to
} = require( "./functions" );

const { 
	COUNTRY_DEFAULT, 
	YEAR_DEFAULT, 
	URL_API, 
	YEAR_START, 
	YEAR_END 
} = require( "./config" );

const COUNTRY_INPUT = process.argv[ 2 ];
const YEAR_INPUT = process.argv[ 3 ];

const predicate_year = YEAR_INPUT >= YEAR_START && YEAR_INPUT <= YEAR_END;
const year = verify_to( predicate_year, YEAR_INPUT, YEAR_DEFAULT );
const key = year_on( year );

const callback = ( res ) => {
	
	let body = "";

	res.on( "data", ( chunk ) => {
		body += chunk;
	} );

	res.on( "end", () => {
		try {
			processed_to( 
				body, 
				COUNTRY_INPUT, 
				COUNTRY_DEFAULT, 
				key, 
				year 
			);        
		} catch ( error ) {
			console.error( error.message );
		};
	} );

};

https.get( 
	URL_API, 
	callback 
).on( "error", ( error ) => {
	console.error( error.message );
} );
