import React from "react";
import ImageList from "./ImageList";
import Header from "./Header";


class App extends React.Component {
    render() {
        return (
            <div className="app-wrapper">
                <Header />
                <ImageList />
            </div>
        );
    }
}

export default App;
