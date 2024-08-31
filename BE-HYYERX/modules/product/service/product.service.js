import productModel from "../model/product.model.js";

export const createProducts = async (req) => {
  const product = await productModel.create({
    ...req.body,
  });
  return product;
};

export const getAllProducts = async () => {
  const products = await productModel.find().populate("categoryId");
  return products;
};

export const getOneProducts = async (req) => {
  const product = await productModel.findById(req.params.id);
  return product;
};

export const getProductByCategorys = async (req, res) => {
  const categoryId = req.params.categoryId;
  if (categoryId) {
    const products = await productModel.findByCategory(categoryId);
    return products;
  } else {
    return res.status(200).json({ message: "Category parameter is required" });
  }
};
export const deleteProducts = async (req) => {
  const product = await productModel.findByIdAndDelete(req.params.id);
  return product;
};

export const updateProducts = async (req) => {
  const product = await productModel.updateOne(
    {
      _id: req.params.id,
    },
    {
      ...req.body,
    }
  );
  return product;
};
