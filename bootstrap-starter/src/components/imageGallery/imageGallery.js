import React, { Component, Fragment } from 'react'

import styles from './ImageGallery.module.css'

class ImageGallery extends Component{



    constructor(props){
        super(props)
        console.log("==this.props==", this.props)
        console.log("==imageArray==", this.props.imageArray)
        console.log("==imageIndex==", this.props.imageIndex)
        this.state = {
            imageArray: props.imageArray,
            imageIndex: props.imageIndex,
        }
    }

    handleClosePopup = () => {
        console.log("==handleClosePopup==")
        this.props.closePopup();

    }

    onClickLeft = () => {
        console.log("==onClickLeft==")
        if( this.state.imageIndex > 0 ){
            this.setState({
                imageIndex: this.state.imageIndex -1
            },() => console.log(this.state.imageIndex))
        }
    }

    onClickRight = () => {
        console.log("==onClickRight==")
        if( true ){
            this.setState({
                imageIndex: this.state.imageIndex + 1
            },() => console.log(this.state.imageIndex))
        }
    }

    render(){
        return(
            <Fragment>
                <div className={` ${styles.galleryPopupWrapper}`}>
                    <div className={`${styles.galleryPopupWrapperInner}`}>
                        <div>
                            <span onClick={this.handleClosePopup} className={styles.closeX} >X</span>
                        </div>
                        <h1>Gallery</h1>
                        <div className={`row ${styles.imagePart}`}>
                            <div className="col-1">
                                <span onClick={this.onClickLeft} >{"<"}</span>

                            </div>
                            <div className="col-5">
                                {
                                    this.state.imageIndex ?
                                        <div>
                                            <img src={this.props.imageArray[this.state.imageIndex].image} alt='dfrefer' />
                                        </div>:
                                        <div>

                                        </div>
                                }

                            </div>
                            <div className="col-1">
                                <span onClick={this.onClickRight}>{">"}</span>
                            </div>
                            <div className={`col-5 ${styles.aboutImage}`}>
                                <span>about image</span>
                            </div>

                        </div>
                    </div>
                </div>
                <h1>ImageGallery</h1>

            </Fragment>
        )
    }
}

export default ImageGallery;