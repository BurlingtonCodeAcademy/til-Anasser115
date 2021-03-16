import React from "react";

export default function Redirecting() {
  setTimeout(() => {
    window.location.assign("/");
  }, 2000);

  return (
    <div>
      <h1>Form submited successfully! </h1>
      <h3>Redirecting ...</h3>
    </div>
  );
}
