import signup from '../assets/signup.svg'
import Button from '../components/Button'
import { Link, withRouter } from 'react-router-dom';
import * as ROUTES from '../routes/routes';
import { Component } from 'react';
import { withFirebase } from '../components/Firebase';

const Signup = () => (
    <div className="row">
        <div className="col-6">
            <img style={{ width: '100%' }} alt="background" className="img-fluid" src={signup} />
        </div>
        <h3>Tell us a little about your store.</h3>
        <p>This is initial information of your business.
            You can change it anytime</p>
        <SignUpForm />
    </div>
);

const initialState = {
    username: '',
    email: '',
    business_name: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
}

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...initialState };

    }

    onSubmit = event => {
        const { email, passwordOne } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                console.log(initialState);
                this.setState({ ...initialState });
                this.props.history.push(ROUTES.PROFILE);
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    };
    render() {
        const {
            email,
            business_name,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            business_name === '';

        return (

            <form onSubmit={this.onSubmit} className="col-6 pt-3">
                <div className="mb-3">
                    <input type="text" className="form-control" value={business_name} onChange={this.onChange} name="business_name" id="business_name" placeholder="Enter your business name" />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" value={email} onChange={this.onChange} name="email" id="email" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" value={passwordOne} onChange={this.onChange} name="passwordOne" id="passwordOne" placeholder="Enter your password" />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" value={passwordTwo} onChange={this.onChange} name="passwordTwo" id="passwordTwo" placeholder="Confirm password" />
                </div>
                <div className="form-check mt-3">
                    <input className="form-check-input" type="checkbox" value="" id="showPassword" />
                    <label className="form-check-label" htmlFor="showPassword">Show password </label>
                </div>
                <Button disabled={isInvalid} type="submit" text="Sign Up" span={12} Bg='purple' />
                {error && <p>{error.message}</p>}
            </form>
        )
    }
}

const SignupLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default Signup;

export { SignUpForm, SignupLink };
