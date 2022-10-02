export const showNotificationFunction = (data) => {
  data(true);
  setTimeout(() => {
    data(false);
  }, 2500);
};

export const checkWin = (correct, wrong, word) => {
  let status = "Won";
  word.split("").forEach((letter) => {
    if (!correct.includes(letter)) {
      status = "";
    }
  });

  if (wrong.length === 6) status = "Lost";
  return status;
};
