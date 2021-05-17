const is_country = ( country, data ) => data.some( obj => obj["Country"] == country );
const country_data = ( country, data ) => data.filter( obj => ( obj["Country"] === country ) );

const year_on = year => "Year_" + year;

const verify_to = ( predicate, true_if, default_ ) => predicate ? true_if : default_;

module.exports = { 
	country_data, 
	is_country, 
	year_on,
	verify_to  
};
