import Room from "./Room";

export interface Hotel {
  id: string;
  documentId: string;
  title: string;
  Name: string;
  content: string;
  Description: string;
  photo?: { url: string };
  updatedAt: string; //Date
  rooms: Room[];
}

export default Hotel;
