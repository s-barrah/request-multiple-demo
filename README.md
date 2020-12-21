# request-multiple-demo

Simple library for making multiple data requests from an array of URLs. It also has supports and optimizes large requests by chunking larger arrays.


## Install
```bash
// Via NPM
$ npm install --save request-multiple-library

// Via Yarn
$ yarn add request-multiple-library
```

## Usage

```javascript
import requestMultipleUrls from "request-multiple-library";
const urls = [
            'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
            'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
            'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
]


requestMultipleUrls(urls)
.then((data) => {
  console.log(data)
 // { status: 'success', message: [{symbolInput: 'FTSE:FSI', basic: {}, quote: {} }]}
})
.catch((error) => {

})

```

## Documentation

### requestMultipleUrls(urls: string[])
Returns a response

#### urls
Type: `string[]` -
The array of urls.

#### Example
```javascript
import requestMultipleUrls from "request-multiple-library";
const urls = [
            'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
            'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
            'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
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
