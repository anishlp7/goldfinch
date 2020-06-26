import React from 'react';

import HeroImage from './../../assets/heroImage.svg'

import './home.css';

const Home = () => (
    <div className="Home">
        <div className="leftHero">
        <div className="textContent">
            <p className="textAlign">Welcome to Velox</p>
            <p>Data Product Platform</p>
        </div>
            <img src={HeroImage} alt="Data Platform" height="400" width="500"/>
           
        </div>
        <div className="rightHero">
            <div className="box">
                <div className="formElem">
                    <h4 className="hdAlign">Login</h4>
                    <form action="/dashboard">
                        <div className="formcntr">
                            <label className="lbDesn">User Name</label><br />
                            <input className="ipDesn" type="text" name="userName" required/><br />
                            <label className="lbDesn">Password</label><br />
                            <input className="ipDesn" type="Password" name="userName" required/><br />
                            <h5>Forgot Password</h5>
                            <button className="btnDesn" type="submit" name="signin">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
);

export default Home;