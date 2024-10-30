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

export const showEmployees = async (req, res) => {
  const query = `SELECT * FROM employee`;
  try {
    const [rows] = await pool.query(query);

    if(rows.length === 0){
      throw new Error('No hay empleados');
    }

    res.status(200).json(rows);

  } catch (error) {
    console.error('Error al mostrar empleados: ', error.message);
  }
}

export const updateEmployee = async (req, res) => {
  const { id, name, ageOld, country, position, age } = req.body;
  
  const query = `UPDATE employee SET name=?, ageOld=?, country=?, position=?, age=? WHERE id = ?`;
  
  try {
    const [result] = await pool.query(query, [name, ageOld, country, position, age, id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Empleado no encontrado' });
    }

    res.status(200).json({ message: 'Empleado actualizado', id });
  } catch (error) {
    console.error('Error al actualizar empleado: ', error);
    res.status(500).json({ message: 'Error al actualizar empleado' });
  }
};
