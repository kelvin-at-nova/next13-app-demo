export type UsersState = {
  search?: string; //filter
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
