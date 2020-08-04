import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

import Carousel from '../../components/Carousel';
import Input from '../../components/Input';
import GoogleImage from '../../assets/imgs/google.png';
import Slider from '../../assets/imgs/slider.png';
import { Container, Button, ButtonGoogle } from './styles';

export default function SignUp(props) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [form, setForm] = useState({
    fullName: { value: '', error: false },
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

  const submitRegister = async () => {
    const { usernameOrEmail, password, fullName } = form;

    if (
      !usernameOrEmail.value.length ||
      !password.value.length ||
      !fullName.value.length
    ) {
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
    props.history.push('/signin');
  };

  window.addEventListener('resize', () => {
    setIsMobile(window.innerWidth <= 768);
  });

  return (
    <Container>
      {!isMobile && (
        <div className="wrapper-carousel">
          <Carousel sliders={sliders} />
        </div>
      )}
      <div className="wrapper-form">
        <p className="logo">Invision</p>
        <p className="title">Getting Started</p>
        <div className="form">
          <Input
            cls="name"
            label="Full Name"
            type="text"
            id="fullName"
            value={form.fullName.value}
            error={form.fullName.error}
            change={(event, input) => {
              handleInput(event, input);
            }}
          />
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
            label="Create Password"
            type="password"
            id="password"
            value={form.password.value}
            error={form.password.error}
            change={(event, input) => {
              handleInput(event, input);
            }}
          />
          <Button onClick={submitRegister}>Sign Up</Button>
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
            Policy By signing up, you agree to <strong>Invision </strong>
            <br />
            <span>Terms of Conditions</span> and <span>Privacy</span>
          </p>
          <p className="create-account">
            Already on <strong>Invision</strong>?
            <span onClick={() => props.history.push('/signin')}>Log in</span>
          </p>
        </div>
      </div>
    </Container>
  );
}

SignUp.propTypes = {
  history: PropTypes.any,
};
