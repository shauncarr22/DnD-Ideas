import React from 'react';

class Gen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        };
    };

    GetStory() {
        console.log('Button works')
    };

    render() {
        return (
            <div>
                <div>
                    <h2 className="Title__Gen"> Generate A New Story</h2>
                </div>
                <br/>
                <br/>
                <div>
                    <p className="Gen__P">Generate a new story for your players. Just click the button below!</p>
                </div>
                <br/>
                <div className="Gen__Div">
                    <button onClick={this.GetStory.bind(this)}>Generate</button>
                </div>
            </div>
        );
    };

};

export default Gen;