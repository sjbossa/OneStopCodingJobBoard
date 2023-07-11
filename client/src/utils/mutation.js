import { gql } from '@apollo/client'
export const ADD_USER=gql`
mutation addUser($username:String!,  $password:String!, $email:String!) {
    addUser(username:$username,  password:$password, email:$email){
        token
        user{
            _id
            username
        } 
    }   
}`;
export const LOGIN_USER=gql`
mutation login($email:String!, $password:String!){
    login(email:$email, password:$password){
        token
        user{
            _id
            username
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
        username
        email
    }
}`;
