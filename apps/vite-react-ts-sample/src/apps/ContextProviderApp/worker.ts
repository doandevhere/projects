onmessage = (event) => {
  const value = event.data;
  const result = new Array(value).fill(1).reduce((acc, curr) => acc + curr, 0);
  postMessage(result);
};


