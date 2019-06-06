import React from 'react';
import PropTypes from 'prop-types';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "Alwar",
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState(()=>{
                return { city: "Alwar"}
            })
        },1000)

        setInterval(()=>{
            this.setState(()=>{
                return { city: "Jaipur"}
            })
        },6000)
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("City=",nextState.city)
        return nextState.city!=this.state.city?true:false;
    }
    render() {
        console.log('Main Component render '+Date.now());
        return (
            <div>
                <h2>
                    {this.state.title}
                </h2>
                <p>User Name: {this.props.name}</p>
                <p>User Age: {this.props.age}</p>
            </div>
        );
    }

}
Main.propTypes ={
    name:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired
}

Main.defaultProps = {
    name: 'Kiran Virani',
    age: 21
};

export default Main;
