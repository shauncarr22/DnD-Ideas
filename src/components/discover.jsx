import React from 'react';
import Axios from 'axios';

class Discover extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            stories: null
        };
    };

    componentDidMount(){
        Axios.get(`http://localhost:5000/getAll`)
        .then((data) => {
            this.setState({
                loading: false,
                stories: data.data
            });
        });
    };

    render(){
        let p 
        if(this.state.loading === false){
            p = <div>{this.state.stories.map((el,i) => {
                return (
                    <div>
                        <p>{el}</p>
                    </div>
                );
            })}</div>
        };
        return(
            <div>
                <h1 className="Title__Dis">Discover Other Stories</h1>
                <div>
                    {p}
                </div>
            </div>
        );
    };
};

export default Discover;