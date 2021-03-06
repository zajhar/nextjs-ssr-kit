import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import FieldError from "~components/Forms/FieldError";

const TextArea = ({
  className,
  errors,
  label,
  name,
  placeholder,
  onChange,
  rows,
  value,
  style,
}) => (
  <div data-testid="textarea-container" className={className} style={style}>
    <label css="margin: 0;display: block;" htmlFor={name}>
      {label}
    </label>
    <textarea
      aria-label={name}
      data-testid={name}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows || 10}
      tabIndex={0}
      value={value}
    />
    <FieldError errors={errors} />
  </div>
);

TextArea.propTypes = {
  className: PropTypes.string.isRequired,
  errors: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  rows: PropTypes.number,
  value: PropTypes.string,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ),
};

export default styled(TextArea)`
  @media (max-width: 768px) {
    display: block !important;
    width: 100% !important;
  }

  min-height: 230px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  textarea {
    box-sizing: border-box;
    padding: 10px;
    height: 173px;
    overflow-y: auto;
    width: 100%;
    background: #fff;
    color: #3a3a3a;
    border: 1px solid ${({ errors }) => (errors ? "#d03916" : "#d3d3d3")};
    border-radius: 4px;
    transition: 0.2s ease-in-out;
    transition-property: color, border;
    resize: none;

    &::placeholder {
      color: #bbb;
    }

    &:focus {
      outline: 0;
      border: 1px solid #1890ff;
    }
  }
`;
