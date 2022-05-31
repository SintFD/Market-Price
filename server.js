// const fs = require("fs");
const axios = require("axios");

const express = require("express");
const app = express();

const cors = require("cors");

let xiaomi = [];

const irshad = () => {
  axios
    .get("https://irshad.az/mehsullar?q=apple", {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
    })
    .then((html) => {
      console.log(html.data.product_list);
    });
};

const maxi = (res, brand) => {
  return axios
    .get(
      `https://maxi.az/ru/search/filter/clear/apply/?q=${brand}&sectionId=602&PAGEN_1=3&api=y`,
      {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    )
    .then((html) => {
      res.json(html.data.catalogSectionList);
    });
};

app.use(
  cors({
    origin: "*",
  })
);

app.get("/user/:brand", function (req, res) {
  maxi(res, req.params.brand);
  console.log(req.params);
});

app.listen(3001, function () {
  console.log("Example app listening on port 3001!");
});
