import signup from '../assets/signup.svg'
import Button from '../components/Button'
import { Link } from 'react-router-dom';
import * as ROUTES from '../routes/routes';
import { useState } from 'react';

const Signup = () => (
    <div className="row">
        <div className="col-6">
            <img style={{ width: '100%' }} alt="background" className="img-fluid" src={signup} />
        </div>
        <h3>Tell us a little about your store.</h3>
        <p>This is initial information of your business.
            You can change it anytime</p>
        <SignupForm />
    </div>
);

const [initialState, setInitialState] = useState({
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
})
const [username, setUsername] = useState('');

const SignupForm = () => {

    state = { ...initialState }

    const onSubmit = event => {

    }

    const onChange = event => {
        setInitialState({ [event.target.name]: event.target.value })
    };
    return (

        <form onSubmit={onSubmit} className="col-6 pt-3">
            <div className="mb-3">
                <input type="text" className="form-control" value={username} onChange={onChange} name="business_name" id="business_name" placeholder="Enter your business legal name" />
            </div>
            <div className="mb-3">
                <input className="form-control" list="IndustryList" id="Industry" placeholder="Industry" />
                <datalist id="IndustryList">
                    <option value="Health Sector" />
                    <option value="Clothing Accessories" />
                    <option value="Manual Repairs" />
                    <option value="Book Shops" />
                    <option value="Education" />
                    <option value="Others" />
                </datalist>
            </div>
            <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" value="" id="business_IsRegistered" />
                <label className="form-check-label" for="business_IsRegistered">This business is registered business</label>
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" id="VAT_number" placeholder="VAT EU Number" />
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" id="address" placeholder="Address" />
            </div>
            <div className="mb-3 row">
                <div className="col-6">
                    <input type="number" className="form-control" id="zipcode" placeholder="ZIP Code" />
                </div>
                <div className="col-6">
                    <input type="text" className="form-control" id="city" placeholder="City" />
                </div>
            </div>
            <div className="mt-3 mb-3">
                <input className="form-control" list="country" id="exampleDataList" placeholder="Country" />
                <datalist id="country">
                    <option value="Afghanistan" />
                    <option value="Albania" />
                    <option value="Algeria" />
                    <option value="American Samoa" />
                    <option value="Andorra" />
                    <option value="Angola" />
                    <option value="Anguilla" />
                    <option value="Antarctica" />
                    <option value="Antigua and Barbuda" />
                    <option value="Argentina" />
                    <option value="Armenia" />
                    <option value="Aruba" />
                    <option value="Australia" />
                    <option value="Austria" />
                    <option value="Azerbaijan" />
                    <option value="Bahamas" />
                    <option value="Bahrain" />
                    <option value="Bangladesh" />
                    <option value="Barbados" />
                    <option value="Belarus" />
                    <option value="Belgium" />
                    <option value="Belize" />
                    <option value="Benin" />
                    <option value="Bermuda" />
                    <option value="Bhutan" />
                    <option value="Bolivia" />
                    <option value="Bosnia and Herzegovina" />
                    <option value="Botswana" />
                    <option value="Bouvet Island" />
                    <option value="Brazil" />
                    <option value="British Indian Ocean Territory" />
                    <option value="Brunei Darussalam" />
                    <option value="Bulgaria" />
                    <option value="Burkina Faso" />
                    <option value="Burundi" />
                    <option value="Cambodia" />
                    <option value="Cameroon" />
                    <option value="Canada" />
                    <option value="Cape Verde" />
                    <option value="Cayman Islands" />
                    <option value="Central African Republic" />
                    <option value="Chad" />
                    <option value="Chile" />
                    <option value="China" />
                    <option value="Christmas Island" />
                    <option value="Cocos (Keeling) Islands" />
                    <option value="Colombia" />
                    <option value="Comoros" />
                    <option value="Congo" />
                    <option value="Congo, The Democratic Republic of The" />
                    <option value="Cook Islands" />
                    <option value="Costa Rica" />
                    <option value="Cote D'ivoire" />
                    <option value="Croatia" />
                    <option value="Cuba" />
                    <option value="Cyprus" />
                    <option value="Czech Republic" />
                    <option value="Denmark" />
                    <option value="Djibouti" />
                    <option value="Dominica" />
                    <option value="Dominican Republic" />
                    <option value="Ecuador" />
                    <option value="Egypt" />
                    <option value="El Salvador" />
                    <option value="Equatorial Guinea" />
                    <option value="Eritrea" />
                    <option value="Estonia" />
                    <option value="Ethiopia" />
                    <option value="Falkland Islands (Malvinas)" />
                    <option value="Faroe Islands" />
                    <option value="Fiji" />
                    <option value="Finland" />
                    <option value="France" />
                    <option value="French Guiana" />
                    <option value="French Polynesia" />
                    <option value="French Southern Territories" />
                    <option value="Gabon" />
                    <option value="Gambia" />
                    <option value="Georgia" />
                    <option value="Germany" />
                    <option value="Ghana" />
                    <option value="Gibraltar" />
                    <option value="Greece" />
                    <option value="Greenland" />
                    <option value="Grenada" />
                    <option value="Guadeloupe" />
                    <option value="Guam" />
                    <option value="Guatemala" />
                    <option value="Guinea" />
                    <option value="Guinea-bissau" />
                    <option value="Guyana" />
                    <option value="Haiti" />
                    <option value="Heard Island and Mcdonald Islands" />
                    <option value="Holy See (Vatican City State)" />
                    <option value="Honduras" />
                    <option value="Hong Kong" />
                    <option value="Hungary" />
                    <option value="Iceland" />
                    <option value="India" />
                    <option value="Indonesia" />
                    <option value="Iran, Islamic Republic of" />
                    <option value="Iraq" />
                    <option value="Ireland" />
                    <option value="Israel" />
                    <option value="Italy" />
                    <option value="Jamaica" />
                    <option value="Japan" />
                    <option value="Jordan" />
                    <option value="Kazakhstan" />
                    <option value="Kenya" />
                    <option value="Kiribati" />
                    <option value="Korea, Democratic People's Republic of" />
                    <option value="Korea, Republic of" />
                    <option value="Kuwait" />
                    <option value="Kyrgyzstan" />
                    <option value="Lao People's Democratic Republic" />
                    <option value="Latvia" />
                    <option value="Lebanon" />
                    <option value="Lesotho" />
                    <option value="Liberia" />
                    <option value="Libyan Arab Jamahiriya" />
                    <option value="Liechtenstein" />
                    <option value="Lithuania" />
                    <option value="Luxembourg" />
                    <option value="Macao" />
                    <option value="Macedonia, The Former Yugoslav Republic of" />
                    <option value="Madagascar" />
                    <option value="Malawi" />
                    <option value="Malaysia" />
                    <option value="Maldives" />
                    <option value="Mali" />
                    <option value="Malta" />
                    <option value="Marshall Islands" />
                    <option value="Martinique" />
                    <option value="Mauritania" />
                    <option value="Mauritius" />
                    <option value="Mayotte" />
                    <option value="Mexico" />
                    <option value="Micronesia, Federated States of" />
                    <option value="Moldova, Republic of" />
                    <option value="Monaco" />
                    <option value="Mongolia" />
                    <option value="Montserrat" />
                    <option value="Morocco" />
                    <option value="Mozambique" />
                    <option value="Myanmar" />
                    <option value="Namibia" />
                    <option value="Nauru" />
                    <option value="Nepal" />
                    <option value="Netherlands" />
                    <option value="Netherlands Antilles" />
                    <option value="New Caledonia" />
                    <option value="New Zealand" />
                    <option value="Nicaragua" />
                    <option value="Niger" />
                    <option value="Nigeria" />
                    <option value="Niue" />
                    <option value="Norfolk Island" />
                    <option value="Northern Mariana Islands" />
                    <option value="Norway" />
                    <option value="Oman" />
                    <option value="Pakistan" />
                    <option value="Palau" />
                    <option value="Palestinian Territory, Occupied" />
                    <option value="Panama" />
                    <option value="Papua New Guinea" />
                    <option value="Paraguay" />
                    <option value="Peru" />
                    <option value="Philippines" />
                    <option value="Pitcairn" />
                    <option value="Poland" />
                    <option value="Portugal" />
                    <option value="Puerto Rico" />
                    <option value="Qatar" />
                    <option value="Reunion" />
                    <option value="Romania" />
                    <option value="Russian Federation" />
                    <option value="Rwanda" />
                    <option value="Saint Helena" />
                    <option value="Saint Kitts and Nevis" />
                    <option value="Saint Lucia" />
                    <option value="Saint Pierre and Miquelon" />
                    <option value="Saint Vincent and The Grenadines" />
                    <option value="Samoa" />
                    <option value="San Marino" />
                    <option value="Sao Tome and Principe" />
                    <option value="Saudi Arabia" />
                    <option value="Senegal" />
                    <option value="Serbia and Montenegro" />
                    <option value="Seychelles" />
                    <option value="Sierra Leone" />
                    <option value="Singapore" />
                    <option value="Slovakia" />
                    <option value="Slovenia" />
                    <option value="Solomon Islands" />
                    <option value="Somalia" />
                    <option value="South Africa" />
                    <option value="South Georgia and The South Sandwich Islands" />
                    <option value="Spain" />
                    <option value="Sri Lanka" />
                    <option value="Sudan" />
                    <option value="Suriname" />
                    <option value="Svalbard and Jan Mayen" />
                    <option value="Swaziland" />
                    <option value="Sweden" />
                    <option value="Switzerland" />
                    <option value="Syrian Arab Republic" />
                    <option value="Taiwan, Province of China" />
                    <option value="Tajikistan" />
                    <option value="Tanzania, United Republic of" />
                    <option value="Thailand" />
                    <option value="Timor-leste" />
                    <option value="Togo" />
                    <option value="Tokelau" />
                    <option value="Tonga" />
                    <option value="Trinidad and Tobago" />
                    <option value="Tunisia" />
                    <option value="Turkey" />
                    <option value="Turkmenistan" />
                    <option value="Turks and Caicos Islands" />
                    <option value="Tuvalu" />
                    <option value="Uganda" />
                    <option value="Ukraine" />
                    <option value="United Arab Emirates" />
                    <option value="United Kingdom" />
                    <option value="United States" />
                    <option value="United States Minor Outlying Islands" />
                    <option value="Uruguay" />
                    <option value="Uzbekistan" />
                    <option value="Vanuatu" />
                    <option value="Venezuela" />
                    <option value="Viet Nam" />
                    <option value="Virgin Islands, British" />
                    <option value="Virgin Islands, U.S" />
                    <option value="Wallis and Futuna" />
                    <option value="Western Sahara" />
                    <option value="Yemen" />
                    <option value="Zambia" />
                    <option value="Zimbabwe" />
                </datalist>
            </div>
            <div className="form-check mt-3">
                <input className="form-check-input" type="checkbox" value="" id="showPassword" />
                <label className="form-check-label" for="showPassword">Show password </label>
            </div>
            <Button text="Sign Up" span={12} Bg='purple' />
        </form>
    )
}

const SignupLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);


export default Signup;

export { SignupForm, SignupLink };
