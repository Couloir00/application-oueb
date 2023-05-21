const estimateDistance = function (
  eventLatitude,
  eventLongitude,
  latitude,
  longitude
) {
  //convert degrees to radian
  const latitudeInDegrees = convertDegreesToRadians(latitude, eventLatitude);
  const longitudeInDegrees = convertDegreesToRadians(longitude, eventLongitude);

  //use the haversine formula
  const distance = haversineFormula(
    latitude,
    eventLatitude,
    latitudeInDegrees,
    longitudeInDegrees
  );

  //convert the distance in kilometer
  const distanceInKilometers = convertDistanceInKilometers(distance);

  //if the distance is less than 70km, use the pythagorean theorem to better approximate the distance
  if (distanceInKilometers <= 70) {
    return distanceForNearerEvents(
      latitudeInDegrees,
      longitudeInDegrees,
      latitude
    );
  } else {
    return distanceInKilometers.toFixed(2);
  }
};

const convertDegreesToRadians = function (firstCoordinates, secondCoordinates) {
  return (firstCoordinates - secondCoordinates) * (Math.PI / 180);
};

const haversineFormula = function (
  latitude,
  eventLatitude,
  latitudeInDegrees,
  longitudeInDegrees
) {
  //first part of the haversine formula
  const haversineIntermediate =
    Math.sin(latitudeInDegrees / 2) ** 2 +
    Math.cos(eventLatitude * (Math.PI / 180)) *
      Math.cos(latitude * (Math.PI / 180)) *
      Math.sin(longitudeInDegrees / 2) ** 2;
  //second part of the haversine formula
  const finalDistance =
    2 *
    Math.atan2(
      Math.sqrt(haversineIntermediate),
      Math.sqrt(1 - haversineIntermediate)
    );
  return finalDistance;
};

const convertDistanceInKilometers = function (distance) {
  const earthRadius = 6371;
  return distance * earthRadius;
};

const distanceForNearerEvents = function (
  latitudeInDegrees,
  longitudeInDegrees,
  latitude
) {
  const earthRadius = 6371;
  const x = latitudeInDegrees * earthRadius;
  const y =
    longitudeInDegrees * earthRadius * Math.cos(latitude * (Math.PI / 180));
  return Math.sqrt(x * x + y * y);
};

const isWithinRadius = function (distance, radius) {
  return parseFloat(distance) <= parseFloat(radius);
};

const computeCityNameToCoordinates = async function (city) {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${city}&format=json&limit=1`
    );
    const data = await response.json();
    const latitude = data[0].lat;
    const longitude = data[0].lon;
    return { latitude, longitude };
  } catch (error) {
    console.error(error);
    throw new Error("Error:City not found");
  }
};

export { estimateDistance, isWithinRadius, computeCityNameToCoordinates };
