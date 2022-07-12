import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Base from '../containers/post/common/Base';
import {ListPage, PostPage, EditorPage, NotFoundPage} from '../pages';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<ListPage/>}/>
                <Route path="/page/:page" element={<ListPage/>}/>
                <Route path="/tag/:tag/page?" element={<ListPage/>}/>
                <Route path="/post/:id" element={<PostPage/>}/>
                <Route path="/editor" element={<EditorPage/>}/>
                <Route path ="/*" element={<NotFoundPage/>}/>
            </Routes>
            <Base/>
        </div>
    );
};

//version upgrade => components -> element
//Switch => Routes

export default App;