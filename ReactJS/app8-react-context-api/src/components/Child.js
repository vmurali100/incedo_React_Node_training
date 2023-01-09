import React from "react";
import { UseContextConsumer } from "./UseContext";
export const Child = () => {
  return (
    <div>
      <UseContextConsumer>
        {(users) => {
          return (
            <ul>
              {users.map((user, i) => (
                <li key={i}>{user}</li>
              ))}
            </ul>
          );
        }}
      </UseContextConsumer>
    </div>
  );
};
