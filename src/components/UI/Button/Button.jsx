import React from 'react';

import styles from "./Button.module.css";

const Button = (props) => {
    const {children, isRelative = false, isPrimary = false, isDark = false, isFullWidth = false, ...rest} = props;
    const buttonClassName = [styles.button];

    if (isRelative) {
        buttonClassName.push(styles.relative);
    }
    if (isPrimary) {
        buttonClassName.push(styles.primary);
    }
    if (isDark) {
        buttonClassName.push(styles.dark);
    }
    if (isFullWidth) {
        buttonClassName.push(styles.fullWidth);
    }

    return (
        <button className={buttonClassName.join(" ")} {...rest}>
            {children}
        </button>
    );
};

export default Button;