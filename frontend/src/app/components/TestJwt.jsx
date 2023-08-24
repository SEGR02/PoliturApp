import React from "react";
import jwt from "jsonwebtoken";

const TestJwt = () => {
  const payload = { user_id: 123, username: "example" };
  console.log(payload);

  const token = jwt.sign(payload, "politurappsecret");
  console.log(token);

  return <div>Test JWT Component</div>;
};

export default TestJwt;
