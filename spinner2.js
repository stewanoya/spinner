let spinner = () => {
  let spinnerArr = ["\r|   ", "\r/   ", "\r-   ", "\r\\   "];
  let timer = 100;
  while (timer <= 1700) {
    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        process.stdout.write(spinnerArr[i]);
      }, timer);
      timer += 200;
    }
  }
};
spinner();
