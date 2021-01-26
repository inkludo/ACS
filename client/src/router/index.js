import { Switch, Route, Redirect } from 'react-router-dom';
import SignIn from '../features/Auth/pages/SignIn';
import SignUp from '../features/Auth/pages/SignUp';
import Devices from '../features/Devices/pages/Devices/Devices'


export const useRoutes = isAuthenticated => (

    isAuthenticated ? (
        < Switch >
            <Route exact path="/" component={Devices} />
            <Redirect to='/' />
        </ Switch >
    )
        : (
            < Switch >
                <Route path="/sign-in" component={SignIn} />
                <Route path="/sign-up" component={SignUp} />
                <Redirect to='/sign-in' />
            </ Switch >
        )

)