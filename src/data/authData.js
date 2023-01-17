export const baseUrl = "https://yocast.rw";

export const headers = {
  Authorication: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InV3YXZhbGVuczIwMDNAZ21haWwuY29tIiwiaWF0IjoxNjczOTg1NjY0fQ.Td566s6spuWN6m7WciQjaUY_7fTf65RUs8tD0NuF_6I`,
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
