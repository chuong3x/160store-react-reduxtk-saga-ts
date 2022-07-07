import { Store } from "./store";

export interface Location {
  location_id: string;
  name: string;
  stores: Store[];
}
