const data = require( "./population-figures-by-country-csv_json" );

const COUNTRY = "Ukraine";
const YEAR = "2016";

const year_on = "Year_" + YEAR;

const country_data = data.filter( x => x["Country"] == COUNTRY );
//console.log( country_data );

const obj_years = country_data[ 0 ];
//console.log( obj_years );

const populationInYear = obj_years[ year_on ];
console.log( populationInYear );
