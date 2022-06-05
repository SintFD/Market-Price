const axios = require("axios");
const express = require("express");
const app = express();
const cors = require("cors");

let phonesArr = [];

const irshad = (brand) => {
  return axios
    .get(`https://irshad.az/telefon-ve-aksesuarlar/mobil-telefonlar/${brand}`, {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
    })
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
          pictureURL: "https://maxi.az" + el.picture.src,
          price: el.price.price,
          company: brand,
          logo: "maxi.az",
          id: el.id,
        });
      });
      console.log("maxi");
    });
};

const searchMaxi = (brand) => {
  return axios
    .get(
      `https://maxi.az/ajax.php?action=search&ajax=y&LANGUAGE_ID=az&q=iphone+13+pro`,
      {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    )
    .then((html) => {
      phonesArr.push(html.data.products.items);
      html.data.products.items.forEach((el) => {
        phonesArr.push({
          name: el.name,
          pictureURL: "https://maxi.az" + el.picture.src,
          price: el.price.price,
          logo: "maxi.az",
          id: el.id,
        });
      });
      console.log("searchMaxi");
    });
};

const kontakt = (brand) => {
  return axios
    .get(
      `https://kontakt.az/_next/data/ZZZcaCNlVGMJw6qrZD8ro/ru/telefonlar/mobil-telefonlar/${brand}-mobil-telefonlar.json`,
      {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    )
    .then((html) => {
      // phonesArr.push({ a: html.data.pageProps.initialState.subCategories.server.items });
      // html.data
      html.data.pageProps.initialState.subCategories.server.items.forEach(
        (el) => {
          phonesArr.push({
            name: el.name,
            pictureURL: el.image.url,
            price: +el.additional_price.price_credit
              .substring(0, el.additional_price.price_credit.length - 5)
              .split(".")
              .join(""),
            company: brand,
            logo: "kontakt.az",
            id: el.id,
          });
        }
      );
      console.log("kontakt");
    });
};

app.use(
  cors({
    origin: "*",
  })
);

app.get("/product/:brand", function (req, res) {
  const brand = req.params.brand;
  Promise.all([maxi(brand), irshad(brand)], kontakt(brand)).then(() => {
    res.json(phonesArr);
    phonesArr = [];
  });
});

app.get("/searchProduct/:search", function (req, res) {
  const search = req.params.search.replace(/ /gi, "+");
  console.log(search);
  Promise.all([searchMaxi(search)]).then(() => {
    res.json(phonesArr);
    phonesArr = [];
  });
});

app.listen(3001, function () {
  console.log("Example app listening on port 3001!");
});
