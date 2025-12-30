const categories = [
  { name: 'موبایل', img: '3', bg: 'bg-blue-50' },
  { name: 'کالای دیجیتال', img: '4', bg: 'bg-blue-50' },
  { name: 'مد و پوشاک', img: '5', bg: 'bg-purple-50' },
  { name: 'خانه', img: '6', bg: 'bg-green-50' },
  { name: 'سوپرمارکت', img: '7', bg: 'bg-orange-50' },
  { name: 'زیبایی', img: '8', bg: 'bg-pink-50' },
  { name: 'اسباب بازی', img: '9', bg: 'bg-yellow-50' },
];

export const CategoryList = () => (
  <div className="py-8">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
        <span className="w-2 h-6 bg-blue-600 rounded-full"></span>
        دسته‌بندی‌های محبوب
      </h3>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
      {categories.map((cat, index) => (
        <a key={index} className="flex flex-col items-center p-4 bg-white rounded-2xl border border-gray-100 hover:border-blue-400 hover:shadow-lg transition-all group gap-3 text-center" href="#">
          <div className={`w-16 h-16 rounded-2xl ${cat.bg} p-2 group-hover:opacity-80 transition-colors`}>
            <img alt={cat.name} className="w-full h-full object-contain" src={`http://googleusercontent.com/profile/picture/${cat.img}`} />
          </div>
          <span className="text-sm font-bold text-gray-700 group-hover:text-blue-600">{cat.name}</span>
        </a>
      ))}
    </div>
  </div>
);