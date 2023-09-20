const express = require("express");
const app = express();
const axios = require("axios");
const logger = require("morgan");
const cors = require("cors");
const port = 3000;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const createOrder = async (req, res) => {
  try {
    const order = {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: "105.70",
          },
        },
      ],
      application_context: {
        brand_name: "mycompany.com",
        landing_page: "NO_PREFERENCE",
        user_action: "PAY_NOW",
        return_url: `http://localhost:8008/capture-order`,
        cancel_url: `http://localhost:8008/cancel-payment`,
      },
    };

    // format the body
    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");

    const {
      data: { access_token },
    } = await axios.post(
      "https://api-m.sandbox.paypal.com/v1/oauth2/token",
      params,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        auth: {
          username: "AQQ1RH1FAgjDNNzzmxfRkOTx4Q4j6iCOXhOAFo-HueYFGGwp9k2UA1sThTDdURHYo2TVE1hUZcirhdfj",
          password: "EM2FIPXeprpSGgeUM_LeMwWo2ln23p0yaJxsStHk1YQwL7R-KltM2ppIFxVFUVeJCXWEY5spF8WnJyG4",
        },
      }
    );

    console.log(access_token);

    // make a request
    const response = await axios.post(
      `https://api-m.sandbox.paypal.com/v2/checkout/orders`,
      order,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    console.log(response.data);

    return res.json(response.data);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Something goes wrong");
  }
};

//captureOrder
const captureOrder = async (req, res) => {
  const { token } = req.query;

  try {
    const response = await axios.post(
      `https://api-m.sandbox.paypal.com/v2/checkout/orders/${token}/capture`,
      {},
      {
        auth: {
          username: "AQQ1RH1FAgjDNNzzmxfRkOTx4Q4j6iCOXhOAFo-HueYFGGwp9k2UA1sThTDdURHYo2TVE1hUZcirhdfj",
          password: "EM2FIPXeprpSGgeUM_LeMwWo2ln23p0yaJxsStHk1YQwL7R-KltM2ppIFxVFUVeJCXWEY5spF8WnJyG4",
        },
      }
    );

    console.log(response.data);

    res.redirect("/payed.html");
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal Server error" });
  }
};

const cancelPayment = (req, res) => res.redirect("/");

app.get("/", async (req, res) => {
  res.send("Estoy pagando!");
});
app.post("/create-order", createOrder);
app.get("/capture-order", captureOrder);
app.get("/cancel-order", cancelPayment);
