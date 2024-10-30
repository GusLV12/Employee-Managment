import { useEffect, useState } from "react";
import { useRequest } from './customHooks/useRequest';
import { Employee } from './endpoints/employees/employees';
import 'bootstrap/dist/css/bootstrap.min.css';

const fields = {
  name: '',
  ageOld: '',
  country: '',
  position: '',
  age: ''
};

export const App = () => {
  const [dataForm, setdataForm] = useState(fields);
  const [listEmployees, setlistEmployees] = useState([]);
  const [editFiels, setEditFiels] = useState(false);
  
  const { data: dataShow, makeRequest: makeRequestShow } = useRequest(Employee.showEmployees);
  const { data: dataCreate, error: errorCreate, loading: loadingCreate, makeRequest: makeRequestCreate } = useRequest(Employee.createEmployee);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdataForm({
      ...dataForm,
      [name]: name === 'age' || name === 'ageOld' ? parseInt(value) || '' : value
    });
  };  

  const handleRequestData = async () => {
    try {
      await makeRequestCreate({ body: dataForm });
      console.log('Acción de handleRequestData');
    } catch (error) {
      console.log("Error al guardar datos: ", error);
    }
  };

  const handleRequestShow = async () => {
    await makeRequestShow();
  };

  const handleEditEmployee = (employee) => {
    setEditFiels(!editFiels);
    setdataForm(employee);
  };

  useEffect(() => {
    handleRequestShow();
  }, [dataCreate]);

  useEffect(() => {
    if (dataShow) setlistEmployees(dataShow);
  }, [dataShow]);

  if (errorCreate) return <div>Error: {errorCreate.message}</div>;
  if (loadingCreate) return <div>Cargando...</div>;

  return (
    <div className="container">
      <div className="card text-center mt-5">
        <div className="card-header">
          Gestión de Empleados
        </div>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input name="name" value={dataForm.name} type="text" className="form-control" onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Edad</label>
              <input name="ageOld" value={dataForm.ageOld} type="number" className="form-control" onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">País</label>
              <input name="country" value={dataForm.country} type="text" className="form-control" onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Cargo</label>
              <input name="position" value={dataForm.position} type="text" className="form-control" onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Años</label>
              <input name="age" value={dataForm.age} type="number" className="form-control" onChange={handleChange} />
            </div>
            {editFiels 
            ? (<>
                <button type="button" className="btn btn-success" onClick={handleRequestData}>Editar datos</button>
                <button type="button" className="btn btn-danger" onClick={handleRequestData}>Cancelar</button>
              </>)
            : <button type="button" className="btn btn-success" onClick={handleRequestData}>Guardar datos</button>
            }
          </form>
        </div>
      </div>

      {/* Mostrar lista de empleados */}
      <div className="mt-4">
        <h3>Lista de Empleados:</h3>
        <div className="row">
          {listEmployees.map((employee, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">{employee.name}</h5>
                  <p className="card-text">Edad: {employee.ageOld}</p>
                  <p className="card-text">País: {employee.country}</p>
                  <p className="card-text">Cargo: {employee.position}</p>
                  <p className="card-text">Años: {employee.age}</p>
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-success" onClick={() => handleEditEmployee(employee)}>
                      <i className="fas fa-edit"></i> Editar
                    </button>
                    <button className="btn btn-danger">
                      <i className="fas fa-trash-alt"></i> Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
