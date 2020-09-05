const errorHandler = error => {
  if (!error.response) return;
  const { status } = error.response;
  if (status === 500) {
    // window.location.replace('/auth/maintenance');
  }
};
export default errorHandler;
