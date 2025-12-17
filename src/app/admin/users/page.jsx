import UsersList from "../../../features/admin/components/users-list";
import { http } from "../../../httpServices";

export default async function Page() {
  const { usersList } = await http.get("/users").then(({ data }) => data);
  return (
    <div className="flex flex-col gap-y-4">
      <span>صفحه محصولات</span>
      <UsersList data={usersList} />
    </div>
  );
}
