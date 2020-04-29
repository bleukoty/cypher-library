import QuickEncrypt from 'quick-encrypt';

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
        
        // secure data
        const dataEncrypted = dataString.match(/.{1,190}/g).map((str: string) => QuickEncrypt.encrypt(str, publicKey));
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

        // secure data
        return QuickEncrypt.encrypt(dataString, publicKey);

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

        cryptData.forEach(valuex => {
            result = QuickEncrypt.decrypt(valuex, privateKey);
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
