import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className="container-fluid text-center pb-5">
                <hr className="my-5" />
                <small className="text-muted">all rights reserved. <a target="_blank" className="link-warning mx-1" href="http://instagram.com/zanzancode">Zanzancode</a> © 2021 |
                     made by <a className="link-primary mx-1" href="https://reactjs.org/" target="_blank">React JS</a>
                </small>
            </div>
        );
    }
}

export default Footer;