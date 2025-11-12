const Employee = require('../models/employee.model');

const createEmpl = async (req, res) => {
  try {
    const { username, email, skills } = req.body;
    const newEmployee = new Employee({
      username,
      email,
      skills,
    });

    await newEmployee.save();

    return res.json({
      message: 'Employee created successfully',
      employee: newEmployee,
    });
  } catch (error) {
    console.log('err', err);
    return res.json({ message: 'Internal Server Error' });
  }
};

module.exports = { createEmpl };
