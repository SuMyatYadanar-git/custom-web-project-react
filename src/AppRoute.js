import React from 'react'
import { Router, Switch, Route, Redirect, withRouter } from 'react-router-dom'

import * as route from './config/route.config'
import HomeScreen from './feature/home/container/HomeScreen'
import LoginScreen from './feature/login/loginContainer/LoginScreen'
import SelectScreen from './feature/select/container/SelectScreen'
import Navbar from './feature/app/Navbar'

const AppRoute = props => {
    return (

        <div>                 {/* <Navbar/> */}
            <Switch>

                <Route path={`${route.login}`} component={LoginScreen} />
                <Route path={`${route.select}`} component={SelectScreen} />
                <Route path={`${route.home}`} component={HomeScreen} />

                {/* <Redirect to={`/${login}`} */}

            </Switch>
        </div>

    )
}
export default withRouter(AppRoute);