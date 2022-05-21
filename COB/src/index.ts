import app from "./app"
import getAllCompete from "./endpoints/getAllCompete"

app.get("/cadastro", getAllCompete)