import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ImageUpload from "./ImageUpload";
import Header from "./Header";
import ImageList from "./ImageList";
import "../style/main.css"

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Header/>
                        <div className="content-wrapper">
                            <Switch>
                                <Route exact path={"/"} component={ImageList}/>
                                <Route exact path={"/image-upload"} component={ImageUpload}/>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
