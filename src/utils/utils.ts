const getImagePrefix = () => {
  return process.env.NODE_ENV === "production"
    ? "/SKDS/"
    : "";
};

export { getImagePrefix };
 
