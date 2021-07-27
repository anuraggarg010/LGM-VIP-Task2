import React, { Component } from 'react'

class Data extends Component {

    render() {
        const usrData = this.props.usrData.map((user) => {
            return (

                <div className="row col-lg-4 col-md-4 col-sm-4 col-xs-6" key={user.id} style={{ 'marginTop': '20px' }}>
                    <div className="thumbnail col-lg-3 col-md-3 col-sm-3 col-xs-6" style={{ 'background': 'black' }}>
                        <div className="imgBx ">
                            <img src={user.avatar} alt="images" />
                        </div>
                        <div className="details">
                            <h2>{user.first_name + " " + user.last_name}<br /><span>{user.email}</span></h2>
                        </div>
                    </div>
                </div>


            );
        });
        return (
            <div className="container">
                <div className="row" style={{ 'marginTop': '20px' }}>
                    {usrData}
                </div>
            </div>
        );
    }
}

export default Data