import React from 'react';


import Header from './../../components/Header/header'

import './profile.css';

const Profile = () => (
    <div className="pro">
    <Header />
    <div className="profile">
        <nav className="nav1">
            <ul>
                <li>Home</li>
                <li>Job</li>
                <li>History</li>
            </ul>
        </nav>

        <div className="container">
            <section className="subCont">
            
                <form className="formAlign">

                    <fieldset>
                        <legend>Basic</legend>
                        <table>
                            <tbody>
                                <tr>
                                    <td><label>Name</label></td>
                                    <td><input className="ipDesn1"  type="text" name="name" /></td>
                                </tr>

                                <tr>
                                    <td><label>Description</label></td>
                                    <td><input className="ipDesn1" type="text" name="description" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </fieldset>

                    <fieldset>
                        <legend>Source</legend>
                        <table>
                        <tbody>
                            <tr>
                                <td><label>Type</label></td>
                                <td> <select className="seDesn" name="source1" id="source">
                                        <option value="Source">Source</option>
                                        <option value="Destination">Destination</option>
                                    </select>
                                </td>
                            </tr>

                            <tr>
                                <td><label>Location</label></td>
                                <td><input className="ipDesn1" type="text" name="location" /></td>
                            </tr>
                        </tbody>
                    </table>
                    </fieldset>

                    <fieldset>
                        <legend>Destination</legend>
                        <table>
                        <tbody>
                            <tr>
                                <td><label>Type</label></td>
                                <td> <select className="seDesn" name="source1" id="source">
                                        <option value="Source">Destination</option>
                                        <option value="Source">Source</option>
                                    </select>
                                </td>
                            </tr>

                            <tr>
                                <td><label>Location</label></td>
                                <td><input className="ipDesn1" type="text" name="location" /></td>
                            </tr>
                        </tbody>
                    </table>
                    </fieldset>     
                </form>
                <button className="btnSve" type="button">Save</button>
            </section>



        </div>



    </div>
    </div>
);

export default Profile;