import React from 'react'
import './header.css'

import logoV4 from '../../assets/logoV4.jpg'

export default function header() {
    return (
        <div className="content">
            <div className="content-logo">
                <img src={logoV4} className="logoV4" />
            </div>
            <div className="content-title">
                <h1>VUTTR</h1>
                <p>Very Useful Tools to Remember</p>
            </div>
        </div>
    )
}
