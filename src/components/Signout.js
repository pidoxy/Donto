import { withFirebase } from '../components/Firebase';
import Button from './Button';


const SignOutButton = ({ firebase }) => {
    
    return (
        <Button type="button" span={12} text="Sign Out" Bg='#430D27' onClick={firebase.signout} />
    )
};

export default withFirebase(SignOutButton);
