# CYPHER LIBRARY

Base on JS encrypt library this library helps you to encrypt and decrypt huge data.
The library works with rsa 2048 keys pairs

## Installation

Use the npm package manager [npm](https://www.npmjs.com/) to install @sir_koty/cypher-library
```bash
npm install @sir_koty/cypher-library
```

## Usage
```javascript
import { Cypher } from "@sir_koty/cypher-library";

const public_key = `MY_SECRET_RSA_2048_PUBLIC_KEY`;
const private_key = `MY_SECRET_RSA_2048_PRIVATE_KEY`;

// Set rsa key (2048)
Cypher.setPrivateKey(private_key);
Cypher.setPublicKey(public_key);

// Encryption
const clearText = "Hello world .... MMMMM"; // You can put more than 214 characters
const encrytedData = Cypher.encrypt(clearText); 
console.log('encrypted data ', encryptedData); // [XXXXXX, ZZZZZZ];

// Decryption
const decryptedData = Cypher.decrypt(encrytedData);
console.log('decrypted data ', decryptedData); // "Hello world .... MMMMM" (clearText)

```

## Demo
    #Stackblitz : https://stackblitz.com/edit/cypher-sample?file=src%2Fapp%2Fapp.component.ts

## version 2.0.3

## License
[MIT](https://choosealicense.com/licenses/mit/)