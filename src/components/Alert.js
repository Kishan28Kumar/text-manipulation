import React from "react";

const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}

export default function Alert(props) {
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.Type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.Type)}</strong>: {props.alert.msg}
      </div>
    )
  );
}
