const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const routers = require("./routes");

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(
	cors({
		origin: "*",
	})
);
app.use(morgan("dev"));
app.use("/api/v1", routers);

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.listen(PORT, () => {
	console.log(`App Online on http://localhost:${PORT}`);
});
