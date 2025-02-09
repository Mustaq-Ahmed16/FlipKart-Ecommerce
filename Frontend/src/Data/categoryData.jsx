const category_list = [
  {
    id: 1,
    name: "Clothing",
    img: "https://rukminim1.flixcart.com/fk-p-flap/320/170/image/0383e3efa8e391e7.jpg?q=90",
    data: [
      {
        id: 1,
        name: "Men's T-Shirt",
        img: "https://i1.wp.com/www.avjtrickz.com/wp-content/uploads/2018/06/Flipkart-Shirt-And-Tshirt-Mens-Clothing.jpeg?fit=234%2C250&ssl=1",
        price: 499,
        discount: 20, // in percentage
        rating: 4.2,
        features: [
          "Cotton material",
          "Round neck",
          "Machine washable"
        ]
      },
      {
        id: 2,
        name: "Men's Jeans",
        img: "https://tse2.mm.bing.net/th?id=OIP.BAaARVOjZfZv0tBM0Ngh0QHaML&pid=Api&P=0&h=180",
        price: 899,
        discount: 15,
        rating: 2.4,
        features: [
          "Slim fit",
          "Stretchable",
          "Blue denim"
        ]
      },
      {
        id: 3,
        name: "Men's Shirt",
        price: 699,
        img: "https://tse2.mm.bing.net/th?id=OIP.R52d_u7CdV-g8Ovo3w_SawC2FW&pid=Api&P=0&h=180",
        discount: 25,
        rating: 4.5,
        features: [
          "100% Cotton",
          "Slim fit",
          "Full sleeves"
        ]
      },
      {
        id: 4,
        name: "Women's Saree",
        price: 1299,
        img: "https://tse1.mm.bing.net/th?id=OIP.9P2MWQNzfl7-Mx2hzrkoDAAAAA&pid=Api&P=0&h=180",
        discount: 10,
        rating: 4.6,
        features: [
          "Silk material",
          "Traditional design",
          "Comes with blouse piece"
        ]
      },
      {
        id: 5,
        name: "Women's Kurta",
        price: 799,
        img: "https://tse1.mm.bing.net/th?id=OIP.hHSibdIBaYdkrMIBmPQJ_QHaIX&pid=Api&P=0&h=180",
        discount: 30,
        rating: 4.3,
        features: [
          "Cotton",
          "Straight cut",
          "Machine washable"
        ]
      },
      {
        id: 6,
        name: "Women's Dress",
        price: 1499,
        img: "https://rukminim1.flixcart.com/image/1408/1408/j7p2tu80/salwar-kurta-dupatta/q/z/v/free-lflf-1226-likers-fashion-original-imaevy9b7gzw7wfr.jpeg?q=90",
        discount: 15,
        rating: 4.7,
        features: [
          "Comfortable fit",
          "Floral pattern",
          "Perfect for casual outings"
        ]
      },
      {
        id: 7,
        name: "Kids' T-Shirt",
        price: 399,
        img: "https://tse1.mm.bing.net/th?id=OIP.XEdqc53Gizf6iaGcXD_sPQAAAA&pid=Api&P=0&h=180",
        discount: 10,
        rating: 4.0,
        features: [
          "Cotton",
          "Colorful design",
          "For ages 2-5"
        ]
      },
      {
        id: 8,
        name: "Kids' Shorts",
        img: "https://tse1.mm.bing.net/th?id=OIP.0s8e0Tnd_VS1BYjwrj3YPQAAAA&pid=Api&P=0&h=180",
        price: 499,
        discount: 15,
        rating: 4.1,
        features: [
          "Cotton",
          "Elastic waistband",
          "Bright colors"
        ]
      },
      {
        id: 9,
        name: "Kids' Jacket",
        img: "https://tse4.mm.bing.net/th?id=OIP.I7kD4QWrxL9nrnpn46FkSAAAAA&pid=Api&P=0&h=180",
        price: 799,
        discount: 5,
        rating: 4.2,
        features: [
          "Warm and comfortable",
          "Zipper closure",
          "Perfect for winter"
        ]
      }
    ],
  },
  {
    id: 2,
    name: "Accessories",
    img: "https://rukminim1.flixcart.com/fk-p-flap/320/170/image/50ecf765e1e2f573.jpg?q=20",
    data: [
      {
        id: 10,
        name: "Leather Wallet",
        img: "https://rukminim1.flixcart.com/image/1408/1408/j6fcqkw0/shoe/s/y/y/g-4092ws-45-woodland-rb-brown-original-imaewwbgnqr9ytf9.jpeg?q=90",
        price: 999,
        discount: 15,
        rating: 4.5,
        features: [
          "Genuine leather",
          "Multiple card slots",
          "Slim design"
        ]
      },
      {
        id: 11,
        name: "Men's Backpack",
        price: 1599,
        img: "https://rukminim1.flixcart.com/image/832/832/xif0q/backpack/z/x/j/8-bp-rexine-1500-black-35l-13-bp-rexine-1500-black-35l-backpack-original-imaghpvqnwymamwz.jpeg?q=70",
        discount: 20,
        rating: 4.4,
        features: [
          "Water-resistant",
          "Padded straps",
          "Spacious compartments"
        ]
      },
      {
        id: 12,
        name: "Men's Analog Watch",
        price: 1999,
        img: "https://rukminim1.flixcart.com/image/1664/1664/watch/f/f/k/ex206-casio-original-imaepyuzj9227hru.jpeg?q=90",
        discount: 10,
        rating: 4.6,
        features: [
          "Stainless steel band",
          "Water-resistant",
          "Quartz movement"
        ]
      },
      {
        id: 13,
        name: "Women's Smartwatch",
        price: 2999,
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/u/q/v/45-android-ios-best-article-product-pink-strap-smartwatch-p-u-original-imagr2h23bjfjb9h.jpeg?q=70",
        discount: 25,
        rating: 4.7,
        features: [
          "Heart rate monitor",
          "Touchscreen",
          "Fitness tracking"
        ]
      },
      {
        id: 14,
        name: "Ray-Ban Sunglasses",
        price: 4500,
        img: "https://rukminim1.flixcart.com/image/1408/1408/sunglass/r/a/p/0rb3025il9797-rayban-58-original-imadqb2ny5chn6hc.jpeg?q=90",
        discount: 5,
        rating: 4.8,
        features: [
          "UV protection",
          "Stylish design",
          "Polarized lenses"
        ]
      },
      {
        id: 15,
        name: "Aviator Sunglasses",
        img: "https://rukminim1.flixcart.com/image/1408/1408/sunglass/a/n/u/m035gr5p-fastrack-free-size-original-imadzhgsj4ecuj2d.jpeg?q=90",
        price: 799,
        discount: 30,
        rating: 4.3,
        features: [
          "Metal frame",
          "UV protection",
          "Lightweight"
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Electronics",
    img: "https://rukminim1.flixcart.com/fk-p-flap/320/170/image/6e66131320a2069c.jpg?q=90",
    data: [
      {
        id: 16,
        name: "iPhone 13",
        price: 69999,
        img: "https://rukminim1.flixcart.com/image/832/832/ktketu80/mobile/8/z/w/iphone-13-mlph3hn-a-apple-original-imag6vzzhrxgazsg.jpeg?q=70",
        discount: 5,
        rating: 4.6,
        features: [
          "5G enabled",
          "128 GB storage",
          "12 MP camera"
        ]
      },
      {
        id: 17,
        name: "Samsung Galaxy S21",
        img: "https://rukminim1.flixcart.com/image/832/832/l30hmkw0/mobile/w/j/o/galaxy-s21-fe-5g-sm-g990ewziinu-samsung-original-image8dzwv3bch4k.jpeg?q=70",
        price: 74999,
        discount: 10,
        rating: 4.5,
        features: [
          "8 GB RAM",
          "5G enabled",
          "108 MP camera"
        ]
      },
      {
        id: 18,
        name: "Dell XPS 13",
        img: "https://tech.co.za/wp-content/uploads/2022/09/notebook-xps-9315-nt-blue-gallery-3-1536x1152.png",
        price: 129999,
        discount: 15,
        rating: 4.7,
        features: [
          "Intel i7 processor",
          "16 GB RAM",
          "512 GB SSD"
        ]
      },
      {
        id: 19,
        name: "HP Spectre x360",
        img: "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/b/w/m/-original-imagx4ffdhvcpvep.jpeg?q=70&crop=false",
        price: 109999,
        discount: 10,
        rating: 4.6,
        features: [
          "Intel i7 processor",
          "16 GB RAM",
          "Convertible design"
        ]
      }
    ]
  },
  {
    id: 4,
    name: "Groceries",
    img: "https://rukminim1.flixcart.com/fk-p-flap/320/170/image/5b4d4e9118e0c6a1.jpg?q=20",
    data: [
      {
        id: 20,
        name: "Organic Tomatoes",
        img: "https://tse4.mm.bing.net/th?id=OIP.27ecjFDZa_RVQfnMSkWSwAAAAA&pid=Api&P=0&h=180",
        price: 100,
        discount: 10,
        rating: 4.3,
        features: [
          "Fresh",
          "Organic",
          "Pack of 500g"
        ]
      },
      {
        id: 21,
        name: "Fresh Carrots",
        img: "https://rukminim1.flixcart.com/image/832/832/kuczmvk0/vegetable/h/s/j/carrot-ooty-un-branded-no-whole-original-imag7hvnqty9v5gu.jpeg?q=70",
        price: 80,
        discount: 5,
        rating: 4.5,
        features: [
          "Fresh",
          "Pack of 1 kg",
          "High in vitamins"
        ]
      },

      {
        id: 22,
        name: "Bananas",
        img: "https://rukminim1.flixcart.com/image/832/832/ktx9si80/fruit/i/b/j/un-branded-whole-original-imag75p2kpfhzhvm.jpeg?q=70",
        price: 60,
        discount: 15,
        rating: 4.6,
        features: [
          "Fresh",
          "Pack of 6",
          "Rich in potassium"
        ]
      },
      {
        id: 23,
        name: "Apples",
        img: "https://domf5oio6qrcr.cloudfront.net/medialibrary/11525/0a5ae820-7051-4495-bcca-61bf02897472.jpg",
        price: 120,
        discount: 10,
        rating: 4.4,
        features: [
          "Fresh",
          "Pack of 4",
          "Imported"
        ]
      },
      {
        id: 24,
        name: "Lay's Potato Chips",
        price: 30,
        img: "https://rukminim1.flixcart.com/image/416/416/km2clu80/chips/4/t/z/0-390-potato-chips-lays-original-imagf23g9mgf4aje.jpeg?q=70",
        discount: 5,
        rating: 2.5,
        features: [
          "Crispy",
          "Salted flavor",
          "Pack of 100g"
        ]
      },
      {
        id: 25,
        name: "Britannia Biscuits",
        img: "https://rukminim2.flixcart.com/image/832/832/jz30nm80/cookie-biscuit/h/v/c/68-marie-gold-biscuits-britannia-original-imafj69hexukb7zy.jpeg?q=70",
        price: 50,
        discount: 20,
        rating: 4.5,
        features: [
          "Crunchy",
          "Pack of 200g",
          "Rich in taste"
        ]
      }
    ]
  }
]


export default category_list;

// const category_list = [
//   {
//     name: "Clothing",
//     img: "https://rukminim1.flixcart.com/fk-p-flap/320/170/image/0383e3efa8e391e7.jpg?q=90",
//     data: {
//       mens_clothing: [
//         {
//           name: "Men's T-Shirt",
//           price: 499,
//           discount: 20, // in percentage
//           rating: 4.2,
//           features: [
//             "Cotton material",
//             "Round neck",
//             "Machine washable"
//           ]
//         },
//         {
//           name: "Men's Jeans",
//           price: 899,
//           discount: 15,
//           rating: 4.4,
//           features: [
//             "Slim fit",
//             "Stretchable",
//             "Blue denim"
//           ]
//         },
//         {
//           name: "Men's Shirt",
//           price: 699,
//           discount: 25,
//           rating: 4.5,
//           features: [
//             "100% Cotton",
//             "Slim fit",
//             "Full sleeves"
//           ]
//         }
//       ],
//       womens_clothing: [
//         {
//           name: "Women's Saree",
//           price: 1299,
//           discount: 10,
//           rating: 4.6,
//           features: [
//             "Silk material",
//             "Traditional design",
//             "Comes with blouse piece"
//           ]
//         },
//         {
//           name: "Women's Kurta",
//           price: 799,
//           discount: 30,
//           rating: 4.3,
//           features: [
//             "Cotton",
//             "Straight cut",
//             "Machine washable"
//           ]
//         },
//         {
//           name: "Women's Dress",
//           price: 1499,
//           discount: 15,
//           rating: 4.7,
//           features: [
//             "Comfortable fit",
//             "Floral pattern",
//             "Perfect for casual outings"
//           ]
//         }
//       ],
//       kids_clothing: [
//         {
//           name: "Kids' T-Shirt",
//           price: 399,
//           discount: 10,
//           rating: 4.0,
//           features: [
//             "Cotton",
//             "Colorful design",
//             "For ages 2-5"
//           ]
//         },
//         {
//           name: "Kids' Shorts",
//           price: 499,
//           discount: 15,
//           rating: 4.1,
//           features: [
//             "Cotton",
//             "Elastic waistband",
//             "Bright colors"
//           ]
//         },
//         {
//           name: "Kids' Jacket",
//           price: 799,
//           discount: 5,
//           rating: 4.2,
//           features: [
//             "Warm and comfortable",
//             "Zipper closure",
//             "Perfect for winter"
//           ]
//         }
//       ]
//     }
//   },
//   {
//     name: "Accessories",
//     img: "https://rukminim1.flixcart.com/fk-p-flap/320/170/image/50ecf765e1e2f573.jpg?q=20",
//     data: {
//       bags: [
//         {
//           name: "Leather Wallet",
//           price: 999,
//           discount: 15,
//           rating: 4.5,
//           features: [
//             "Genuine leather",
//             "Multiple card slots",
//             "Slim design"
//           ]
//         },
//         {
//           name: "Men's Backpack",
//           price: 1599,
//           discount: 20,
//           rating: 4.4,
//           features: [
//             "Water-resistant",
//             "Padded straps",
//             "Spacious compartments"
//           ]
//         }
//       ],
//       watches: [
//         {
//           name: "Men's Analog Watch",
//           price: 1999,
//           discount: 10,
//           rating: 4.6,
//           features: [
//             "Stainless steel band",
//             "Water-resistant",
//             "Quartz movement"
//           ]
//         },
//         {
//           name: "Women's Smartwatch",
//           price: 2999,
//           discount: 25,
//           rating: 4.7,
//           features: [
//             "Heart rate monitor",
//             "Touchscreen",
//             "Fitness tracking"
//           ]
//         }
//       ],
//       eyewear: [
//         {
//           name: "Ray-Ban Sunglasses",
//           price: 4500,
//           discount: 5,
//           rating: 4.8,
//           features: [
//             "UV protection",
//             "Stylish design",
//             "Polarized lenses"
//           ]
//         },
//         {
//           name: "Aviator Sunglasses",
//           price: 799,
//           discount: 30,
//           rating: 4.3,
//           features: [
//             "Metal frame",
//             "UV protection",
//             "Lightweight"
//           ]
//         }
//       ]
//     }
//   },
//   {
//     name: "Electronics",
//     img: "https://rukminim1.flixcart.com/fk-p-flap/320/170/image/6e66131320a2069c.jpg?q=90",
//     data: {
//       mobile_phones: [
//         {
//           name: "iPhone 13",
//           price: 69999,
//           discount: 5,
//           rating: 4.6,
//           features: [
//             "5G enabled",
//             "128 GB storage",
//             "12 MP camera"
//           ]
//         },
//         {
//           name: "Samsung Galaxy S21",
//           price: 74999,
//           discount: 10,
//           rating: 4.5,
//           features: [
//             "8 GB RAM",
//             "5G enabled",
//             "108 MP camera"
//           ]
//         }
//       ],
//       laptops: [
//         {
//           name: "Dell XPS 13",
//           price: 129999,
//           discount: 15,
//           rating: 4.7,
//           features: [
//             "Intel i7 processor",
//             "16 GB RAM",
//             "512 GB SSD"
//           ]
//         },
//         {
//           name: "HP Spectre x360",
//           price: 109999,
//           discount: 10,
//           rating: 4.6,
//           features: [
//             "Intel i7 processor",
//             "16 GB RAM",
//             "Convertible design"
//           ]
//         }
//       ]
//     }
//   },
//   {
//     name: "Groceries",
//     img: "https://rukminim1.flixcart.com/fk-p-flap/320/170/image/5b4d4e9118e0c6a1.jpg?q=20",
//     data: {
//       vegetables: [
//         {
//           name: "Organic Tomatoes",
//           price: 100,
//           discount: 10,
//           rating: 4.3,
//           features: [
//             "Fresh",
//             "Organic",
//             "Pack of 500g"
//           ]
//         },
//         {
//           name: "Fresh Carrots",
//           price: 80,
//           discount: 5,
//           rating: 4.5,
//           features: [
//             "Fresh",
//             "Pack of 1 kg",
//             "High in vitamins"
//           ]
//         }
//       ],
//       fruits: [
//         {
//           name: "Bananas",
//           price: 60,
//           discount: 15,
//           rating: 4.6,
//           features: [
//             "Fresh",
//             "Pack of 6",
//             "Rich in potassium"
//           ]
//         },
//         {
//           name: "Apples",
//           price: 120,
//           discount: 10,
//           rating: 4.4,
//           features: [
//             "Fresh",
//             "Pack of 4",
//             "Imported"
//           ]
//         }
//       ],
//       snacks: [
//         {
//           name: "Lay's Potato Chips",
//           price: 30,
//           discount: 5,
//           rating: 4.2,
//           features: [
//             "Crispy",
//             "Salted flavor",
//             "Pack of 100g"
//           ]
//         },
//         {
//           name: "Britannia Biscuits",
//           price: 50,
//           discount: 20,
//           rating: 4.5,
//           features: [
//             "Crunchy",
//             "Pack of 200g",
//             "Rich in taste"
//           ]
//         }
//       ]
//     }
//   }
// ];

// export default category_list;
