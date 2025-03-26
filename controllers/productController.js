const Category = require('../models/category');
const Product = require('../models/product');
const ProductImage = require('../models/productImage');

const getAllProducts = async (request, response , next) =>{
        try{
            const products = await Product.findAll({
                where: {
                    isDeleted: 0
                },
                include:[{
                    model:Category,
                    required:false,
                    as:'categories',
                    through: {attributes:[]}               
              }],
            })
            // response.render('products/allProducts', {products});
            response.json(products);
            response.end();
        }catch(e){
            next({status:404 , message: 'Error -> ' +  e});
        }
}

const getProductById = async(request , response , next) => {
    try{
        const {id} = request.query;
        const productId = parseInt(id);
        if(!Number.isNaN(productId)){
            const product = await Product.findOne({
                attributes:['id' , 'price' , 'name' , 'description' , 'quantity'],
                where:{
                    id: productId,
                    isDeleted: 0
                },
                include:[{
                   model:ProductImage,
                   required:false ,
                   as:'images'
                },
                {
                   model:Category,
                   required:false,
                   as:'categories',
                   through: {attributes:[]}
                }]
            });
            console.log(product);
            if(!product){
               console.log("hiii");   
               next({status:404 , message:'Product not found'});
            }
            else{
                 // response.render('products/product' , {product});
                 response.json(product);
                 response.end();
            }
        }
        

    }catch(e){
        next({status:404 , message:'Product not found'});
    }
}


module.exports = {
    getAllProducts,
    getProductById
}