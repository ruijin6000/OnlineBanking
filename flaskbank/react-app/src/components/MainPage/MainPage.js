import React from 'react';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Navigation from "../FrameWorkUnity/DynamicNavBar";
import Search from "../FrameWorkUnity/Search";
import Container from "../FrameWorkUnity/Container";
import axios from "axios";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import ChangePassword from "../ChangePassword/ChangePassword";
import {connect} from "react-redux";
import {loginAction,logInRequest} from "../../actions/LoginAction/loginAction";
import {Link}from "react-router-dom";
import cards from '../../images/cards1.png';
import {BrowserRouter as Router, Redirect,Route} from "react-router-dom";



const mainPage = (props) => {
    console.log('I am in main page props ');
    console.log(props);
      if (props.auth == false) {
        return (
            <div>
                <Button variant="contained" onClick={() => props.logInAction()}>
                    Log In
                </Button>
                <Navigation/>
                <Search/>
                <Container>
                    <Login props={props}/>
                </Container>
            </div>

        );}
      else return (
          <Redirect to={'/overview'} />
      )



}


class Login extends React.Component {
    state = {username:"",password:"", open:false};

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    onSubmit =(e) => {
        e.preventDefault();

        console.log('it just submit');

        axios.post('api/login', {
            username: this.state.username,
            password: this.state.password
        }).then(response => {
            if (response.status === 201) {
                this.props.props.logInRequest(response)
                this.props.props.logInAction()
            }
        }).catch(error => {
            this.props.props.logInRequest(error.response)
        });


    }

    render(){
        console.log('I am in login page props ');
        console.log(this.props);
        return (
          <div>
              <div> <img src={cards} alt="card" style = {center}/> </div>
              {/*<div> <img src={card2} alt="card" style = {center2}/> </div>*/}
              {/*<div> <img src={card3} alt="card" style = {center3}/> </div>*/}
              <p style= {para}> </p>
            <Paper style ={paperStyle}>
            <div className ="wrapper fadeInDown" style={wrapper}>
            <div id="formContent">
                <form onSubmit={this.onSubmit}>
                    <Typography variant="h6" >Sign On</Typography>
                        <div style={{margin: '50px'}}>
                            <input
                                style={{margin: '20px'}}
                                type = "text"
                                placeholder="User Name"
                                value = {this.state.username}
                                onChange ={e=>this.setState({username:e.target.value})}
                            />
                            <input

                                type = "password"
                                placeholder="Password"
                                value = {this.state.password}
                                onChange ={e=>this.setState({password:e.target.value})}
                            />
                        </div>

                        <Button variant="contained" type="submit" style={{margin:'10px'}}>
                              Sign On
                        </Button>



                        <div id="formFooter" style={formFooter}>
                            <a className="underlineHover" href= "#" onClick={this.handleOpen}>Forgot Password?</a>
                        </div>
                </form>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <ChangePassword/>
                </Modal>
            </div>
            </div>
            </Paper>
          </div>
        )
    };
}




const wrapper = {
    display: 'flex',
    alignItems: 'center',
    flexDirection:'column',
    justifyContent:'center',
    minHeight: '100%',
    width:'100%',
    padding: '20px',
    border: '3px solid blue',
    opacity: '.9',
    paddingTop: '35px',
    WebkitBorderRadius:'10px 10px 10px 10px',
}

const formContent = {
    WebkitBorderRadius: '10px 10px 10px 10px',
    padding: '30px',
    width: '90%',
    maxWidth: '450px',
    position:'relative',
    textAlign:'center',
    margin: 'auto',
}

const formFooter = {
    position: 'relative',
    padding:'25px',
    textAlign:'center',
    WebkitBorderRadius:'10px 10px 10px 10px',
    borderRadius: '10px 10px 10px 10px',
}
const paperStyle = {
    height: '20%',
    width:  '60%',
    boxShadow: '5px 1px 10px, 5px 1px 10px',
    WebkitBorderRadius:'10px 10px 10px 10px',
    textAlign:'center',
    margin: 'auto',
    font: 'Helvetica',
};

const center = {
    margin: '0',
    position: 'absolute',
    paddingTop: '15px',
    whiteSpace: 'nowrap',
    paddingLeft:'200px',
    paddingBottom: '30px',
    height:'40%',
    width: '50%',
    opacity: '0.98'
}

const center2 = {
    margin: '50px',
    position: 'absolute',
    paddingTop: '20px',
    whiteSpace: 'nowrap',
    paddingLeft:'225px',
    paddingBottom: '30px',
    height:'25%',
    width: '38%',
    opacity: '0.98'
}

const center3 = {
    margin: '100px',
    position: 'absolute',
    paddingTop: '20px',
    whiteSpace: 'nowrap',
    paddingLeft:'250px',
    paddingBottom: '30px',
    height:'25%',
    width: '40%',
    opacity: '0.98'

}

const para = {
    paddingTop: '380px',
    position: 'relative',
}


const mapStateToProps = (state) => {
    console.log("I'm in map State to Props");
    console.log(state);
    return state;
}

export default connect(mapStateToProps,{logInAction: loginAction,logInRequest})(mainPage);