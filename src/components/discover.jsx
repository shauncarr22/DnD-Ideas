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
            console.log(data.data)
        });
    };

    render(){
        let p 
        if(this.state.loading === false){
            // have p = all the database entires that will be saved to state
        };
        return(
            <div>
                <h1 className="Title__Dis">Discover Other Stories</h1>
            </div>
        );
    };
};

export default Discover;