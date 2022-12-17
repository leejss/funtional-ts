import identity from "./identity";
import map from "./map";

export default function values(list: any) {
  return map(list, identity);
}
