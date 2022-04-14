let speed = 100;
let sentence = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];

for (let char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, speed);
  speed += 200;
}

//compared code with @MattiasWengel
// |/-\|/-\|