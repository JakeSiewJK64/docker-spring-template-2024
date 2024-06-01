import { useGetAllUsers } from "@/hooks";

export default async function Page() {
  const { data: users, status } = await useGetAllUsers();

  console.log(status);

  if (users) {
    return (
      <>
        {users.content.map((user: User) => (
          <div key={user.id}>
            <p>{user.first_name}</p>
          </div>
        ))}
      </>
    );
  }

  return null;
}
