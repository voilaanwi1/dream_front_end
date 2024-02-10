import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import Home from './containers/Home';
import Signin from './containers/Signin';
import SignUp from './containers/SignUp';
import Search from './containers/Search';
import Sale from './containers/Sale';
import Preview from './components/Common/Preview';
import Saved from './containers/Saved';
import { fetchUserFromLocalStorage } from './reducks/users/operations';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './reducks/users/selectors';
import ThankYou from './containers/ThankYou';

const Router = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const user = getUser(selector);
    const token = user ? user.token : null;
    console.log('Token', token);
    useEffect(() => {
        dispatch(fetchUserFromLocalStorage());
        // eslint-disable-next-line
    }, []);
    return (
        <>
            <Routes>
                <Route exact path={'/'} element={<Home/>} />
                <Route exact path={'/search'} element={token ? <Search/> : <Signin />} />
                <Route exact path={'/saved'} element={token ? <Saved/> : <Signin />} />
                <Route exact path={'/signin'} element={token ? <Home /> : <Signin />} />
                <Route exact path={'/signup'} element={token ? <Home /> : <SignUp/>} />
                <Route exact path={'/sale'} element={token ? <Sale /> : <Signin />} />
                <Route exact path={'/preview/:id/'} element={token ? <Preview/> : <Signin />} />
                <Route exact path={'/thankyou'} element={<ThankYou/>} />
            </Routes>
        </>
    );
};
export default Router;
