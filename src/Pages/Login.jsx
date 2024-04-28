import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Redux
import { connect } from 'react-redux';
import Actions from '../redux/actions'
// Style
import { Button, Input } from 'reactstrap';
import CSSLogin from '../style/Pages/Login'
// Helpers
import { image } from '../tools/Helper'
import { CHAR } from '../tools/rules'

function Login(props) {
  const { name, password, updateName, updatePassword } = props
  let navigate = useNavigate();

  useEffect(() => {
    updatePassword('')
  },[updatePassword])

  const handleName = ({ target: { value } }) => updateName(value);
  const handlePassword = ({ target: { value } }) => updatePassword(value);

  const logInAction = () => {
    const userName = localStorage.getItem("user");
    const userPass = localStorage.getItem("password");

    // Developer Bypass
    if (name === 'vincenzo' && password === 'vincenzo') {
      localStorage.setItem("user", 'Admin');
      localStorage.setItem("password", 'Admin')
      localStorage.setItem("email", 'admin@admin.com')
      updateName('Admin');
      updatePassword('Admin');
      navigate('/home');
      return
    }
    // =================

    if (userName !== name || userPass !== password) {
      window.alert('Ops wrong user name or password!')
      return
    }

    navigate('/home')
  }

  return (
    <CSSLogin>
      <div className="main-container">
        <div className="title-container">
          <img src={ image('logo') } alt="Application Logo" />
          <h1>
              <kbd> _IPlayer_ </kbd>
              <br />
              <samp>Web Music Player</samp>
          </h1>
        </div>
        <div type="submit" className="submit-container">
            <Input
              placeholder="name"
              value={ name }
              onChange={(event) => handleName(event)}
            />
            <Input
              placeholder="password"
              type="password"
              value={ password }
              onChange={(event) => handlePassword(event)}
            />
            <div className="btn-container">
              <Button 
                type="submit"
                disabled={ name.length < CHAR[0] || password.length < CHAR[1] }
                color="primary"
                onClick={() => logInAction()}
              >
                Log In
              </Button>
              <Button
                
                color="success"
                onClick={() => navigate('/signup')}
              >
                Sign Up
              </Button>
            </div>
        </div>
      </div>
    </CSSLogin>
  )
};

const mapStateToProps = (state) => ({
  name: state.user.name,
  password: state.user.password,
});

const mapDispatchToProps = (dispatch) => ({
  updateName: (name) => dispatch(Actions.name(name)),
  updatePassword: (password) => dispatch(Actions.password(password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
