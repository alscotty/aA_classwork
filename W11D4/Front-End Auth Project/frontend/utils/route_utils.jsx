import React from 'react'
import {connect} from 'react-redux'
import {Redirect,Route,withRouter} from 'react-router-dom'

const mSTP=(state)=>({
    loggedIn: Boolean(state.session.currentUser)
});

//AuthRoute path='',component={} />

//auth routes inaccessible when already logged in
const Auth=({loggedIn,path, component:Component})=>(
    <Route
        path={path}
        render={props=>(
            loggedIn ? <Redirect to='/' /> : <Component {...props} />
        )}
    />
)

export const AuthRoute=withRouter(connect(mSTP)(Auth))

//protected routes inaccessible unless logged in

const Protected=({loggedIn,path,component:Component})=>(
    <Route
    path={path}
    render={props=>(
        loggedIn ? <Component {...props}/> : <Redirect to= '/signup'/>
    )}
    />
);

export const ProtectedRoute=withRouter(connect(mSTP)(Protected))