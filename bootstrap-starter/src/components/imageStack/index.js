import React, { Component, Fragment } from 'react';

import styles from './ImageStack.module.css';

import first from './images/first.jpeg'
import second from './images/second.jpeg'
import third from './images/third.jpeg'
import fourth from './images/fourth.jpeg'
import fifth from './images/fifth.jpeg'
import sixth from './images/sixth.jpeg'
import seventh from './images/seventh.jpeg'
import eighth from './images/eighth.jpeg'
import ninth from './images/ninth.jpeg'
import tenth from './images/tenth.jpeg'

const imageArray = [
    {image: first, name: "first" },
    {image: second, name: "second" },
    {image: third, name: "third"},
    {image: fourth, name: "fourth" },
    {image: fifth, name: "fifth"},
    {image: sixth, name: "sixth"},
    {image: seventh, name: "seventh"},
    {image: eighth, name: "eighth"},
    {image: ninth, name: "ninth"},
    {image: tenth, name: "tenth"},
]

class ImageStack extends Component{

    state = {
        imageArray,
        mouseHover: false,
    }

    handleImageClick = (object) => {
        console.log("==handleImageClick==", object)
    }

    handleOnMouseOver= ( ) => {
        console.log("==handleOnMouseOver==")
        this.setState({
            mouseHover: true,
        })
    }


    handleOnMouseOut= ( ) => {
        console.log("==handleOnMouseOut==")
        this.setState({
            mouseHover: false,
        })
    }


    render(){
        return(
            <Fragment>
                <h1>ImageStack</h1>
                <div className="container-fluid">
                    <div className='row'>
                        {
                            this.state.imageArray.map((obj, index) => {
                                // console.log("==image==", obj)
                                return <div className="col-sm-6">
                                    <div className={` ${styles.imageDiv}`}
                                         key={index}
                                         onMouseOver={this.handleOnMouseOver}
                                         onMouseOut={this.handleOnMouseOut}
                                         onClick={() => this.handleImageClick(obj)}
                                         // style={{background: `url(${obj.image})`}}
                                    >
                                        <img className={`image-fluid ${styles.imagesCss}`}
                                             src={obj.image} alt='hell' />
                                        <div>
                                            <h1>{`${index} : ${obj.name}`}</h1>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ImageStack;