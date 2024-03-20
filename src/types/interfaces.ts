export interface Info {
  date: string;
  name: string;
  review: string;
}

export interface ResponseList {
  [key: string]: { [key: string]: Info};
}

export interface Data {
  data: ResponseList
}

export interface Action {
  type: string;
  payload: any;
}

export interface ReduxState {
  list: ResponseList;
  lang: string;
}
