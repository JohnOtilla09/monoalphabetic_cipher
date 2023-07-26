import React, { useState } from "react";

import CipherContext from "./cipher-context";

const plainAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const cipherAlphabet = ['z', 'x', 'r', 'k', 'm', 'w', 'i', 'd', 'v', 'e', 's', 'h', 'l', 'y', 'g', 'f', 'a', 'n', 'o', 't', 'c', 'p', 'q', 'u', 'j', 'b'];

const CipherProvider = (props) => {
    const [ incryptedText, setIncryptedText ] = useState('');
    const [ decryptedText, setDecryptedText ] = useState('');

    const incryptPlainTextHandler = (plainText) => {
        const plainTextArray = Array.from(plainText);
        let cipherText = '';
        setDecryptedText('');

        for (let i = 0; i < plainTextArray.length; i++) {
            const letter = plainTextArray[i].toLowerCase();

            if (letter === ' ' && i !== 0) {
                cipherText = cipherText + letter;
                continue;
            } else if (i === 1 && letter === ' ') {
                cipherText = letter;
                continue;
            }

            const indexOfArrayLetter = plainAlphabet.indexOf(letter);
            
            // if (cipherText === '') {

                // cipherText = cipherAlphabet[indexOfArrayLetter];
            // } else {
                cipherText += `${cipherAlphabet[indexOfArrayLetter]}`;
            // }
        }
        setIncryptedText(cipherText);
    };

    const decryptCipherTextHandler = (cipherText) => {
        console.log(cipherText);
        setIncryptedText('');
        const cipherTextArray = Array.from(cipherText);
        let plainText = '';
      
        for (let i = 0; i < cipherTextArray.length; i++) {
          const letter = cipherTextArray[i];
      
          if (letter === ' ' && i !== 1) {
            plainText = plainText + letter;
            continue;
          }
      
          const indexOfArrayLetter = cipherAlphabet.indexOf(letter);
      
          if (indexOfArrayLetter === -1) {
            plainText += letter;
          } else {
            plainText += plainAlphabet[indexOfArrayLetter];
          }
        }
      
        setDecryptedText(plainText);
      };

    const clearIncryptedTextHandler = () => {
        setIncryptedText('');
        setDecryptedText('');
    };

    const cipherContext = {
      incrypted: incryptedText,
      decrypted: decryptedText, 
      incryptPlainText: incryptPlainTextHandler,
      decryptCipherText: decryptCipherTextHandler,
      clearIncryptedText: clearIncryptedTextHandler,
    };

    return (
        <CipherContext.Provider value={cipherContext}>
            {props.children}
        </CipherContext.Provider>
    );
};

export default CipherProvider;