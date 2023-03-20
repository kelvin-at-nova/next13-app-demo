export type QueryState = {
  search?: string; //filter
  page: number;
  limit: number;
};
export type ResultsState = {
  page: number;
  total: number;
  results: User[]; //init with 1st page data from server side
};

export type User = {
  id: string;
  picture: { thumbnail: string; large: string; medium: string };
  name: { title: string; first: string; last: string };
  location: { postcode: string; state: string; country: string };
};
