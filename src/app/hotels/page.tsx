import Link from "next/link";
import Hotel from "./Hotel";
import fetchData from "@/utils/fetch";

function createMarkup(html: string) {
  return { __html: html };
}

export default async function Page() {
  const response = await fetchData<{ data: Hotel[] }>(
    "http://localhost:1337/api/hotels?populate=*"
  );

  if (!response.data) {
    return (
      <>
        <h1>Отели</h1>
        <h2>Не найдены</h2>
      </>
    );
  }

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
          <Link href={`/hotels/${hotel.documentId}/#rooms`}>Выбрать номер</Link>
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
