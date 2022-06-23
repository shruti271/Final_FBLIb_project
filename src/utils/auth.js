export const checkAuth = () => {
  const token = localStorage.getItem("is_alive");
  return JSON.parse(token);
};
