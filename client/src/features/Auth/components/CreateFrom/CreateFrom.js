import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const CreateForm = ({ onSubmit, actionTitle }) => {

    const submit = (event) => {
        event.preventDefault();

        if (!email.trim().length && !password.trim().length) {
            return;
        }
        onSubmit(email, password);
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const classes = useStyles();


    return (
        <Container style={{ marginTop: '18vh' }} component="main" maxWidth="xs" >
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    {actionTitle}
                </Typography>
                <form className={classes.form} onSubmit={submit} >
                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </Grid>

                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onSubmit={submit}
                    >
                        {actionTitle}
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>

                            {actionTitle === 'Sign Up' ?
                                <Link
                                    style={{ textDecoration: "none" }}
                                    to='/sign-in'>
                                    Already have an account? Sign in
                                </Link> :
                                <Link
                                    style={{ textDecoration: "none" }}
                                    to='/sign-up'>
                                    Don't have an account? Sign Up
                            </Link>
                            }

                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container >
    )
}

//add proptypes

export default CreateForm;
