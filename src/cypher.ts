//const NodeRSA = require('node-rsa');
const JSEncrypt = require('js-encrypt').JSEncrypt;
const encryptor = new JSEncrypt();
const decryptor = new JSEncrypt();

export namespace Cypher {

    /**
     * this function encrypts data and returns the encrypted data in array of string
     * @param data - any kind of data to encrypt
     * @param publicKey - Use either 2048 bits or 1024 bits.
     */
    export function encrypt(data: any, publicKey: string): string[] {
        let dataString: any = '';
        if (typeof (data) === 'object') {
            dataString = JSON.stringify(data);
        } else if (typeof (data) === 'number') {
            dataString = data.toString();
        } else {
            dataString = data;
        }
        // const encryptor = new NodeRSA(publicKey);
        // encryptor.setOptions({ encryptionScheme: 'pkcs1' });
        encryptor.setPublicKey(publicKey);
        
        // secure data
        const dataEncrypted = dataString.match(/.{1,190}/g).map((str: string) => { 
            // return encryptor.encrypt(str, 'base64', 'ascii');
            return encryptor.encrypt(str);
        });
        return dataEncrypted;
    }

    /**
     * this function returns an data encrypted but the data in must to be short less of 190 caractères
     * @param data 
     * @param publicKey 
     */
    export function encryptSimple(data: any, publicKey: string): string {
        let dataString = '';
        if (typeof (data) === 'object') {
            dataString = JSON.stringify(data);
        } else if (typeof (data) === 'number') {
            dataString = data.toString();
        } else {
            dataString = data;
        }
        encryptor.setPublicKey(publicKey);

        // const encryptor = new NodeRSA(publicKey);
        // secure data
        return encryptor.encrypt(dataString);

    }

    /**
     * this function encrypts data and returns the encrypted data in array of string
     * @param cryptData - any kind of data to encrypt
     * @param privateKey - Use either 2048 bits or 1024 bits.
     */
    export function decrypt(cryptData: string[], privateKey: string) {
        if (cryptData == null) {
            return cryptData;
        }
        let plainText = '', result = '', finalResult = '';
        decryptor.setPrivateKey(privateKey);
        //const decryptor = new NodeRSA(privateKey);
        //decryptor.setOptions({ encryptionScheme: 'pkcs1' });
        cryptData.forEach(valuex => {
            // result = decryptor.decrypt(valuex, 'utf8');
            result = decryptor.decrypt(valuex);
            if (Object.is(result, null)) {
                throw new Error('Erreur lors du décryptage');
            }
            plainText += result;
        });

        try {
            finalResult = JSON.parse(plainText);
        } catch (error) {
            finalResult = plainText;
        }

        return finalResult;
    }
}
