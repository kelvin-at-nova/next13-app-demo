import UserRow from "./UserRow";
import { User, ResultsState } from "@/models/User";

interface Props {
  users: ResultsState;
}
const UserList = ({ users }: Props) => {
  const page = 1;
  const limit = 10; // page is always 1, feature not implemented
  const { results, total } = users;
  return (
    <>
      <div style={{ display: "grid", gap: "10px", gridTemplateColumns: "16px auto 1fr" }}>
        {results.map((u: User, i) => (
          <UserRow u={u} key={i} />
        ))}
      </div>
      <div style={{ margin: "40px auto" }}>
        page {page} of {Math.floor(total / limit)} - {total} results
      </div>
    </>
  );
};
export default UserList;
