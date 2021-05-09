const https = require('https');

const year_on = require( "./functions/year_on" );
const country_data = require( "./functions/country_data" );
const { COUNTRY, YEAR, url } = require( "./config" );

https.get(url,(res) => {
    let body = "";

    res.on("data", (chunk) => {
        body += chunk;
    });

    res.on("end", () => {
        try {
            const data = JSON.parse(body);
            const obj_years = country_data( COUNTRY, data )[ 0 ];
			const populationInYear = obj_years[ year_on( YEAR ) ];
			console.log( populationInYear );        
		} catch (error) {
            console.error(error.message);
        };
    });

}).on("error", (error) => {
    console.error(error.message);
});

