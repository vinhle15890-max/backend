import jsonServer from "json-server";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults({ static: "public" });

server.use(middlewares);
server.use(router);
server.listen(10000, () => {
  console.log("✅ JSON Server is running on port 10000");
});
