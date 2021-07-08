'use strict';

// did not implement
const URL_TEMPLATE = "https://itunes.apple.com/search?entity=song&limit=25&term=";

function fetchTop100(search) {//gets 25 songs from search

  var promise = fetch(URL_TEMPLATE + search)
    .then((response => {
      return response.json()
    }))
    .then(renderSearch)
    .catch(renderError)

  return promise
}