import React, { useState } from "react";
import "./Input.css";

const PasswordInput = ({
  icon,
  placeholder,
  height,
  width,
  onChange,
  required,
  name,
  id,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="input-wrapper">
        <input
          placeholder={placeholder}
          type={showPassword ? "text" : "password"}
          className={`${
            width === "sm"
              ? "form-input small input"
              : width === "lg"
              ? "form-input large input"
              : "form-input input"
          }`}
          style={{ height: height }}
          onChange={onChange}
          required={required}
          name={name}
          id={id}
        />
        {icon && (
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="button"
          >
            {icon}
          </button>
        )}
      </div>
    </>
  );
};

export default PasswordInput;
