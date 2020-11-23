const JSEncrypt = require('js-encrypt').JSEncrypt;
const encryptor = new JSEncrypt();
const decryptor = new JSEncrypt();

export namespace Cypher {
  /**
   * this function encrypts data and returns the encrypted data in array of string
   * @param data - any kind of data to encrypt
   * @param publicKey - Use either 2048 bits or 1024 bits.
   */
  export function encrypt(data: any, publicKey = null): string[] {
    let dataString: any = '';
    if (typeof data === 'object') {
      dataString = JSON.stringify(data);
    } else if (typeof data === 'number') {
      dataString = data.toString();
    } else {
      dataString = data;
    }

    if (publicKey) encryptor.setPublicKey(publicKey);

    // secure data
    const dataEncrypted = dataString.match(/.{1,214}/g).map((str: string) => {
      return encryptor.encrypt(str);
    });
    return dataEncrypted;
  }

  /**
   * this function encrypts data and returns the encrypted data in array of string
   * @param cryptData - any kind of data to encrypt
   * @param privateKey - Use either 2048 bits or 1024 bits.
   */
  export function decrypt(cryptData: string[], privateKey = null): any {
    if (cryptData == null) {
      return cryptData;
    }
    let plainText = '',
      result = '',
      finalResult = '';

    if (privateKey) decryptor.setPrivateKey(privateKey);

    cryptData.forEach((valuex) => {
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

  /**
   * this function encrypts data and returns the encrypted data in array of string
   * @param cryptData - any kind of data to encrypt
   * @param privateKey - Use either 2048 bits or 1024 bits.
   */
  export function decryptASync(cryptData: string[], privateKey = null): Promise<any> {
    if (cryptData == null) {
      return cryptData;
    }
    if (privateKey) decryptor.setPrivateKey(privateKey);

    const promiseArray = cryptData.map(
      (value) =>
        new Promise((resolve, reject) => {
          try {
            resolve(decryptor.decrypt(value));
          } catch (err) {
            reject('Erreur lors du décryptage');
          }
        }),
    );
    return Promise.all(promiseArray).then((result) => {
      const res = result.join('');
      try {
        return JSON.parse(res);
      } catch (error) {
        return res;
      }
    });
  }

  // set private key (RSA KEY 2048)
  export function setPrivateKey(privateKey: string) {
    decryptor.setPrivateKey(privateKey);
  }

  // set public key (RSA KEY 2048)
  export function setPublicKey(publicKey: string) {
    encryptor.setPublicKey(publicKey);
  }
}
