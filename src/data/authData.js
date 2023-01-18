export const baseUrl = "https://yocast.rw";

export const headers = {
  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InV3YXZhbGVuczIwMDNAZ21haWwuY29tIiwiaWF0IjoxNjc0MDYwNjc1fQ.zNr6QlEC_93Elx5t1yVDmwCW8tBj85jMVFUU5HD-Pus`,
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
