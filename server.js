const axios = require("axios");
const express = require("express");
const app = express();
const cors = require("cors");

let phonesArr = [];

const irshad = (brand) => {
  return axios
    .get(
      `https://irshad.az/telefon-ve-aksesuarlar/mobil-telefonlar?q=${brand}`,
      {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    )
    .then((html) => {
      html.data.product_list.forEach((el) => {
        phonesArr.push({
          name: Object.values(el.configurations)[0].name,
          pictureURL: Object.values(el.configurations)[0].image,
          id: el.id,
          logo: "irshad.az",
          company: brand,
          price: el.price,
        });
      });
      console.log("irs");
    });
};

const maxi = (brand) => {
  return axios
    .get(
      `https://maxi.az/ru/search/filter/clear/apply/?q=${brand}&sectionId=602&PAGEN_1=1&api=y`,
      {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    )
    .then((html) => {
      html.data.catalogSectionList.items.forEach((el) => {
        phonesArr.push({
          name: el.name,
          pictureURL: "maxi.az" + el.picture.src,
          price: el.price.price,
          company: brand,
          logo: "maxi.az",
          id: el.id,
        });
      });
      console.log("maxi");
    });
};

app.use(
  cors({
    origin: "*",
  })
);

app.get("/user/:brand", function (req, res) {
  const brand = req.params.brand.split(" ").join("");
  Promise.all([maxi(brand), irshad(brand)]).then(() => {
    res.json(phonesArr);
    phonesArr = [];
  });
});

app.listen(3001, function () {
  console.log("Example app listening on port 3001!");
});
