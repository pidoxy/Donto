import './App.css';
import { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Request from './pages/Request';
import Navigation from './components/Navigation';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Donate from './pages/Donate';
import Articles from './pages/Articles';
import Admin from './pages/Admin';
import UploadArticle from './pages/UploadArticle';
import PasswordForget from './pages/PasswordForget';
import * as ROUTES from './routes/routes';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navigation authUser={this.state.authUser} />
          <hr />
          <Route exact path={ROUTES.LANDING} component={Signup} />
          <Route path={ROUTES.SIGN_UP} component={Signup} />
          <Route path={ROUTES.SIGN_IN} component={Signin} />
          <Route path={ROUTES.REQUEST_FUND} component={Request} />
          <Route path={ROUTES.ARTICLES} component={Articles} />
          <Route path={ROUTES.DONATE} component={Donate} />
          <Route path={ROUTES.PROFILE} component={Profile} />
          <Route path={ROUTES.UPLOAD_ARTICLES} component={UploadArticle} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
          <Route path={ROUTES.ADMIN} component={Admin} />
        </div>
      </Router>
    );
  }
}

export default App;
