import ProductCard from "@/features/products/components/product-card";

export default function UserBookmarkList({ bookmarks , user}) {
  if (!bookmarks?.length) {
    return <span className="mx-auto">محصولی در لیست علاقه ها نیست</span>;
  }

  return (
    <section className="space-y-4" id="bookmarks">
      <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
        <span className="material-symbols-filled text-primary">favorite</span>
        محصولات مورد علاقه
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookmarks.map((b) => (
          <ProductCard key={b.id} product={b.product} user={user}/>
        ))}
      </div>
    </section>
  );
}
