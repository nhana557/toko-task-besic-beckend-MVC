require("dotenv").config();
const express = require("express");
const createError = require("http-errors");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const productRouter = require("./src/routes/product");
const categoryRouter = require("./src/routes/category");
const transaksiRouter = require("./src/routes/transaksi");
const paymentRouter = require("./src/routes/payment");
const transaksi_detailRouter = require("./src/routes/transaksi_detail");

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());


app.use("/products", productRouter);
app.use("/category", categoryRouter);
app.use("/transaksi", transaksiRouter);
app.use("/payment", paymentRouter);
app.use("/transaksi_detail", transaksi_detailRouter);

app.all("*", (req, res, next) => {
   next(createError.NotFound());
});
app.use((err, req, res, next) =>{
   const messageError = err.message || "internal server error";
   const statusCode  = err.status || 500;
   
   res.status(statusCode).json({
      Message : messageError
   });
});

const PORT = process.env.PORT || 8080;
const DB_HOST = process.env.DB_HOST;
app.listen(PORT, () =>{
    console.log(`http://${DB_HOST}:${PORT}`);
});