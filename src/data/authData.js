export const baseUrl = "https://yocast.rw";

export const headers = {
  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRqbnRpdnVndXJ1endhZW1tYW51ZWxAZ21haWwuY29tIiwiaWF0IjoxNjc0MDU0NzczfQ.8wQbzR6I_ne7ljSgQvvwoHLu6l6N5ZZqa-psA6r7Crk`,
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
