const express = require("express");
const moment = require("moment");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/check", async (req, res) => {
  const { date } = req.body;
  console.log(req.body);
  try {
    if (date == null) {
      throw Error("Bad request");
    }

    myDate = moment(date, "MM-DD-YYYY");

    if (moment() < myDate) {
      return res.json({
        result: myDate.diff(moment(), "days")
      });
    }

    return res.status(500).json({
      status: false,
      message: "The date in the past"
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

app.listen(port, () => console.log(`connected at the port ${port}`));
