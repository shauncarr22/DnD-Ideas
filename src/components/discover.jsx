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
            console.log(this.state.stories)
        });
    };

    render(){
        let p 
        if(this.state.loading === false){
            p = <div>{this.state.stories.map((el,i) => {
                return (
                    <div>
                        <p className='Dis__Boss'>{el.Boss}</p>
                        <p className='Dis__Motive'>{el.Motive}</p>
                        <p className='Dis__World'>{el.World}</p>
                        <br/>
                        <br/>
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