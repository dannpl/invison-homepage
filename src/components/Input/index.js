import React from 'react';
import { PropTypes } from 'prop-types';
import { Container, Label, Field } from './styles';

export default function Input(props) {
  const { label, change, type, value, error, cls } = props;

  return (
    <Container>
      <Label>{label}</Label>
      <Field
        className={cls}
        error={error}
        value={value}
        onChange={(e) => change(e, props)}
        placeholder={label}
        type={type}
      />
    </Container>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  change: PropTypes.any,
  type: PropTypes.string,
  value: PropTypes.any,
  error: PropTypes.bool,
  cls: PropTypes.any,
};
