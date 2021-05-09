const data = require( "./population-figures-by-country-csv_json" );

const COUNTRY = "Ukraine";
const YEAR = "2016";

const year_on = year => "Year_" + year;

const country_data = country => data.filter( x => x["Country"] == country );
//console.log( country_data( COUNTRY ) );

const obj_years = country_data( COUNTRY )[ 0 ];
//console.log( obj_years );

const populationInYear = obj_years[ year_on( YEAR ) ];
console.log( populationInYear );
