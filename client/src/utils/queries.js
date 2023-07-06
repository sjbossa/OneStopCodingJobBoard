import { gql } from '@apollo-client'
export const QUERY_USER=gql`
    query singleUser ($isCompany:Boolean!, $name:String!) {
        user(isCompany:$isCompany, name:$name){
            name
            email
            _id
        }
}`;

export const QUERY_JOB=gql`
    query singleJob ($_id:ID!) {
        job(_id:$_id){
            _id
            title
            description
        }
}`;

export const QUERY_JOBS=gql`
query Jobs {
  jobs {
    _id
    description
    title
  }
}`;