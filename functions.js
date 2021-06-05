const country_generic = method => ( country, data ) => data[ method ]( obj => obj["Country"] === country );

const is_country = country_generic( 'some' );

const country_data = country_generic( 'filter' );

const year_on = year => "Year_" + year;

const verify_to = ( predicate, true_if, default_ ) => predicate ? true_if : default_;

module.exports = { 
	country_data, 
	is_country, 
	year_on,
	verify_to  
};
