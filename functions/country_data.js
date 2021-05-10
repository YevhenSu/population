const is_country = ( country, data ) => data.some( x => x["Country"] == country );
const country_data = ( country, data ) => data.filter( x => ( x["Country"] === country ) );

module.exports = { country_data, is_country  };
