export const baseUrl = "https://localhos5                                                                                                                                                                                                                                                                             :5000";
const user = JSON.parse(localStorage.getItem("loggedInUser"));
export const headers = {
  Authorization: `Bearer ${user == null ? "" : user.token.token}`,
  "Content-Type": "multipart/form-data",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
};
export const podcastFields = [
  {
    name: "Title",
    type: "text",
  },
  {
    name: "Price",
    type: "text",
  },
  {
    name: "Description",
    type: "text",
  },
  {
    name: "Category",
    type: "select",
    options: ["Business", "Arts", "Geographical", "Religous", "Polytical"],
  },
];
