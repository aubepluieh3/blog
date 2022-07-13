import React from "react";
import styles from './Footer.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';

const cx = classNames.bind(styles);

const Footer = ({onLoginClick, logged}) => (
    <footer className={cx('footer')}>
        <Link to="/" className={cx('brand')}>reactblog</Link>
        <div onClick={onLoginClick}className={cx('admin-login')}>
            {logged ? '로그아웃': '관리자 로그인'}
        </div>
    </footer>    
);
//클릭해도 모달이 안 나옴 

export default Footer;