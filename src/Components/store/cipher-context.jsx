import React from "react";

const CipherContext = React.createContext({
    incrypted: '',
    decrypted: '',
    incryptPlainText: (plainText) => {},
    decryptCipherText: (cipherText) => {},
    clearIncryptedText: () => {}
});

export default CipherContext;