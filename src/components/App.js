import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createUserRequest, getUsersRequest } from "../actions/users";
import NewUserForm from "./NewUserForm";

import UsersList from "./UsersList";

// function* testing() {
//   while (true) {
//     yield 1;
//     yield 2;
//     yield 3;
//   }
// }

// const testObject = testing();
// console.log(testObject.next());
// console.log(testObject.next());
// console.log(testObject.next());
// console.log(testObject.next());

const App = () => {
  const usersData = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersRequest());
  }, [dispatch]);

  const handleSubmit = ({ firstName, lastName }) => {
    dispatch(createUserRequest({ firstName, lastName }));
  };

  return (
    <div style={{ margin: "0 auto", padding: "20px", maxWidth: "600px" }}>
      <NewUserForm onSubmit={handleSubmit} />
      <UsersList users={usersData.items} />
    </div>
  );
};

export default App;
