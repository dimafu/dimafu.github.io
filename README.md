# Project 9

Search and display of the domain name should be developed through `apis.is`. `http://apis.is/isnic?domain=hi.is` searches for information about `hi.is` and returns an object, e.g.:

```javascript
{
  "results": [
    {
    "domain": "hi.is",
    "registrantname": "Háskóli Íslands",
    "address": "Sæmundargötu 2",
    "city": "Reykjavík",
    "postalCode": "101",
    "country": "IS",
    "phone": "",
    "email": "hostmaster@hi.is",
    "registered": "11. December 1986",
    "expires": "11. December 2018",
    "lastChange": "29. November 2017"
    }
  ]
}
```

HTML and CSS base of the outlook is given and shall not be changed.

Search should:

* Only allow to search if value in `<input>` is not an empty string, otherwise should show a message `Lén verður að vera strengur`
* Show a message `Leita að léni...` along with the image `loading.gif` while searching, see `.loading` class

Error handling:

* If an error comes from `apis.is` or with the connection shall display `Villa við að sækja gögn`
* If no domain name is found shall display `Lén er ekki skráð`

For all the found domains should display:

* Lén `domain`
* Skráð `registered`
* Seinast breytt `lastChange`
* Rennur út `expires`

If defined should also display:

* Skráningaraðili `registrantname`
* Netfang `email`
* Heimilisfang `address`
* Land `country`

Dates should be displayed as [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) dates (`YYYY-MM-DD`).

Javascript functionality should be developed within the given module.

`browser-sync` is set up in the project:

```bash
npm install
npm run dev
```

See example in `demo.mp4`.

If apis.is is down an example is given in `example.json` which can be accessed instead of the data by directly referring in that file for all the requests.

## eslint

Should set up `eslint` with airbnb style guide. `eslint` should run when `npm test` is ran and lint all javascript files.

It is allowed to disable error messages `for of` loops with `/* eslint-disable-line */`, also it is acceptable to use that or allow general `console.error`. It should not be used for anything else and other errors that pop up should be fixed.

## Assessment

* 20% – Neat JavaScript with `eslint` set up and without errors
* 30% – Domain name search
* 30% – Results display
* 20% – Debugging

## Posted

Project is set up before the lecture on Monday 5th of November 2018.

## Submission

Should be turned in under „Verkefni og hlutaprófa“ on Ugla the latest by the end of the day on Tuesday 13th November 2018.

Message should include:

* Path to the project's homepage
* Path to the GitHub repo for the project, and teaching assistants (TA) should be added as collaborators in a repo ([sjá leiðbeiningar](https://help.github.com/articles/inviting-collaborators-to-a-personal-repository/)). Their usernames are `arnar44`, `mimiqkz`, `gorri4`, `hinriksnaer`, `gunkol`, `freyrdanielsson`, `osk`

## Grading

There will be ten smaller projects where eight best worth 3,5% each, in total 28% of final grade.

There will be two group projects where each of them worth 11%, in total 22% of final grade.

---

> Version 0.2
