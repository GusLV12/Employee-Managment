import { pool } from "../db/db.js";

export const createEmployee = async (req, res) => {
  const { name, ageOld, country, position, age } = req.body;
  
  // Corregir la consulta SQL
  const query = `INSERT INTO employee (name, ageOld, country, position, age, hire_date) VALUES (?, ?, ?, ?, ?, NOW())`;
  
  try {
    const [result] = await pool.query(query, [name, ageOld, country, position, age]);

    // Devolver el ID del empleado insertado
    res.status(201).json({ message: 'Empleado creado', id: result.insertId });
  } catch (error) {
    console.error('Error al crear empleado: ', error);
    res.status(500).json({ message: 'Error al crear empleado' });
  }
};


export const showEmployees = (req, res) => {
  res.status(201).json({message: "Mostrar empleados"});
}