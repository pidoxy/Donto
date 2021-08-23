import * as ROUTES from '../routes/routes';
import { Link } from 'react-router-dom';
import SignOutButton from '../components/Signout';

const Navigation = ({ authUser }) => (
    <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);

const NavigationNonAuth = () => {
    return (
        <div>
            <ul>
                <SignOutButton />
                <li>
                    <Link to={ROUTES.SIGN_IN}>Sign In</Link>
                </li>
                <li>
                    <Link to={ROUTES.LANDING}>Landing</Link>
                </li>
                <li>
                    <Link to={ROUTES.SIGN_UP}>Sign up</Link>
                </li>
                <li>
                    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password</Link>
                </li>
            </ul>
        </div>
    );
}

const NavigationAuth = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={ROUTES.LANDING}>Landing</Link>
                </li>
                <li>
                    <Link to={ROUTES.ARTICLES}>Home</Link>
                </li>
                <li>
                    <Link to={ROUTES.REQUEST_FUND}>Request fund</Link>
                </li>
                <li>
                    <Link to={ROUTES.PROFILE}>Profile</Link>
                </li>
                <li>
                    <Link to={ROUTES.DONATE}>Donate</Link>
                </li>
                <li>
                    <Link to={ROUTES.ADMIN}>Admin</Link>
                </li>
                <li>
                    <Link to={ROUTES.UPLOAD_ARTICLES}>Articles</Link>
                </li>
            </ul>
        </div>
    );
}


export default Navigation
