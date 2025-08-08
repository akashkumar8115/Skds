// const getImagePrefix = () => {
//   return process.env.NODE_ENV === "production"
//     ? "/SKDS/"
//     : "";
// };

// export { getImagePrefix };
 
// ✅ Keep image paths starting with "/"
const getImagePrefix = () => {
  return process.env.NODE_ENV === "production"
    ? "/SKDS" // no trailing slash here
    : "";
};

export { getImagePrefix };