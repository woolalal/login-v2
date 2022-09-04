import React, { useEffect } from 'react'
import {ReactComponent as SignupSVG} from '../assets/images/guide-3.svg';
import Login from './Login';
import moment from 'moment-timezone';
import { countries, timezones } from '../data/country';

const LoginForm = () => {
    // const getCountry = () => {
    //     const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    //     console.log('timezone', timezone);
    //     if (!timezone || timezone === "") return null;
    //     const countryAbbreviation = timezones[timezone]?.c;
    //     console.log('countryAbbreviation', countryAbbreviation)

    //     // check for country
    //     let checkCountryExists = timezones[timezone]?.c;
    //     const getAlias = timezones[timezone]?.a

    //     if (checkCountryExists?.length){
    //         const countryAbbreviation = timezones[timezone]?.c[0];
    //         const country = countries[countryAbbreviation];
    //         console.log('country', country)
    //         return country;
    //     } else if (!checkCountryExists?.length && getAlias){
    //         const getAlias = timezones[timezone]?.a
    //         const countryAbbreviation = timezones[getAlias]?.c[0];
    //         const country = countries[countryAbbreviation];
    //         console.log('country2', country)
    //         return country;
    //     } else {
    //         console.log('no countries')
    //         return null;
    //     }
    // }
    // useEffect(() => {
    //     const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });
    //     console.log('region', regionNamesInEnglish.of('CX'));
    //     getCountry();
    // }, [])

    return (
        <div className="mt-3">
            <div>
                <div style={{maxWidth: '360px', margin: 'auto'}}>
                    <Login />
                </div>
                {/* <div className="col-md-6 my-auto">
                    <SignupSVG style={{height: '40vh'}}/>
                </div> */}
            </div>
        </div>
    )
}

export default LoginForm
