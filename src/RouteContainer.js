import React from 'react'

let viewMap = {
    navBar: <NavBar />,
    home: <Home />
};

function RouteContainer(props) {
    return (
        <div>
            {viewMap.navBar}
            {viewMap[props.params.path] || viewMap.home}
        </div>
    )
}

function Home() {
    return (
        <div>
            <h1>This is the App.</h1>
        </div>
    )
}

function NavBar() {
    return (
        <div className="dummy-nav-bar">
            <h3>
                This is a dummy navigation bar.
            </h3>
        </div>
    )
}

export default RouteContainer;
