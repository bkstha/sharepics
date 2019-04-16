import React from "react";
import {connect} from "react-redux";
import {searchImages} from "../actions";
import "../style/search-form.css";

class SearchBar extends React.Component {
    state = { query: "" };

    onFormSubmit = event => {
        event.preventDefault();
        this.props.searchImages(this.state.query);
    };

    loadMore = () => {
        this.props.loadMore();
    };

    render() {
        return (
            <div className="search-form">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <input
                            type="text"
                            placeholder="search images"
                            value={this.state.query}
                            onChange={e =>
                                this.setState({query: e.target.value})
                            }
                        />
                        <span className="fa fa-search">
                        </span>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, {searchImages})(SearchBar);
