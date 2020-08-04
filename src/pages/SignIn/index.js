import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

import Carousel from '../../components/Carousel';
import Input from '../../components/Input';
import GoogleImage from '../../assets/imgs/google.png';
import Slider from '../../assets/imgs/slider.png';
import { Container, Button, ButtonGoogle } from './styles';

export default function SignIn(props) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [form, setForm] = useState({
    usernameOrEmail: { value: '', error: false },
    password: { value: '', error: false },
  });
  const [sliders] = useState([
    {
      image: Slider,
      title: 'Marcenas mattis egestas',
      description:
        'Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.',
    },
    {
      image: Slider,
      title: 'Marcenas mattis egestas',
      description:
        'Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.',
    },
  ]);

  const handleInput = (event, input) => {
    const { value } = event.target;
    setForm({
      ...form,
      [input.id]: { value: value, error: value.length === 0 },
    });
  };

  window.addEventListener('resize', () => {
    setIsMobile(window.innerWidth <= 768);
  });

  const submitLogin = async () => {
    const { usernameOrEmail, password } = form;

    if (!usernameOrEmail.value.length || !password.value.length) {
      const data = form;

      await Object.keys(data).map(async (input) => {
        data[input].error = (await data[input].value.length) === 0;
      });

      setForm({ ...data });

      return null;
    }

    sessionStorage.setItem(
      'user',
      JSON.stringify({ username: usernameOrEmail.value })
    );

    props.history.push('/home');
  };

  return (
    <Container>
      {!isMobile && (
        <div className="wrapper-carousel">
          <Carousel sliders={sliders} />
        </div>
      )}
      <div className="wrapper-form">
        <p className="logo">Invision</p>
        <p className="title">Welcome to Invision</p>
        <div className="form">
          <Input
            cls="email"
            label="Username or Email"
            type="text"
            id="usernameOrEmail"
            value={form.usernameOrEmail.value}
            error={form.usernameOrEmail.error}
            change={(event, input) => {
              handleInput(event, input);
            }}
          />
          <Input
            label="Password"
            type="password"
            id="password"
            value={form.password.value}
            error={form.password.error}
            change={(event, input) => {
              handleInput(event, input);
            }}
          />
          <span className="forgot-password">Forgot password?</span>
          <Button onClick={submitLogin}>Sign in</Button>
          <div className="wrapper-or">
            <div className="line" />
            <span>Or</span>
            <div className="line" />
          </div>
          <ButtonGoogle>
            <img src={GoogleImage} alt="google logo" />
            Sign in with Google
          </ButtonGoogle>
          <p className="create-account">
            New <strong>Invision</strong>?
            <span onClick={() => props.history.push('/signup')}>
              Create Account
            </span>
          </p>
        </div>
      </div>
    </Container>
  );
}

SignIn.propTypes = {
  history: PropTypes.any,
};
