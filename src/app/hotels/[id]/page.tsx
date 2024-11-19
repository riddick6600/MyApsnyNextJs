import Hotel from "../Hotel";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const response = await fetch(
    "http://localhost:1337/api/hotels?populate=*"
  ).then((res) => res.json());

  return response.data.map((hotel: Hotel) => ({
    id: String(hotel.documentId),
  }));
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;

  const response = await fetch(
    `http://localhost:1337/api/hotels/${id}?populate=*`
  ).then((res) => res.json());

  const hotel: Hotel = response.data;

  return (
    <main>
      <h1>{hotel.Name}</h1>

      <div dangerouslySetInnerHTML={{ __html: hotel.Description }}></div>

      {hotel.photo && <img src={`http://localhost:1337${hotel.photo.url}`} />}
    </main>
  );
}
