export const getAllCars = async () => {
  try {
    const response = await fetch(
      `${process.env.API_URL}GetMakesForVehicleType/car?format=json`,
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch car makes. Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching car makes:', error);
    throw new Error(
      'Unable to fetch car makes at this time. Please try again later.',
    );
  }
};

export const getModalsByFilter = async (car: string, year: string) => {
  try {
    const response = await fetch(
      `${process.env.API_URL}GetModelsForMakeIdYear/makeId/${car}/modelyear/${year}?format=json`,
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch car models for car ID "${car}" and year "${year}". Status: ${response.status}`,
      );
    }

    return await response.json();
  } catch (error) {
    console.error(
      `Error fetching car models for car ID "${car}" and year "${year}":`,
      error,
    );
    throw new Error(
      'Unable to fetch car models at this time. Please try again later.',
    );
  }
};
