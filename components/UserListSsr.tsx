import UserRow from "./UserRow";
import { User, UsersState } from "@/models/User";

interface Props {
  users: UsersState;
}
const UserListSsr = ({ users }: Props) => {
  const page = 1;
  const limit = 10; // page is always 1, feature not implemented
  const { results, total } = users;
  return (
    <>
      <div style={{ display: "grid", gap: "10px", gridTemplateColumns: "16px auto 1fr" }}>
        {results.map((u: User) => (
          <UserRow u={u} key={u.id} />
        ))}
      </div>
      <div style={{ margin: "40px auto" }}>
        page {page} of {Math.floor(total / limit)} - {total} results
      </div>
    </>
  );
};
export default UserListSsr;
