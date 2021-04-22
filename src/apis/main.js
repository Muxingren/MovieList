import service from "../utils/request";

export function getMoviesData(params) {
  return service.get("/main", { params });
}
