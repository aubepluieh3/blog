import React from "react";
import styles from './Button.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';

const cx = classNames.bind(styles);

const PostItem = () => {
    return (
        <div className={cx('post-item')}>
            <h2><a>타이틀</a></h2>
            <div className={cx('date')}>2017-10-24</div>
            <p>내용</p>
        </div>
    )
}

export default Button;