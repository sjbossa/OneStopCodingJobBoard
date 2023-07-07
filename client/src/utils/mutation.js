import { gql } from '@apollo-client'
export const ADD_USER=gql`
mutation createUser($name:String!, $isCompany:Boolean!, $password:String!, $email:String!) {
    createUser(name:$name, isCompany:$isCompany, password:$password, email:$email){
        token
        profile{
            _id
             isCompany
             name
             email
        } 
    }   
}`;
export const LOGIN_USER=gql`
mutation login($email:string!, $password:string!){
    login(email:$email, password:$password){
        token
        profile{
         _id
        isCompany
        name
    }
}
}`;
export const CREATE_JOB=gql`
mutation createJob($title:string!, $description:string!){
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
