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

export function getDuration(fromTime, toTime = '') {
  const toDate = toTime ? new Date(toTime) : new Date();
  const fromDate = new Date(fromTime);
  const duration = Math.floor((toDate - fromDate) / 1000);
  return formatTime(duration);
}

export function formatTime(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(num) {
  return num.toString().padStart(2, '0');
}
