const products=[
    {"id": 0,
    "name":"Kona",
    "origin":"Hawai",
    "taste":"Hierbas dulces y florales, con matices de frutos secos.",
    "price":800,
    "imagen":"https://cdn.shopify.com/s/files/1/0263/4471/8394/products/Kona_Extra_FancyVelvetBlueBagNewLabel_645f380b-577d-49be-9870-09531be8fd01_1024x1024.png?v=1615723150",
    "stock": 10},
    
    {"id": 1,
        "name":"Blue Mountain",
        "origin":"Jamaica",
        "taste":"Hierbas dulces y florales, con matices de frutos secos.",
        "price":870,
        "imagen":"https://m.media-amazon.com/images/I/71gmxuqAwrL._SY879_.jpg",
        "Stock": "Sin stock"},
    
    {"id": 2,
        "name":"Kenia AA",
        "origin":"Kenia",
        "taste":"notas de fruta dulce, una acidez vitivinícola y un cuerpo almibarado.",
        "price":650,
        "imagen":"https://m.media-amazon.com/images/I/61q9p3J2i7L._SL1114_.jpg",
        "stock": 6
        },
    {"id": 3,
        "name":"Guisante de Tanzania",
        "origin":"Tanzania",
        "taste":"una acidez más brillante, cuerpo medio y notas de azúcar moreno y sutiles notas frutales",
        "price":1200,
        "imagen":"https://cafemalist.com/wp-content/uploads/2020/03/Tanzanian-benas-228x300.png",
        "stock": 9
        },
    {"id": 4,
        "name":"Sumatra Asados Oscuros de Indonesia",
        "origin":"Sumatra,Indonesia",
        "taste":"menor acidez con un cuerpo dulce y suave",
        "price":620,
        "imagen":"https://media.diariouno.com.ar/p/adc1e82f8868aa57e463975458629302/adjuntos/298/imagenes/008/819/0008819352/1200x0/smart/granos-sumatra-asados-oscuros-de-indonesiajpg.jpg",
        "stock": 3
        },
    {"id": 5,
        "name":"Sulawesi Toraja de Indonesia",
        "origin":"Sulawesi, Indonesia",
        "taste":"muy dulce y complejo, con baja acidez, cuerpo completo y algunas notas terrosas y herbales..",
        "price":670,
        "imagen":"https://www.lajoyadelcafe.com/wp-content/uploads/2018/05/caf%C3%A9-de-sulawesi8.jpg",
        "stock": 5
        },
    {"id": 6,
        "name":"Geisha Centroamericanos",
        "origin":"América Central",
        "taste":"cuerpo similar al té natural, sabores brillantes como cítricos, mango, durazno y jazmín",
        "price":545,
        "imagen":"https://media.diariouno.com.ar/p/d9d668c4935d3a2dee8b2c531d7b2d94/adjuntos/298/imagenes/008/819/0008819360/1200x900/smart/granos-de-cafe-geisha-centroamericanosjpg.jpg",
        "stock": 17
        }
    ]

    export const getProductos = ()=>{
        return new Promise (resolve =>{
            setTimeout(()=>{
                resolve(products)
            },2000)
        })
    }

    export const getProductosById =(id)=>{
        return new Promise (resolve =>{
            setTimeout(()=>{
                resolve(products.find(prod => prod.id === id))
            },2000)
        })
    }