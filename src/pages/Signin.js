import signin from '../assets/signin.svg'
import Button from '../components/Button'

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignupLink } from '../pages/Signup';
import { withFirebase } from '../components/Firebase';
import * as ROUTES from '../routes/routes';

const SignIn = () => (
    <div className="row">
        <div className="col-6">
            <img style={{ width: '100%' }} alt="background" className="img-fluid" src={signin} />
        </div>
        <SignInForm />
        <SignupLink />
    </div>
);

const initialState = {
    email: '',
    password: '',
    error: null,
};

class SignInFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...initialState };
    }

    onSubmit = event => {
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...initialState });
                this.props.history.push(ROUTES.PROFILE);
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

        return (
            <form onSubmit={this.onSubmit}>
                <div className="col-6 pt-3">
                    <h3 className="mt-3">Sign In</h3>
                    <div className="my-5">
                        <input type="email" className="form-control" name="email" value={email} onChange={this.onChange} id="email" placeholder="Enter your email" />
                    </div>
                    <div className="my-5">
                        <input type="password" name="password" value={password} onChange={this.onChange} className="form-control" id="password" placeholder="Enter your password" />
                    </div>
                    <div className="form-check mt-3">
                        <input className="form-check-input" type="checkbox" value="" id="showPassword" />
                        <label className="form-check-label" htmlFor="showPassword">Show password </label>
                    </div>
                    <Button disabled={isInvalid} type="submit" text="Sign In" span={12} Bg='purple' />
                    {error && <p>{error.message}</p>}
                </div>
            </form>
        );
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);

export default SignIn;

export { SignInForm };