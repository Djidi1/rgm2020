export function getCatalog(state) {
  return state.movies.data;
}

export function isLoading(state) {
  return state.movies.loading;
}
