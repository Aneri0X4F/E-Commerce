import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

class Cart extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <div style={{ minHeight: "93vh" }}>
                        <Sidebar />
                    </div>
                    <p>INSIDE</p>
                </div>
            </div>
        );
    }
}

export default Cart;
