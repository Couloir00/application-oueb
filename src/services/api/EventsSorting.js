import { estimateDistance } from "./Maths.js";

const sortEvents = function (events, sortOrder, latitude, longitude) {
  if (sortOrder === "A to Z") {
    return events.sort((a, b) => {
      if (a.venue.country < b.venue.country) return -1;
      if (a.venue.country > b.venue.country) return 1;
      if (a.venue.city < b.venue.city) return -1;
      if (a.venue.city > b.venue.city) return 1;
      return 0;
    });
  } else if (sortOrder === "Distance") {
    return events.sort((a, b) => {
      const distanceA = estimateDistance(
        a.venue.latitude,
        a.venue.longitude,
        latitude,
        longitude
      );
      const distanceB = estimateDistance(
        b.venue.latitude,
        b.venue.longitude,
        latitude,
        longitude
      );
      if (distanceA < distanceB) return -1;
      if (distanceA > distanceB) return 1;
      return 0;
    });
  } else if (sortOrder === "") {
    // Lorsque "Reset Sorting" est cliqué, sortOrder est défini sur une chaîne vide, ce qui entraîne la sortie des données brutes sans tri.
    return events;
  }
};
export { sortEvents };
