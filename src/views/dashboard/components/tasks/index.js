import React, { memo, useState } from "react";
import "./task.scss";
import { DELETE_TASK,UPDATE_STATE } from "../../../../querys/taskQuerys";
import { request } from "graphql-request";
import CreateTask from '../createTask'


const index = memo(({ data, setSendingData, SendingData, ENDPOINT,programmers }) => {

  const [dataToUpdate/* , setdataToUpdate */] = useState(data);

  const [cambiandoEstado , setcambiandoEstado] = useState(false);
  const updateState = () => {
    setcambiandoEstado(true)
    request(ENDPOINT, UPDATE_STATE, { id: data.id,culminada:!data.culminada })
      .then(_ => {
        setSendingData(!SendingData);
        setcambiandoEstado(false)
      })
      .catch((error) => {
        console.log(error);
        setcambiandoEstado(false)
      });
  };

  const borrarTarea = (id) => {
    request(ENDPOINT, DELETE_TASK, { id: id })
      .then(__filename => {
        setSendingData(!SendingData);
        alert("Se a Borrado una tarea correctamente");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card m-2">
      <div className="card-header">
        <div className="row justify-content-between">
          <span>{data.nombre}</span>

          <i
            onClick={(_) => borrarTarea(data.id)}
            style={{ cursor: "pointer" }}
            className="fas fa-trash"
          ></i>
        </div>
      </div>
      <div className="card-body">
        <div className="row justify-content-end">
          {" "}
          <i
            style={{ cursor: "pointer" }}
            data-toggle="modal"
            data-target={`#${data.id}_modal`}
            className="fas fa-edit"
            id={`${data.id}_editButton`}
          ></i>
        </div>

        <h5 className="card-title">
          {Object.keys(data.programadores).length > 0
            ? `${data.programadores.nombre} a sido asignado a esta tarea`
            : "Esta tarea no ha sido asignada"}
        </h5>
        <p className="card-text ">{data.descripcion} </p>
        <div className="status">
          {data.culminada ? (
            <>
              <div className="circle finish"></div> Culminada
            </>
          ) : (
            <>
              <div className="circle not_finish"></div> Sin Culminar
            </>
          )}
          {cambiandoEstado? 
          <div className="spinner-grow" style={{width: "1.2rem",height: "1.2rem"}} role="status">
          <span className="sr-only">Loading...</span>
        </div>
          :
          <div className="custom-control custom-switch cabra" style={{ cursor: "pointer" }} onClick={_=>updateState()}>
            <input
              type="checkbox"
              className="custom-control-input"
              id={`${data.id}_toggle_input`}
              checked={data.culminada}
            />
            <label className="custom-control-label" htmlFor={`${data.id}_toggle_input`}></label>
          </div>
          }
          
        </div>
      </div>

      {/* MODAL  */}
      <div
        className="modal fade"
        id={`${data.id}_modal`}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Editing {dataToUpdate.nombre}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
              <div className="modal-body">
              <CreateTask editButton={`${data.id}_editButton`} programmers={programmers}  data={data} ENDPOINT={ENDPOINT} setSendingData={setSendingData} SendingData={SendingData}/>
              </div>
           
          </div>
        </div>
      </div>
    {/* MODAL ENDING */}
    </div>
  );
});

export default index;
