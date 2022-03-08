export const handleData = (payload = {}, type) => {
  return { type, payload };
};

export const fetchApi = (type) => {
  return { type };
};
