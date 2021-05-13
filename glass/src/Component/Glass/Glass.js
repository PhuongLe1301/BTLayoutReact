import React, { Component } from 'react'
import Model from './Model'


export default class Glass extends Component {
    render() {
        return (
            <div style={{backgroundImage:`url("./img/background.jpg")`,
            height:1000,
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            backgroundPosition:'center',
            margin:0}}>
                <div style={{
                opacity:0.5,
                width:1539,
                height:100,
                color:'white',
                backgroundColor:'black',
                textAlign:"center"
                }}>
                    <h2 style={{paddingTop:35}}>TRY GLASSES APP ONLINE</h2>
                </div>
                <Model/>
            </div>
        )
    }
}
