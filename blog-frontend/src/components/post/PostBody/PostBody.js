import React from "react";
import styles from './PostBody.scss';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);

const PostBody = ({body}) => (
    <div className={cx('post-body')}>
        <div className={cx('post-body')}>
            <div className={cx('paper')}>
                내용
            </div>
        </div>
    </div>
);

export default PostBody;