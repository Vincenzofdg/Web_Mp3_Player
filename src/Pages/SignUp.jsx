import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// Redux
import { connect } from 'react-redux';
import Actions from '../redux/actions'
// Style
import { Button, Input } from 'reactstrap';
import CSSSingUp from '../style/Pages/SignUp'
// Helpers
import { image } from '../tools/Helper'
import { CHAR } from '../tools/rules'

function SignUp(props) {
  const [secondEmail, setSecondEmail] = useState('')
  const [secondPassword, setSecondPassword] = useState('')
  const { name, password, email, updateName, updatePassword, updateEmail } = props;
  let navigate = useNavigate();

  useEffect(() => {
    updateName('');
    updatePassword('');
    updateEmail('')
  },[updateName, updatePassword, updateEmail])

  const handleName = ({ target: { value } }) => updateName(value);
  const handlePassword = ({ target: { value } }) => updatePassword(value);
  const handleEmail = ({ target: { value } }) => updateEmail(value);

  const handleClick = () => {
    localStorage.setItem("user",name);
    localStorage.setItem("password", password)
    localStorage.setItem("email", email)
    window.alert('Account Sucessfuly Created <3')
    navigate('/')
  };

  const btnDisabled = () => {
    if (name.length < CHAR[0] || password.length < CHAR[1]) return true;
    if (!/\S+@\S+\.\S+/.test(email)) return true;
    if (email !== secondEmail) return true
    if (password !== secondPassword) return true
    return false
  }

  return (
    <CSSSingUp>
      <div className="main-container">
        <img 
          alt="Go Back to LogIn"
          src={ image('go_back') }
          onClick={() => navigate('/')}
        />
        <div className="container-right">
          <div className="title-container">
            <h1><kbd> _Signing Up_ </kbd></h1>
          </div>
          <div className="submit-container">
              <Input
                placeholder="user name"
                value={ name }
                onChange={(event) => handleName(event)}
              />
              <Input 
                placeholder="e-mail"
                value={ email }
                onChange={(event) => handleEmail(event)}
              />
              <Input
                placeholder="repeat e-mail"
                value={ secondEmail }
                onChange={({ target: { value } }) => setSecondEmail(value)}
              />
              <Input
                placeholder="password"
                type="password"
                value={ password }
                onChange={(event) => handlePassword(event)}
              />
              <Input
                placeholder="repeat password"
                type="password"
                value={ secondPassword }
                onChange={({ target: { value } }) => setSecondPassword(value)}
              />
              <Button
                disabled={ btnDisabled() }
                color="success" onClick={() => handleClick()}
              >
                Create Account
              </Button>
          </div>
        </div>
      </div>
    </CSSSingUp>
  )
};

const mapStateToProps = (state) => ({
  name: state.user.name,
  password: state.user.password,
  email: state.user.email,
  validEmail: state.user.validEmail,
});

const mapDispatchToProps = (dispatch) => ({
  updateName: (name) => dispatch(Actions.name(name)),
  updatePassword: (password) => dispatch(Actions.password(password)),
  updateEmail: (email) => dispatch(Actions.email(email))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
