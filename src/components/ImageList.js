/* eslint-disable jsx-a11y/alt-text */
import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";
import {connect} from 'react-redux';
import {loadMore} from "../actions";
import SearchLoading from "./SearchLoading";

class ImageList extends React.Component{
    constructor(props) {
        super(props);
        this.scrollRef = React.createRef();
    }

    renderImages() {
        return this.props.imageList.map(image => {
            return <ImageCard key={image.id} {...image}/>;
        });
    }

    componentDidMount() {
        this.scrollRef.current.addEventListener("scroll", () => {
            if (this.scrollRef.current.scrollTop + this.scrollRef.current.clientHeight >= this.scrollRef.current.scrollHeight) {
                this.props.loadMore();
            }
        });
    }

    render() {
        return (
            <div className="image-list-wrapper" style={{ height: "100vh", overflow: "auto" }}  ref={this.scrollRef}>
                <div className="image-list">{this.renderImages()}</div>
                <SearchLoading />
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        imageList : state.images.list
    }
};

export default connect(mapStateToProps, {loadMore})(ImageList);
