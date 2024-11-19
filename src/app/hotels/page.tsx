import Link from "next/link";
import Hotel from "./Hotel";

function createMarkup(html: string) {
  return { __html: html };
}

export default async function Page() {
  const response: { data: Hotel[] } = await fetch(
    "http://localhost:1337/api/hotels?populate=*"
  ).then((res) => res.json());

  const hotels: Hotel[] = await response.data.sort((a, b) => {
    if (a.updatedAt > b.updatedAt) {
      return -1;
    } else {
      return 1;
    }
  });

  return (
    <div>
      <h1>Отели</h1>
      <hr />
      {hotels.map((hotel: Hotel) => (
        <article key={hotel.documentId}>
          <br />
          <Link href={`/hotels/${hotel.documentId}`}>
            <h2>{hotel.Name}</h2>
          </Link>
          <div dangerouslySetInnerHTML={createMarkup(hotel.Description)}></div>
          {hotel.photo && (
            <img src={"http://localhost:1337/" + hotel.photo.url} width={100} />
          )}
          <br />
          <hr />
        </article>
      ))}
    </div>
  );
}
