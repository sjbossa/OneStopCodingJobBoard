import { gql } from '@apollo/client'
export const ADD_USER=gql`
mutation createUser($name:String!,  $password:String!, $email:String!) {
    createUser(name:$name,  password:$password, email:$email){
        token
        user{
            _id
            name
        } 
    }   
}`;
export const LOGIN_USER=gql`
mutation login($email:String!, $password:String!){
    login(email:$email, password:$password){
        token
        profile{
            _id
            name
         }
     }
 }
`;
export const CREATE_JOB=gql`
mutation createJob($title:String!, $description:String!){
    createJob(title:$title, description:$description){
        _id
        title
        description
    }
}`;
export const DELETE_JOB=gql`
mutation deleteJob($id:ID!){
    deleteJob(id:$id){
        _id
        title
        description
    }
}`;
export const DELETE_USER=gql`
mutation deleteUser($id:ID!){
    deleteUser(id:$id){
        _id
        name
        email
    }
}`;
