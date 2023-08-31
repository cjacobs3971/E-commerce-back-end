// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag, // Specify the intermediary model
  foreignKey: 'product_id', // Specify the foreign key in the ProductTag model
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag, // Specify the intermediary model
  foreignKey: 'tag_id', // Specify the foreign key in the ProductTag model
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

