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
      html.data.product_list &&
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
    });
};

const searchIrshad = (search) => {
  return axios
    .get(`https://irshad.az/mehsullar?q=${search}&simple=true`, {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
    })
    .then((html) => {
      html.data.product_list &&
        html.data.product_list.forEach((el) => {
          phonesArr.push({
            name: el.name,
            pictureURL: el.image,
            id: el.id,
            logo: "irshad.az",
            // company: brand,
            price: el.price,
          });
        });
      // phonesArr.push(html.data.product_list);
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
      html.data.catalogSectionList.items &&
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
    });
};

const searchMaxi = (search) => {
  return axios
    .get(
      `https://maxi.az/ru/search/filter/clear/apply/?q=${search}&PAGEN_1=1&api=y`,
      {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    )
    .then((html) => {
      html.data.catalogSectionList.items &&
        html.data.catalogSectionList.items.forEach((el) => {
          phonesArr.push({
            name: el.name,
            pictureURL: "https://maxi.az" + el.picture.src,
            price: el.price.price,
            logo: "maxi.az",
            id: el.id,
          });
        });
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
      html.data.pageProps.initialState.subCategories.server.items &&
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
    });
};

const searchKontakt = (search) => {
  return axios
    .get(
      `https://kontakt.az/graphql?query=+query+ProductSearch(+$pageSize:+Int!,+$currentPage:+Int!,+$search:+String!,+$sort:+ProductAttributeSortInput+)+%7B+products(+pageSize:+$pageSize,+currentPage:+$currentPage,+search:+$search,+sort:+$sort+)+%7B+total_count+page_info+%7B+current_page+page_size+total_pages+%7D+items+%7B+id+sku+name+review_count+stock_status+special_price+product_tags+url_key+category_products_general_attributes+%7B+label+value+%7D+mp_label_data+%7B+name+enabled+label_image+label_template+label_css+label_position+%7D+categories+%7B+breadcrumbs+%7B+item_title+item_url_path+%7D+%7D+media_gallery+%7B+disabled+label+position+url+%7D+image+%7B+url+%7D+additional_price+%7B+discount+price_credit+price_pay_now+%7D+attribute_groups+%7B+attributes+%7B+code+id+label+value+%7D+id+name+%7D+general_attributes+%7B+code+id+image+label+value+%7D+%7D+%7D+%7D+&variables=%7B%22pageSize%22:20,%22currentPage%22:1,%22search%22:%22${search}%22,%22locale%22:%22ru%22%7D`,
      {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    )
    .then((html) => {
      html.data.data.products.items &&
        html.data.data.products.items.forEach((el) => {
          phonesArr.push({
            name: el.name,
            pictureURL: el.image.url,
            price: +el.additional_price.price_credit
              .substring(0, el.additional_price.price_credit.length - 5)
              .split(".")
              .join(""),
            logo: "kontakt.az",
            id: el.id,
          });
        });
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

  Promise.all([
    searchMaxi(search),
    searchIrshad(search),
    searchKontakt(search),
  ]).then(() => {
    res.json(phonesArr);
    phonesArr = [];
  });
});

app.listen(3001, function () {
  console.log("Example app listening on port 3001!");
});
