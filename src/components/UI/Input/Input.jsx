import React from 'react';

import styles from "./Input.module.css";

const Input = (props) => {
    const {isTransparent, ...rest} = props;

    return (
        <input className={[styles.input, isTransparent && styles.inputTransparent].join(" ")} {...rest}/>
    );
};

export default Input;