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

export async function getNewsData() {
  try {
    const response = await axios.get(
      "https://newscatcher.p.rapidapi.com/v1/search_enterprise",
      {
        params: {
          q: "hack",
          lang: "id",
          sort_by: "date",
          page: "1",
          page_size: "6",
          media: "True",
        },
        headers: {
          "X-RapidAPI-Key": process.env.RAPID_API_KEY as string,
          "X-RapidAPI-Host": "newscatcher.p.rapidapi.com",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
