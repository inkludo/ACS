import React from 'react';
import { useDispatch } from "react-redux";
import { singUp } from "../../actions";
import CreateForm from '../../components/CreateFrom';

const SignUp = () => {
    const dispatch = useDispatch();
    const submit = (email, password) => dispatch(singUp(email, password));

    return <CreateForm actionTitle={"Sign Up"} onSubmit={submit} />;
};



export default SignUp;