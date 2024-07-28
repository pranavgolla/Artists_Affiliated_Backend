const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  date: { type: String, required: true },
  description: { type: String, required: true },
  credit: { type: Number, required: true },
  debit: { type: Number, required: true },
  total: { type: Number, required: true }
});

module.exports = mongoose.model('Transaction', transactionSchema);
