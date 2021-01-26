import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component, path, exact }) => {

    const condition = performValidationHere();

    return condition ? (<Route path={path} exact={exact} component={component} />) :
        (<Redirect to="/sign-in" />);
};
export default PrivateRoute;