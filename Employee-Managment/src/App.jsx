import { useState } from "react";

const fields = {
  name: '',
  ageOld: '',
  country: '',
  position: '',
  age: ''
};

export const App = () => {
  const [dataForm, setdataForm] = useState(fields);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdataForm({
      ...dataForm,
      [name]: value
    });
    console.log('data: ', dataForm);
  };

  const handleRequestData = () => {
    console.log('Datos enviados: ', dataForm);
  };

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
    </div>
  );
};
