
import gql from "graphql-tag";

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

/* const CREATE_USER = gql`
mutation programadoreCreate($nombre: String!) {
  programadoreCreate(data:{
    nombre: $nombre, 
    }) 
       {
           success
       }
   }
`; */



export {ALL_TASK,ALL_PROGRAMADORES,CREATE_TASK,UPDATE_TASK,DELETE_TASK,UPDATE_STATE}