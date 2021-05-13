import React, { Component } from 'react'

export default class Model extends Component {
    state = {
        arrProduct: [

            { id: 1, price: 30, name: 'GUCCI G8850U', url: './img/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

            { id: 2, price: 50, name: 'GUCCI G8759H', url: './img/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

            { id: 3, price: 30, name: 'DIOR D6700HQ', url: './img/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

            { id: 4, price: 30, name: 'DIOR D6005U', url: './img/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

            { id: 5, price: 30, name: 'PRADA P8750', url: './img/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

            { id: 6, price: 30, name: 'PRADA P9700', url: './img/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

            { id: 7, price: 30, name: 'FENDI F8750', url: './img/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

            { id: 8, price: 30, name: 'FENDI F8500', url: './img/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

            { id: 9, price: 30, name: 'FENDI F4300', url: './img/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        ]
    }
    renderGlass = () => {
        return this.state.arrProduct.map((item, index) => {
            return <div className="col-2" key={index}>
                <img src={item.url} className="img-fluid" onClick={()=>{this.tryOn(item.id)}}/>
            </div>
                ;

        })
    }
    tryOn = (id) => {
         let glSelected;
        for (let value of this.state.arrProduct) {
            if (value.id === id) {
                console.log(value);
                glSelected = value;
            }
        }
        this.setState({
            imgSrc:`${glSelected.url}`,
            imgName:`${glSelected.name}`,
            imgPrice:`${glSelected.price}`,
            imgDesc:`${glSelected.desc}`
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4 mt-5 ml-5">
                        <img src="./img/model.jpg" alt="123" style={{
                            width: 200,
                        }} />
                        <img src={this.state.imgSrc} alt="123" style={{
                            position:'absolute',
                            width:100,
                            top:65,
                            left:65,
                            opacity:0.9
                        }}/>
                        <div style={{
                            position:'absolute',
                            width:200,
                            height:90,
                            backgroundColor:'orange',
                            top:150,
                            color:'white',
                            opacity:0.5
                        }}>
                            <h5 style={{color:'blue'}}>{this.state.imgName}-{this.state.imgPrice}</h5>
                            <p style={{fontSize:10}}>{this.state.imgDesc}</p>
                        </div>
                    </div>
                    <div className="col-4 mt-5">
                        <img src="./img/model.jpg" alt="123" style={{
                            width: 200,
                            marginLeft: 160
                        }} />
                        
                    </div>
                </div>
                <div className="row " style={{
                    width: 900,
                    height: 200,
                    backgroundColor: 'black',
                }}>
                    {this.renderGlass()}
                </div>
            </div>
        )
    }
}
