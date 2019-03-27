import React, { Component, Fragment } from 'react';

import styles from './portfolio.module.css';

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
import ImageGallery from "../imageGallery/imageGallery";

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

class Portfolio extends Component{

    state = {
        imageArray,
        mouseHover: false,
        showGalleryModel: false,
        imageIndex: '',
    }

    handleImageClick = (object, index) => {
        console.log("==handleImageClick==", object, index)
        if( this.state.showGalleryModel ){
            this.setState({
                showGalleryModel: false,
                imageIndex: '',
            })
        } else {
            this.setState({
                showGalleryModel: true,
                imageIndex: index,
            })
        }

    }

    handleOnMouseOver= ( ) => {
        // console.log("==handleOnMouseOver==")
        this.setState({
            mouseHover: true,
        })
    }


    handleOnMouseOut= ( ) => {
        // console.log("==handleOnMouseOut==")
        this.setState({
            mouseHover: false,
        })
    }


    render(){
        return(
            <Fragment>
                <h1>ImageStack</h1>
                <div className="container">
                    <div className='row'>
                        {
                            this.state.imageArray.map((imgObject, index) => {
                                return <div key={index}
                                            className={`col-sm-12 col-md-6 col-lg-6 ${styles.imageContainer}`}
                                            onMouseOver={this.handleOnMouseOver}
                                            onMouseOut={this.handleOnMouseOut}>
                                    <img className={`img-fluid`}
                                         src={first}
                                         onClick={() => this.handleImageClick(imgObject, index)}
                                         alt="first" />

                                    <div className={this.state.mouseHover ? `${styles.textContainer}` : `${styles.textContainerHover}` } >
                                        <span> hello</span>
                                    </div>

                                </div>

                            })
                        }
                    </div>
                    {
                        this.state.showGalleryModel ? <ImageGallery
                                        imageArray={this.state.imageArray}
                                        closePopup={this.handleImageClick}
                                        imageIndex={this.state.imageIndex}
                                    /> : <div></div>
                    }

                </div>
            </Fragment>
        )
    }
}

export default Portfolio;