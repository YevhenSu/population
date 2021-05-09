const data = require( "./population-figures-by-country-csv_json" );
const year_on = require( "./functions/year_on" );
const country_data = require( "./functions/country_data" );
const { COUNTRY, YEAR } = require( "./config" );

const obj_years = country_data( COUNTRY, data )[ 0 ];

const populationInYear = obj_years[ year_on( YEAR ) ];
console.log( populationInYear );
