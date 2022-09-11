import axios from "axios";

export async function getAllEmployeesData() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getEmployeeData(id: string | string[] | undefined) {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
