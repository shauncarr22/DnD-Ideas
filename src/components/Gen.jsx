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

    saveStory(){
        if(this.state.loading === true){
            console.log('no story to save');
        } else {
            Axios.post(`http://localhost:5000/saveStory`, {
                Boss: `${this.state.story[0]}`,
                Motive: `${this.state.story[1]}`,
                World: `${this.state.story[2]}`
            })
            .then((res) => {
                console.log('story saved');
            });
        };
    };

    render() {
        let p 
        if(this.state.loading === false){
        p = <div>
            <p className="Gen__Story">Boss: {this.state.story[0]}</p>
            <p className="Gen__Story">Motive: {this.state.story[1]}</p>
            <p className="Gen__Story">World: {this.state.story[2]}</p>
            </div>
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
                <div className="Gen__Save">
                    <button onClick={this.saveStory.bind(this)}>Save</button>
                </div>
            </div>
        );
    };

};

export default Gen;