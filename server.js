/**
 * Custom Node.js entry point for hosts (like Plesk/Passenger) that expect a
 * single startup file to require() and that inject the port via process.env.PORT,
 * rather than running `next start` directly.
 */
const { createServer } = require("http");
const next = require("next");

const port = process.env.PORT || 3000;
const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => handle(req, res)).listen(port, () => {
    console.log(`Last Mile Lease website ready on port ${port}`);
  });
});
