const calculateDistance = function (
  eventLatitude,
  eventLongitude,
  latitude,
  longitude
) {
  const earthRadius = 6371;
  //convert degrees to radian
  const dLat = (latitude - eventLatitude) * (Math.PI / 180);
  const dLon = (longitude - eventLongitude) * (Math.PI / 180);
  //first part of the haversine formula
  const haversineIntermediate =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(eventLatitude * (Math.PI / 180)) *
      Math.cos(latitude * (Math.PI / 180)) *
      Math.sin(dLon / 2) ** 2;
  //second part of the haversine formula
  const haversineFinal =
    2 *
    Math.atan2(
      Math.sqrt(haversineIntermediate),
      Math.sqrt(1 - haversineIntermediate)
    );
  //convert the distance in kilometer
  const distance = earthRadius * haversineFinal;
  if (distance <= 70) {
    const x = dLat * earthRadius;
    const y = dLon * earthRadius * Math.cos(latitude * (Math.PI / 180));
    return Math.sqrt(x * x + y * y);
  } else {
    return distance.toFixed(2);
  }
};

const isWithinRadius = function (distance, radius) {
  return parseFloat(distance) <= parseFloat(radius);
};

export { calculateDistance, isWithinRadius };
