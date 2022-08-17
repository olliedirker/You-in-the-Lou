import { GeocoderAutocomplete } from '@geoapify/geocoder-autocomplete';

const { options } = require("../../controllers");



    const autocomplete = new GeocoderAutocomplete(
        document.getElementById("autocomplete"), 
        '6ad86719e3024a59a955ca33eaeefacb', 
            options.type={ 
        country, state, city, postcode, street,  });

autocomplete.on('select', (location) => {
// check selected location here 
});

autocomplete.on('suggestions', (suggestions) => {
// process suggestions here
});

