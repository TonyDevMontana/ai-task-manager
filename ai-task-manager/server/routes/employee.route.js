const express = require('express');
const { createEmpl } = require('../controllers/employee.controller');

const router = express.Router();

router.post('/create-emp', async (req, res) => {
  return await createEmpl(req, res);
});

module.exports = router;
