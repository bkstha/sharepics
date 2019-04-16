import React from "react";
import play from "../api/play";
import {logger} from "../logger"
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class ImageUpload extends React.Component {

    state = {
        imageId: '',
        title: '',
        tags: [],
        imageUpload: false
    };

    handleTitleChange = (event) => {
        this.setState({title: event.target.value});
    };
    handleTagsChange = (event) => {
        this.setState({tags: [event.target.value]});
    };

    uploadHandler = (event) => {
        event.preventDefault();
        logger.info(this.state);
        const formData = new FormData();
        formData.append(
            'image',
            event.target.files[0]
        );
        play.post('/image-upload', formData, {
            onUploadProgress: progressEvent => {
                logger.info(progressEvent.loaded / progressEvent.total)
            }
        }).then(response => {
            logger.info("image uploaded");
            logger.info(response);
            this.setState({imageUpload: true, imageId: response.data.id})
        }).catch(e => {
            logger.info("error uploading image");
            logger.error(e);
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.imageUpload) {
            play.post('/image-save', {
                id: this.state.imageId,
                userId: this.props.userId,
                title: this.state.title,
                tags: this.state.tags
            }).then(response => {
                logger.info("image saved");
                logger.info(response)
            }).catch(e => {
                logger.info("error saving image");
                logger.error(e);
            });
        }
    };

    render() {
        if (this.props.isSignedIn) {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        Image: <input type="file" name="image" onChange={this.uploadHandler}/>
                        <br/>
                        Title: <input type="text" value={this.state.title} name="title" onChange={this.handleTitleChange}/>
                        <br/>
                        Tags: <input type="text" name="tags" onChange={this.handleTagsChange}/>
                        <br/>
                        <button type="submit">Submit</button>
                    </form>
                </div>

            );
        } else {
            return <Redirect to='/' />
        }
    }
}

const mapStateToProps = state => {
    return {
        userId: state.auth.id,
        isSignedIn: state.auth.isSignedIn
    }
};

export default connect(mapStateToProps, {})(ImageUpload);
