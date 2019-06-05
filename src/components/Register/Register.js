import React from 'react';
import {NavLink} from 'react-router-dom';

const Register = () => {
	return(
  <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
    		<main className="pa4 black-80">
      <div className="measure center">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f1 fw6 ph0 mh0 tc">Register</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
          </div>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
          </div>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="contact-number">Contact Number</label>
            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="tel" name="contact-number"  id="contact-number"/>
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
          </div>
        </fieldset>
        <div className="tc">
          <NavLink to = '/signin' className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib link black " type="submit" value="Register"> Register</NavLink>
        </div>
      </div>
    </main>
	</article>
  	);
}

export default Register;