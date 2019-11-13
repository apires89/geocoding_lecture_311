import places from 'places.js';

const initAutocomplete = () => {
  const address = document.getElementById('flat_address');
  if (address) {
    places({ container: address });
  }

}

export { initAutocomplete }
