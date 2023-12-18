export const dummyDataGen = (obj) => {
  const data = [];

  let currentTimestamp = 1702530307;

  for (let i = 0; i < obj; i++) {
    const dataObject = {
      timestamp: currentTimestamp,
      a: Math.floor(Math.random() * 100),
      b: Math.floor(Math.random() * 100),
      c: Math.floor(Math.random() * 100),
    };

    data.push(dataObject);

    currentTimestamp += 30000;
  }

  return data;
};
