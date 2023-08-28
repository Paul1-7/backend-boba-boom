import app from "./app";
import { CONFIG } from "./config";
import DBInit from "./db";

const { PORT } = CONFIG;

DBInit()
  .then(() => {
    console.log("Database conected");
  })
  .catch(() => {
    console.log("Database not conected");
  });

app.listen(PORT, () => {
  console.log("Servidor en http://localhost:" + PORT);
});
