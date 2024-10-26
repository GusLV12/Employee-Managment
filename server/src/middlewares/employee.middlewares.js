import { pool } from "../db/db.js";

export const createEmployee = async (req, res) => {
  const { name, ageOld, country, position, age} = req.body;
  const query = `INSERT INTO employee (name, ageOld, country, position, age) VALUES (?, ?, ?, ?, ?, NOW())`;
  try {
    const [result] = await pool.query(query, [name, ageOld, country, position, age]);

    res.status(201).json({ message: 'Empleado creado', id: result.insertId });

  } catch (error) {
    console.error('Error al crear empleado: ', error);
    res.status(500).json({ message: 'Error al crear empleado' });
  }
  res.json({ message: 'Acceso a la ruta de creación de empleado' });
};
