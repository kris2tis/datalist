import UserLayout from "../../shared/components/layout/user/index";

export default function layout({ children }) {
  return (
    <UserLayout>
      { children }
    </UserLayout>
  );
}
