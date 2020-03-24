import React from 'react';
import Axios from 'axios';

class Gen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            story: null
        };
    };

    GetStory() {
        Axios.get(`http://localhost:5000/getStory`)
        .then((data) => {
            this.setState({
                loading: false,
                story: data.data
            })
            console.log(this.state.story)
        });
    };

    render() {
        let p 
        if(this.state.loading === false){
            p = <p className="Gen__Story">This is working</p>
        }
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
                <div>
                    {p}
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