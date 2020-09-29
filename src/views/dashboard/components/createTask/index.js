import React, { memo, useEffect, useState } from "react";
import { CREATE_TASK, UPDATE_TASK} from "../../../../querys/taskQuerys";
import { request } from "graphql-request";

import "./task.scss";
const initialValues = {
  nombre: "",
  programadores: "",
  descripcion: "",
};

const index = memo(({ data,editButton, SendingData, setSendingData, ENDPOINT,programmers }) => {

  const [programadores, setprogramadores] = useState(null);
  const [values, setvalues] = useState(initialValues);

  useEffect(() => {
   
    if(Object.keys(programmers).length>0){
      if(data){
        setvalues({
          nombre: data.nombre,
          programadores: data.programadores.id,
          descripcion: data.descripcion,
        })
      }
      setprogramadores(
        programmers.programadoresList.items.map((res) => {
          return (
            <option key={res.id} value={res.id}>
              {res.nombre}
            </option>
          );
        }) 
      )
    }
   // eslint-disable-next-line
  }, [programmers]);


  const crearTarea = (e) => {
    e.preventDefault();
      if (
        values.nombre.trim() !== "" &&
        values.descripcion.trim() !== "" &&
        values.programadores.trim() !== ""
      ) {
        if(data){
          let newValues={...values,id:data.id}
          request(ENDPOINT, UPDATE_TASK, newValues)
          .then(_ => {
            setSendingData(!SendingData);
            alert("Se a actualizado una tarea correctamente");
            document.getElementById(`${editButton}`).click()
          })
          .catch((error) => {
            console.log(error);
          });
        }else{
          request(ENDPOINT, CREATE_TASK, values)
          .then(_ => {
            setSendingData(!SendingData);
            setvalues(initialValues);
            alert("Se a creado una tarea correctamente");
          })
          .catch((error) => {
            console.log(error);
          });
        }
        
      } else {
        alert("Complete todos los campos");
      }
    

    
  };

  const HandleChange = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
  };

if(Object.keys(programmers).length===0) return null
  return (
    <form className={`${data? '' : "card"}`}>
      {data ? null : (
        <div className="card-header">
          <h4>Agrega Una tarea</h4>
        </div>
      )}

      <div className="card-body">
        <div className="row ">
          <div className="col-6">
            <div className="form-group">
              <label>Nombre de la tarea</label>
              <input
              value={values.nombre}
                type="text"
                className="form-control"
                name="nombre"
                onChange={(e) => HandleChange(e)}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label>Asigne un programador</label>
              <select
                value={values.programadores}
                onChange={(e) => HandleChange(e)}
                name="programadores"
                className="form-control"
              >
                <option value="">---Seleccione un programador---</option>
                {programadores}
              </select>
            </div>
          </div>

          <div className="col-12">
            <label>Descripcion de la tarea</label>
            <textarea
             value={values.descripcion}
              onChange={(e) => HandleChange(e)}
              className="form-control"
              name="descripcion"
              rows="3"
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-dark mt-2"
          onClick={(e) => crearTarea(e)}
        >
          Submit
        </button>
      </div>
    </form>
  );
});

export default index;
