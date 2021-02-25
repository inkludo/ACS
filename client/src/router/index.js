import { Switch, Route, Redirect } from 'react-router-dom';
import SignIn from '../features/auth/pages/SignIn';
import SignUp from '../features/auth/pages/SignUp';
import Devices from '../features/devices/pages/Devices/Devices';
import Device from '../features/device/pages/Device/Device'


export const useRoutes = isAuthenticated => (

    isAuthenticated ? (
        < Switch >
            <Route exact path="/" component={Devices} />
            <Route exact path="/device/:id" component={Device} />
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