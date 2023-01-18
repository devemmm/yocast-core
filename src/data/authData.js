export const baseUrl = "https://yocast.rw";
export const headers = {
  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InV3YXZhbGVuczIwMDNAZ21haWwuY29tIiwiaWF0IjoxNjc0MDYyMDM4fQ.3yHDUw7x1_L1kD00ag3mS1JF5Xjd92RnLD5lHbkoXi4`,
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
