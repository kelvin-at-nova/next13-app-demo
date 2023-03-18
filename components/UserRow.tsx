import Image from "next/image";
import { User } from "@/models/User";

interface Props {
  u: User;
}
const UserRow = ({ u }: Props, key: string) => {
  return (
    <>
      <div key={key}>
        <Image src={u.picture.thumbnail} alt={""} width={16} height={16} />
      </div>
      <div key={u.id}>
        {u.name.title} {u.name.first} {u.name.last}
      </div>
      <div>
        {u.location.postcode} / {u.location.state} / {u.location.country}
      </div>
    </>
  );
};

export default UserRow;
