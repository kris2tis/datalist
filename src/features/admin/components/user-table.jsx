export const UserTable = ({ data }) => {
  if (!data?.length) {
    return <span>کاربری وجود ندارد</span>;
  }

  return (
    <div className="w-full overflow-hidden rounded-xl border border-border-dark bg-surface-dark/10">
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-dark border-b border-border-dark">
              <th className="p-4 text-xs text-right font-medium text-text-secondary uppercase tracking-wider">
                نام کاربر
              </th>
              <th className="p-4 text-xs text-right font-medium text-text-secondary uppercase tracking-wider">
                ایمیل
              </th>
              <th className="p-4 text-xs text-center font-medium text-text-secondary uppercase tracking-wider">
                نقش
              </th>
              <th className="p-4 text-xs text-center font-medium text-text-secondary uppercase tracking-wider">
                تاریخ ورود
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-dark">
            {data.map((product) => {
              const { email, name, role, createdAt } = product;
             return <tr
                key={product.id}
                className="hover:bg-surface-dark/40 transition-colors group"
              >
                <td className="p-4 flex justify-start">
                  <div className="flex items-center gap-x-3">
                    <div className="size-8 rounded-full bg-gray-200"></div>
                    <span className="text-white font-medium text-sm">
                      {name}
                    </span>
                  </div>
                </td>
                <td className="p-4 text-right">
                  <span className="text-sm">{email}</span>
                </td>
                <td className="p-4 text-right">
                  <span className="text-sm">
                    {role === "USER" ? "کاربر" : "ADMIN"}
                  </span>
                </td>
                <td>
                  <span className="text-sm">{createdAt}</span>
                </td>
              </tr>;
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {/* <div className="flex items-center justify-between p-4 border-t border-border-dark bg-surface-dark/20">
        <span className="text-sm text-text-secondary">
          Showing <span className="text-white font-medium">1-5</span> of{" "}
          <span className="text-white font-medium">64</span>
        </span>
        <div className="flex gap-2">
          <button
            className="flex items-center px-3 py-1.5 rounded border border-border-dark text-text-secondary text-sm disabled:opacity-50 hover:bg-surface-dark hover:text-white transition-colors"
            disabled
          >
            <ChevronLeft size={16} className="mr-1" /> Previous
          </button>
          <button className="flex items-center px-3 py-1.5 rounded border border-border-dark text-text-secondary text-sm hover:bg-surface-dark hover:text-white transition-colors">
            Next <ChevronRight size={16} className="ml-1" />
          </button>
        </div>
      </div> */}
    </div>
  );
};


export default UserTable;
