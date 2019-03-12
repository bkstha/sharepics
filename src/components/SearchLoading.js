import React from "react";
import {connect} from "react-redux";

class SearchLoading extends React.Component {
    render() {
        if (this.props.loading) {
            return <div className="text-center"><span className="fa fa-circle-o-notch fa-spin"></span>    Loading...</div>;
        } else {
            return <div/>
        }
    }
}

const mapStateToProps = state => {
    return {
        loading : state.images.loading
    }
};

export default connect(mapStateToProps, {})(SearchLoading);

