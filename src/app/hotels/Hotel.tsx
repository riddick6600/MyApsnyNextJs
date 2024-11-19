export interface Hotel {
  id: string;
  documentId: string;
  title: string;
  Name: string;
  content: string;
  Description: string;
  photo?: { url: string };
  updatedAt: string; //Date
}

export default Hotel;
