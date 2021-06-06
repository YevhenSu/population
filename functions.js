const country_generic = method => ( country, data ) => data[ method ]( obj => obj["Country"] === country );

const is_country = country_generic( 'some' );

const country_data = country_generic( 'filter' );

const year_on = year => "Year_" + year;

const verify_to = ( predicate, true_if, default_ ) => predicate ? true_if : default_;

function processed_to( body, country_input, country_default, key, year ) {
	const data = JSON.parse( body );

	const predicate_country = is_country( country_input, data );
	const country = verify_to( predicate_country, country_input, country_default );
	const arr_obj_years = country_data( country, data );
	const obj_years = arr_obj_years[ 0 ];
	const population_in_year = obj_years[ key ];
	const output_to = `Population in ${ country } in ${ year }: ${ population_in_year }`;        
	console.log( output_to );
}

module.exports = { 
	country_data, 
	is_country, 
	year_on,
	verify_to,
	processed_to
};





	

