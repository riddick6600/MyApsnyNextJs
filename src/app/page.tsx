import Banner from "@/components/Banner/Banner";
import Categories from "@/components/Categories/Categories";
import Filter from "@/components/Filter/Filter";
import Places from "@/components/Places/Places";

export default function Page() {
  return (
    <>
      <Banner />
      <Filter />
      <Categories />
      <Places />
      <Categories />
    </>
  );
}