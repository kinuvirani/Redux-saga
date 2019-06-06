import React from 'react';
import { Button, Form, FormGroup, Label, Input,Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';
// import {addUser} from '../action/test.action'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class Insert extends React.Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            password:''
        }
    }
    handleData(){
        let data={
            name:this.state.name,
            email:this.state.email,
            password:this.state.password
        }
        this.props.addUser(data)
        this.props.toggle()
    }
    render() {
        return (
            <div>
                <Button color="primary" onClick={this.props.toggle}>Add Data</Button>
                <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.props.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="exampleEmail" className="mr-sm-2">Name</Label>
                                <Input type="text"  placeholder="Enter Name" value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}}/>
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                                <Input type="email" placeholder="Enter Email" value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}} />
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="examplePassword" className="mr-sm-2">Password</Label>
                                <Input type="password" placeholder="Enter Password" value={this.state.password} onChange={(e)=>{this.setState({password:e.target.value})}} />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handleData.bind(this)}>Submit</Button>{' '}
                        <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}


const mapStateToProps=(state)=>{
    return({
        data:state.test.data
    })
}

// const mapDispatchToProps=(dispatch)=>{
//     return bindActionCreators({addUser},dispatch)
// }

const mapDispatchToProps=(dispatch)=>({
    addUser:(data)=>{
        dispatch({type:"SETUSER",data:data})
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Insert)
