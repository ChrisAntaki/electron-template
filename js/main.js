const lf = require("localforage");

(async () => {
  const hellos = (await lf.getItem("hellos")) || 0;
  console.log(`${hellos} hellos`);
  lf.setItem("hellos", hellos + 1);
})();
