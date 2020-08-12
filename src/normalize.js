import "./constants";
import { BASE_URL } from "./constants";

export function getIdFromUrl(url) {
  var str = url.replace(`${BASE_URL}`, "");
  return str.replace(/\D/g, "");
}
