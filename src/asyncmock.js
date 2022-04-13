const products=[
    {"id": 0,
    "name":"Adegas Guímaro",
    "origin":"DO Ribeira Sacra",
    "price": 1500,
    "imagen":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/guimaro-1623767880.jpg?resize=640:*",
    "stock": 10},
    
    {"id": 1,
        "name":"Suertes del Marqués",
        "origin":"DO Valle de la Orotava",
        "price":1870,
        "imagen":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/las-suertes-1623767985.jpg?resize=640:*",
        "stock": "Sin stock"},
    
    {"id": 2,
        "name":"Jean Foillard",
        "origin":" Beaujolais, Francia",
        "price":2450,
        "imagen":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jean-foillard-morgon-1623768105.jpg?resize=640:*",
        "stock": 6
        },
    {"id": 3,
        "name":"Oxer Bastegieta",
        "origin":"DOCa Rioja",
        "price":2200,
        "imagen":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/suzzane-1623768155.jpg?resize=640:*",
        "stock": 9
        },
    {"id": 4,
        "name":"Cortijo los Aguilares",
        "origin":"Petit Verdo",
        "price":2620,
        "imagen":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tadeo-1623768240.jpg?resize=640:*",
        "stock": 3
        },
    {"id": 5,
        "name":"Descendientes de J. Palacios",
        "origin":"DO Bierzo",
        "price":3070,
        "imagen":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/corullon-1623768294.jpg?resize=640:*",
        "stock": 5
        },
    {"id": 6,
        "name":"Raúl Pérez",
        "origin":"vino del Bierzo",
        "price":3545,
        "imagen":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/valduerna-1623768366.jpg?resize=640:*",
        "stock": 17
        }
    ]

    export const getProductos = ()=>{
        return new Promise (resolve =>{
            setTimeout(()=>{
                resolve(products)
            },200)
        })
    }

    export const getProductosById =(id)=>{
        return new Promise (resolve =>{
            setTimeout(()=>{
                resolve(products.find(prod => prod.id == id))
            },200)
        })
    }