import React, { memo, useEffect, useState } from "react";
import { request } from "graphql-request";

/* Querys */
import { ALL_TASK,ALL_PROGRAMADORES } from "../../querys/taskQuerys";
/* Components */
import Tasks from "./components/tasks";
import CreateTask from "./components/createTask";
import Spinner from '../../components/spinner'


const ENDPOINT = `${process.env.REACT_APP_8BASE}/${process.env.REACT_APP_8BASE_ID}`;

const index = memo(() => {

  const [data, setdata] = useState([]);
  const [programmers, setprogrammers] = useState([])
  const [Loading, setLoading] = useState(true);
  const [SendingData, setSendingData] = useState(false);


  useEffect(() => {
    request(ENDPOINT, ALL_TASK)
      .then((res) => {
        setdata(res.tasksList.items);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [SendingData]);

useEffect(() => {
  request(ENDPOINT, ALL_PROGRAMADORES)
      .then((res) => {
        setprogrammers(res);
      })
      .catch((error) => {
        console.log(error);
      });
}, []);

  return (
    <div className="container mt-4">
      <CreateTask programmers={programmers} ENDPOINT={ENDPOINT}  setSendingData={setSendingData} SendingData={SendingData}/>
      {!Loading ? (
        <div className="row justify-content-center mt-5">
          {data.length > 0 ? (
            data.map((res) => {
              return <Tasks programmers={programmers} ENDPOINT={ENDPOINT} setSendingData={setSendingData} SendingData={SendingData} key={res.id} data={res} />;
            })
          ) : (
            <h2> No existen tareas en la lista</h2>
          )}
        </div>
      ) : (
        <Spinner/>
      )}
    </div>
  );
});

export default index;

/*  setdata(
      <Query query={PRODUCTS_QUERY}>
        {({ loading, error, data }) => {
          console.log(data, error, loading);
          if (loading) return <div>CARGANDO</div>;
          if (error) return <div>ERROR CARGANDO DATOS</div>;
          const items = data.tasksList.items;
          return (
            <div className="row justify-content-center mt-5">
              {items.length > 0 ? (
                items.map((res) => {
                  return <Tasks key={res.id} data={res} />;
                })
              ) : (
                <h2> No existen tareas en la lista</h2>
              )}
            </div>
          );
        }}
      </Query>
    ); */
