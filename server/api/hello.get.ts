export default defineEventHandler((event) => {
  console.log("Event status", event.node.res.statusCode);
  return {
    api: "works",
  };
});

// http://localhost:3000/api/hello

// hello.get.ts only works for get requests, hello.ts would work for all requests
