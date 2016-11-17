import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import RouteContainer from './RouteContainer'

class App extends React.Component {

    render () {
        return (
            <Router history={ hashHistory }>
                <Route path="/(:path)" component={RouteContainer} />
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;