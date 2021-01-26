import React from 'react';
import { useDispatch } from "react-redux";
import { singIn } from "../../actions";
import CreateForm from '../../components/CreateFrom';

const SignIn = () => {
    const dispatch = useDispatch();
    const submit = (email, password) => dispatch(singIn(email, password));

    return <CreateForm onSubmit={submit} actionTitle={"Sign In"} />;
};



export default SignIn;