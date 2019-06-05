import React from 'react';
import {NavLink} from 'react-router-dom';

const Signin = () => {
	return (
<div className ="pv5">
	<article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center ">
		<main class="pa4 black-80">
  			<div class="measure center">
    			<fieldset id="sign_up" class="ba b--transparent ph0 mh0">
      				<legend class="f1 fw6 ph0 mh0 tc">Sign In</legend>
      				<div class="mt3">
        				<label class="db fw6 lh-copy f6" for="email-address">Email</label>
       					<input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
     				 </div>
				    <div class="mv3">
				        <label class="db fw6 lh-copy f6" for="password">Password</label>
				        <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
				     </div>
				 </fieldset>
				     <div class ='mv3 tc'>
				      <NavLink to = '/navigation' class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib link black tc"> Sign in</NavLink>
    				</div>
    		<div class="lh-copy mt3">
      	<NavLink to ='/register' class="f6 link dim black db tc">Register</NavLink>
      </div>
  </div>
</main>
</article>
</div>
		);
}

export default Signin;