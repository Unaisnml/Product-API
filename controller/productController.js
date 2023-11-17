const Product = require('../models/productSchema')

exports.createProduct = async (req, res) => {
    try {
        const { name, category, imageUrl, description } = req.body;
        console.log(req.body);
        if (!name || !category || !imageUrl || !description) {
            res.status(400).json({
                message: "Missing Required field"
            })
        }
        const newProduct = await Product.create({ name, category, imageUrl, description });
        console.log("newProduct: ", newProduct);
        res.status(201).json({ message: 'Product created successfully', product_id: newProduct._id });
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
}

exports.fetchProduct = async (req, res) => {
    try {
        const productId = req.params.productId;
        const product = await Product.findById(productId);
        if (!product) {
            res.status(404).json({ message: "Product not found" })
        }
        res.json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.filterProducts = async (req, res) => {
    try {
        const { page = 1, pageSize = 10, productName, category } = req.query;
  const skip = (page - 1) * pageSize;

  const filter = {};
  if (productName) {
    filter.name = new RegExp(productName, 'i'); 
  }
  if (category) {
    filter.category = new RegExp(category, 'i');
  }

  const products = await Product.find(filter)
      .skip(skip)
      .limit(Number(pageSize));

    res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const productId = req.params.productId;
        const deletedProduct = await Product.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


