import axios from "axios";

const API_URL = "http://localhost:5000/api/courses";

//get all
export const getCourses = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

//create
export const createCourse = async (courseData) => {
  const response = await axios.post(API_URL, courseData);
  return response.data;
};

//delete
export const deleteCourse = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};