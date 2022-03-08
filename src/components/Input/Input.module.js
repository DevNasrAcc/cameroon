import React from "react";
import "./Input.css";

import PasswordInput from "./PasswordInput.module";

const Input = ({
  label,
  icon,
  placeholder,
  type,
  valueName,
  width = "lg",
  height,
  onChange,
  required,
  max,
  name,
  id,
  value = "",
}) => {
  const inputHTMLType = () => {
    switch (type) {
      case "email":
        return "email";
      case "phone":
        return "tel";
      default:
        break;
    }
  };

  const renderInput = () => {
    switch (type) {
      case "password":
        return (
          <PasswordInput
            icon={icon}
            placeholder={placeholder}
            height={height}
            width={width}
            onChange={onChange}
            required={required}
            name={name}
            id={id}
          />
        );

      case "checkbox":
        return <input type={type} id={id} name={name} />;

      default:
        return (
          <div className="input-wrapper">
            <input
              placeholder={placeholder}
              className={`${
                width === "sm"
                  ? "form-input small input"
                  : width === "lg"
                  ? "form-input large input"
                  : width === "webkit"
                  ? "form-input webkit input"
                  : "form-input input"
              }`}
              style={{ height: height }}
              type={inputHTMLType()}
              onChange={onChange}
              maxLength={max}
              required={required}
              name={name}
              id={id}
              defaultValue={value}
            />
            <div className="input-wrapper">{icon}</div>
          </div>
        );
    }
  };

  return (
    <div className="input-container" key={valueName}>
      {label && <label className="label">{label}</label>}
      {renderInput()}
    </div>
  );
};

export default Input;
