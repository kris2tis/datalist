export default function UsersList({ data }) {
  if (!data?.length) {
    return <span>کاربری وجود ندارد</span>;
  }
  return (
    <div className="grid grid-cols-4 gap-2">
      {data.map((p) => (
        <UserCard key={p.id} {...p} />
      ))}
    </div>
  );
}

const UserCard = ({ name }) => {
  return (
    <div className="p-2 border rounded-md hover:bg-gray-800">
      <span>{name}</span>
    </div>
  );
};
