# request-multiple-demo

Simple library for fetching an array of URLs containing JSON data and returning their contents. It also has supports and optimizes requests by chunking larger arrays.


## Install
```bash
// Via NPM
$ npm install --save request-multiple-demo

// Via Yarn
$ yarn add request-multiple-demo
```

## Usage

```javascript
import requestMultipleUrls from "request-multiple-demo";
const urls = [
            'http://example-1.com/data.json',
            'http://example-2.com/data.json',
            'http://example-3.com/data.json',
            'http://example-4.com/data.json',
            'http://example-5.com/data.json',
            'http://example-6.com/data.json',
            'http://example-7.com/data.json',
            'http://example-8.com/data.json',
            'http://example-9.com/data.json',
            'http://example-10.com/data.json',
            'http://example-11.com/data.json',
            'http://example-12.com/data.json'
]


requestMultipleUrls(urls)
.then((data) => {
  console.log(data)
 // { status: 'success', message: [{symbolInput: 'FTSE:FSI', basic: {}, quote: {} }]}
})
.catch((error) => console.error(error))

```

## Documentation

### requestMultipleUrls(urls: string[])
Returns a response

#### urls
Type: `string[]` -
The array of urls.

#### Example
```javascript
import requestMultipleUrls from "request-multiple-demo";
const urls = [
            'http://example-1.com/data.json',
            'http://example-2.com/data.json',
            'http://example-3.com/data.json',
]


requestMultipleUrls(urls)
.then((data) => {
  console.log(data)
 // { status: 'success', message: [{symbolInput: 'FTSE:FSI', basic: {}, quote: {} }]}
})
.catch((error) => console.error(error))
```

## Local Development
On your terminal console,

- Clone this repo

- `cd request-multiple-demo`

- Install dependencies `yarn install`


## Testing
Tests are located in the tests folder an can be invoked by running `yarn test`.



# Semantic release
Release management is automated using [semantic-release](https://www.npmjs.com/package/semantic-release).


## License
[The MIT License](./LICENSE)
