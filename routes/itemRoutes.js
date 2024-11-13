// routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET semua item
router.get('/', async (req, res) => {
  try {
    const items = await prisma.item.findMany();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET item berdasarkan ID
router.get('/:id', async (req, res) => {
  try {
    const item = await prisma.item.findUnique({ where: { id: parseInt(req.params.id) } });
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: 'Item tidak ditemukan' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST buat item baru
router.post('/', async (req, res) => {
  try {
    const item = await prisma.item.create({
      data: {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
      },
    });
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PATCH memperbarui item
router.patch('/:id', async (req, res) => {
  try {
    const item = await prisma.item.update({
      where: { id: parseInt(req.params.id) },
      data: req.body,
    });
    res.json(item);
  } catch (err) {
    res.status(404).json({ message: 'Item tidak ditemukan atau tidak dapat diperbarui' });
  }
});

// DELETE menghapus item
router.delete('/:id', async (req, res) => {
  try {
    await prisma.item.delete({ where: { id: parseInt(req.params.id) } });
    res.json({ message: 'Item berhasil dihapus' });
  } catch (err) {
    res.status(404).json({ message: 'Item tidak ditemukan' });
  }
});

module.exports = router;
