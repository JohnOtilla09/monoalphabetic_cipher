import React, { useState, useContext } from 'react';
import TextField from '@mui/material/TextField';
import { AiFillCopy } from "react-icons/ai";
import clipboardCopy from 'clipboard-copy';

import CipherContext from '../store/cipher-context';

import styles from './Monoalphabetic.module.css';

const Monoalphabetic = () => {
    const [ plainText, setPlainText ] = useState('');
    const cipherCtx = useContext(CipherContext);

    const plainTextValueChangeHandler = (event) => {
        setPlainText(event.target.value);
    }

    const incryptedHandler = () => {
      cipherCtx.clearIncryptedText();
    };
    
    const decryptHandler = () => {
      cipherCtx.decryptCipherText(cipherCtx.incrypted);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (plainText.trim(' ') === '') {
          return;
        }
        cipherCtx.incryptPlainText(plainText);
        setPlainText('');
    };

    const handleCopy = (text) => {
      clipboardCopy(text)
        .then(() => alert('Text copied to clipboard!'))
        .catch((error) => console.error('Failed to copy:', error));
    };

    const content =
      cipherCtx.incrypted === "" && cipherCtx.decrypted === "" ? (
        <form onSubmit={submitHandler}>
          <TextField
            onChange={plainTextValueChangeHandler}
            placeholder="Enter plain text"
            id="outlined-basic"
            label="Monoalphabetic Cipher"
            variant="outlined"
            sx={{ width: "100%" }}
          />
          <button className={`${styles["button-78"]}`} role="button">
            Incrypt Me
          </button>
        </form>
      ) : cipherCtx.incrypted !== "" && cipherCtx.decrypted === "" ? (
        <div className={styles.decrypted}>
          <div>
            <button onClick={() => handleCopy(cipherCtx.incrypted)}>
              <AiFillCopy size={25} />
            </button>
            {cipherCtx.incrypted}
          </div>
          <button
            className={`${styles["button-78"]}`}
            role="button"
            onClick={decryptHandler}
          >
            Decrypt Me
          </button>
        </div>
      ) : cipherCtx.incrypted === "" && cipherCtx.decrypted !== "" ? (
        <div className={styles.decrypted}>
          {/* <h1>ahadu</h1> */}
          <div>
            <button onClick={() => handleCopy(cipherCtx.incrypted)}>
              <AiFillCopy size={25} />
            </button>
            {cipherCtx.decrypted}
          </div>
          <button
            className={`${styles["button-78"]}`}
            role="button"
            onClick={incryptedHandler}
          >
            Encrypt Text Again?
          </button>
        </div>
      ) : null;

  return (
    <div className={styles.card}>
      <h1>MONOALPHABETIC CIPHER</h1>
      { content }
    </div>
  );
};

export default Monoalphabetic;
