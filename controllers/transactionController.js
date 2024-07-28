const Transaction = require('../models/transactionModel');

// Get all transactions
const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new transaction
const createTransaction = async (req, res) => {
  const { date, description, credit, debit, total } = req.body;

    // Basic validation
    if (!date || !description || credit < 0 || debit < 0) {
      return res.status(400).json({ message: 'Invalid data: All fields are required and amounts must be non-negative' });
    }

  const newTransaction = new Transaction({
    date,
    description,
    credit,
    debit,
    total
  });

  try {
    const savedTransaction = await newTransaction.save();
    res.status(201).json(savedTransaction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getTransactions,
  createTransaction
};
