import { FC } from "react";
import fetchData from "@/utils/fetch";
import Hotel from "../Hotel";
import Room from "../Room";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const response = await fetchData<{ data: Hotel[] }>(
    "http://localhost:1337/api/hotels?populate=*"
  );

  return response.data.map((hotel: Hotel) => ({
    id: String(hotel.documentId),
  }));
}

type PageProps = { params: Promise<{ id: string }> };

const Pages: FC<PageProps> = async ({ params }) => {
  const { id } = await params;

  const response = await fetchData<{ data: Hotel }>(
    `http://localhost:1337/api/hotels/${id}?populate=*`
  );

  const hotel: Hotel = response.data;

  return (
    <main>
      <h1>{hotel.Name}</h1>

      <div dangerouslySetInnerHTML={{ __html: hotel.Description }}></div>

      {hotel.photo && <img src={`http://localhost:1337/${hotel.photo.url}`} />}

      <h2 id="rooms">Номера</h2>

      {hotel.rooms?.map((room: Room) => (
        <>
          <h3>{room.name}</h3>
          <p>{room.description}</p>
        </>
      ))}
    </main>
  );
};

export default Pages;
