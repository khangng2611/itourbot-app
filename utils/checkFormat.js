export const checkImageURL = (url) => {
  if (!url) return false;

  const pattern = /^https?:\/\/.+\.(png|jpg|jpeg|bmp|gif|webp)$/i;
  return pattern.test(url);
};

export const validateEmail = (email) => {
  // Use a regular expression to validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
