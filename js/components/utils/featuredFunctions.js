export function getExistingFeatured() {
  const featured = localStorage.getItem("featured");

  if (featured === null) {
    return [];
  } else {
    return JSON.parse(featured);
  }
}
