import React from 'react';

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'Sachin',

        }
    }
    render(){
        return(<h5>&copy;&nbsp;Copyright - 2022 {this.state.name}</h5>)
    }
}
export default Footer;

