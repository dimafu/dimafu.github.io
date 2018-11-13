// const API_URL = '/example.json?domain=';
const API_URL = 'https://apis.is/isnic?domain=';

/**
 * Leit að lénum á Íslandi gegnum apis.is
 */
const program = (() => {
  let domains;

  // Function to display the error
  function displayError(error) {
    const container = domains.querySelector('.results');

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    container.appendChild(document.createTextNode(error));
  }

  // Function to append the data to the list
  function appendToDL(dl, term, value, isDate) {
    // Append only, if the value is defined
    if (value !== undefined) {
      const key = document.createElement('dt');
      key.appendChild(document.createTextNode(term));
      dl.appendChild(key);

      // Converting date to ISO 8601 format
      if (isDate) {
        const msec = new Date(value);
        const d = msec.toISOString();
        const sep = d.split('T');
        const time = sep[0];
        const val = document.createElement('dd');
        val.appendChild(document.createTextNode(time));
        dl.appendChild(val);
        return;
      }

      const val = document.createElement('dd');
      val.appendChild(document.createTextNode(value));
      dl.appendChild(val);
    }
  }

  // Function to display the data
  function displayDomain(domainInfo) {
    if (domainInfo.length === 0) {
      displayError('Lén er ekki skráð');
      return;
    }

    const [
      {
        domain, registered, lastChange, expires, registrantname, email, address, country,
      },
    ] = domainInfo;

    const dl = document.createElement('dl');

    appendToDL(dl, 'Lén', domain);
    appendToDL(dl, 'Skráð', registered, true);
    appendToDL(dl, 'Seinast breytt', lastChange, true);
    appendToDL(dl, 'Rennur út', expires, true);
    appendToDL(dl, 'Skráningaraðili', registrantname);
    appendToDL(dl, 'Netfang', email);
    appendToDL(dl, 'Heimilisfang', address);
    appendToDL(dl, 'Land', country);

    const container = domains.querySelector('.results');

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    container.appendChild(dl);
  }

  // Function to display the loading gif
  function displayGif() {
    const container = domains.querySelector('.results');
    // Creating div that would contain gif
    const gifdiv = document.createElement('div');
    gifdiv.classList.add('loading');
    const gif = document.createElement('img');
    gif.setAttribute('src', 'loading.gif');
    gifdiv.appendChild(gif);
    // Creating text div
    const textdiv = document.createElement('div');
    textdiv.classList.add('loading');
    textdiv.appendChild(document.createTextNode('Leita að léni...'));

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    // Appending gif and text to .results
    container.appendChild(gifdiv);
    container.appendChild(textdiv);
  }

  // Function to obtain the data from the server
  function fetchData(number) {
    fetch(`${API_URL}${number}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Error occurred');
      })
      .then((data) => {
        displayDomain(data.results);
      })
      .catch(() => {
        if (document.querySelector('input').value.trim() === '') {
          // If input field is empty
          displayError('Lén verður að vera strengur');
        } else {
          // If problem with the internet
          displayError('Villa við að sækja gögn');
        }
      });
  }

  function init(_domains) {
    domains = _domains;

    function onSubmit(e) {
      e.preventDefault();
      const input = e.target.querySelector('input');

      displayGif();

      fetchData(input.value);
    }

    const form = document.querySelector('form');
    form.addEventListener('submit', onSubmit);
  }

  return {
    init,
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  const domains = document.querySelector('.domains');

  program.init(domains);
});
