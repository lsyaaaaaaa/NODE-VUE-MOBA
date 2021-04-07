const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String },
  //分类关联
  parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' },
})

module.exports = mongoose.model('Category', schema)