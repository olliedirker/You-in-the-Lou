const { options } = require("../../controllers");

const autocompleteInput = new autocomplete.GeocoderAutocomplete(
    document.getElementById("autocomplete"), 
    '6ad86719e3024a59a955ca33eaeefacb', 
    options.type={ 
        country, state, city, postcode, street,
    }
    );

autocompleteInput.on('select', (location) => {
// check selected location here 
});

autocompleteInput.on('suggestions', (suggestions) => {
// process suggestions here
});

module.exports = Autocomplete;