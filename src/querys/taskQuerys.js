
import gql from "graphql-tag";
/* Query que obtiene todas las task */
const ALL_TASK = gql`
  query {
    tasksList {
      items {
        id
        createdAt
        nombre
        descripcion
        culminada
        programadores {
          id
        	nombre
        }
      }
    }
  }
`;
/* Query que obtiene una lista de los programadores */
const ALL_PROGRAMADORES = gql`
  query{
  programadoresList {
      items {
        id
        createdAt
        nombre
      }
    }
}
`;
/* Query que crea una task */
const CREATE_TASK= gql`
 mutation taskCreate($nombre: String!,$descripcion: String!,$programadores:  ID!) {
  taskCreate(data:{
     nombre: $nombre, 
     descripcion: $descripcion,
     culminada:false,
     programadores:{
      connect:{
        id: $programadores 
      }
    }
     }) 
        {
            id
        }
    }
`;
/* Query que actualiza una task */
const UPDATE_TASK=gql`
mutation taskUpdate($id: ID!, $nombre: String!,$descripcion: String!,$programadores:  ID!) {
  taskUpdate(data:{
     id:$id,
     nombre: $nombre, 
     descripcion: $descripcion,
     culminada:false,
     programadores:{
      connect:{
        id: $programadores 
      }
    }
     }) 
        {
            id
        }
    }
`
/* Query que actualiza el estado de una task */
const UPDATE_STATE=gql`
mutation taskUpdate($id: ID!,$culminada:Boolean!) {
  taskUpdate(data:{
     id:$id,
     culminada:$culminada,
     }) 
        {
            id
        }
    }
`
/* Query que elimina la task */
const DELETE_TASK= gql`
 mutation taskDelete($id: ID!) {
  taskDelete(data:{
     id: $id, 
     }) 
        {
            success
        }
    }
`;

export {ALL_TASK,ALL_PROGRAMADORES,CREATE_TASK,UPDATE_TASK,DELETE_TASK,UPDATE_STATE}