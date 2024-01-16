import React, {useEffect} from 'react'
import {BrowserRouter as  Router,Routes, Route } from 'react-router'
import Home from './containers/Home'
import { useDispatch, useSelector } from 'react-redux'
import ThankYou from './containers/ThankYou'

const Routes = () => {
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

export default Routes;