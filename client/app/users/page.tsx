import React from "react";

const getUsers = async () => {
  const res = await fetch("http://localhost:8080/users");
  const data = await res.json();
  return data;
};

const page = async () => {
  const users: PaginatedResponse<User> = await getUsers();

  if (users) {
    return (
      <>
        {users.content.map((user) => (
          <div key={user.id}>
            <p>{user.first_name}</p>
          </div>
        ))}
      </>
    );
  }

  return null;
};

export default page;
