const https = require('https');

const year_on = require( "./functions/year_on" );
const country_data = require( "./functions/country_data" );
const { COUNTRY, YEAR } = require( "./config" );

const url = "https://pkgstore.datahub.io/JohnSnowLabs/population-figures-by-country/population-figures-by-country-csv_json/data/2159fad77778c3b584f3d396593e0af6/population-figures-by-country-csv_json.json";

https.get(url,(res) => {
    let body = "";

    res.on("data", (chunk) => {
        body += chunk;
    });

    res.on("end", () => {
        try {
            let data = JSON.parse(body);
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

