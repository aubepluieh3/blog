import React from "react";
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
import Header from "../Header/Header";
import FooterContainer from "../FooterContainer";


const cx = classNames.bind(styles);

const PageTemplate = ({children}) => (
    <div className={cx('page-template')}>
        <Header/>
        <main>
            {children}
        </main>
        <FooterContainer/>
    </div>
);

export default PageTemplate;