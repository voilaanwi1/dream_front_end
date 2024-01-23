import React, {useEffect} from 'react'
import {Router, Route, Routes } from 'react-router'
import Home from './containers/Home'
import { useDispatch, useSelector } from 'react-redux'
import ThankYou from './containers/ThankYou'

import Signin from './containers/SignIn'
import SignUp from './containers/SignUp'
import Search from './containers/Search'
import Sale from './containers/Sale';
import {Preview} from './components/common/Preview'
import Saved from './containers/Saved'
import { fetchUserFromLocalStorage } from './redux/users/operations'
import { getUser } from './redux/users/selectors'

const Routers = () => {
    const dispatch= useDispatch()
    const selector = useSelector(state => state)
    const user = getUser(selector)
    const token = user ? user.token:null
    console.log('token', token)
    useEffect(()=> {
        dispatch(fetchUserFromLocalStorage)
    },[])
    return(
    <>
      <Router>
        <Routes>
          <Route exact path={'/'} element = {<Home/>} />
          <Route exact path={'/search'} Component={token? Search : Signin} />
          <Route exact path={'/saved'} Component={token? Saved : Signin} />
          <Route exact path={'/signin'} Component={token? Home : Signin} />
          <Route exact path={'/signup'} Component={token? Home : SignUp} />
          <Route exact path={'/sale'} Component={token? Sale : Signin} />
          <Route exact path={'/preview/:id/'} Component={token? Preview : Signin} />
          <Route exact path={'/thankyou'} Component={ThankYou} />

        </Routes>
     </Router>
    </>
    )
    
}

export default Routers;