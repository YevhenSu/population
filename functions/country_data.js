const is_country = ( country, data ) => data.some( obj => obj["Country"] == country );
const country_data = ( country, data ) => data.filter( obj => ( obj["Country"] === country ) );

module.exports = { country_data, is_country };
