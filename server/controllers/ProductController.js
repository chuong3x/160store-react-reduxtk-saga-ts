
import { ProductModel } from '../models/ProductModel.js';

export const getProducts = async (req, res) => {
  const query = req.query;
  try {
    const products = await ProductModel.find({"name" : new RegExp(query._filter, 'i') });
    console.log(query._filter,products)
    res.status(200).json({data: products});
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createProduct = async (req, res) => {
  try {
    const newProduct = req.body;
    const product = new ProductModel(newProduct);
    await product.save();
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// export const updateProduct = async (req, res) => {
//   try {
//     const updateProduct = req.body;
//     const product = await ProductModel.findOneAndUpdate(
//       { _id: updateProduct._id },
//       updateProduct,
//       { new: true }
//     );
//     res.status(200).json(product);
//   } catch (err) {
//     res.status(500).json({ error: err });
//   }
// };

export const updateProduct = async (req, res) => {
  try {
    const products = await ProductModel.updateMany({},  {$set:{"create_at": "sale"}});

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};



export const getProductDetail = async (req, res) => {
  const name = req.params.slug;
  try {
    const product = await ProductModel.findOne({name : name });
    res.status(200).json({data: product});
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getCollection = async (req, res) => {
  const {slug} = req.params;
  const {query} = req

  try {
    const products = await ProductModel.find({collection_name : slug }).setOptions({ limit: Number(query.limit)});
    res.status(200).json({data: products});
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getNewCollection = async (req, res) => {
  const {slug} = req.params;
  const { query } = req;
  try {
    const products = await ProductModel.find({ }).sort({[query.sort]: -1}).limit(Number(query.limit))
    
    res.status(200).json({data: products});

  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// export const getYearEndCollection = async (req, res) => {
//   const {slug, query} = req.params;
//   try {
//     const products = await ProductModel.find({category : name });
//     res.status(200).json({products});
//   } catch (err) {
//     res.status(500).json({ error: err });
//   }
// };

// export const getSaleCollection = async (req, res) => {
//   const {slug, query} = req.params;
//   try {
//     const products = await ProductModel.find({category : name });
//     res.status(200).json({products});
//   } catch (err) {
//     res.status(500).json({ error: err });
//   }
// };

export const createCollection = async (req, res) => {
  const name = req.params.slug;
  try {
    const products = await ProductModel.find({category : name });
    console.log(products)
    res.status(200).json({products});
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateCollection = async (req, res) => {
  const name = req.params.slug;
  try {
    const products = await ProductModel.find({category : name });
    console.log(products)
    res.status(200).json({products});
  } catch (err) {
    res.status(500).json({ error: err });
  }
};