import Banner from "@/components/Banner/Banner";
import Categories from "@/components/Categories/Categories";
import Places from "@/components/Places/Places";

export default function Page() {
  return (
    <>
      <Banner />
      <div className="container text-center">Фильтры</div>
      <Categories />
      <Places />
      <Categories />
    </>
  );
}
