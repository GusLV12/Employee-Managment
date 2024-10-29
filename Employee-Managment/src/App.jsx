import { useState } from "react";
import {useRequest} from './customHooks/useRequest';
import {Employee} from './endpoints/employees/employees';

const fields = {
  name: '',
  ageOld: '',
  country: '',
  position: '',
  age: ''
};

export const App = () => {
  const [dataForm, setdataForm] = useState(fields);
  // Llamando a la función useRequest
  const {data, error, loading, makeRequest} = useRequest(Employee.createEmployee);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdataForm({
      ...dataForm,
      [name]: name === 'age' || name === 'ageOld' ? parseInt(value) || '' : value
    });
  };  

  const handleRequestData = async () => {
    try {
      await makeRequest({ body: dataForm });
      console.log('Accion de handleRequestData');
    } catch (error) {
      console.log("Error al guardar datos: ", error);
    }

  };

  if (error) return <div>{error}</div>;
  if (loading) return <div>Cargando...</div>;

  return (
    <div className="app">
    <div className="datos">
      <label>Nombre: <input name="name" type="text" onChange={handleChange}/></label>
      <label>Edad: <input name="ageOld" type="text" onChange={handleChange}/></label>
      <label>Pais: <input name="country" type="text" onChange={handleChange}/></label>
      <label>Cargo: <input name="position" type="text" onChange={handleChange}/></label>
      <label>Años: <input name="age" type="number" onChange={handleChange}/></label>
      <button onClick={handleRequestData}>Guardar datos</button>
    </div>

    {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
};
