import { gql } from '@apollo/client'
export const QUERY_USER=gql`
    query singleUser ( $userId:String!) {
        user( userId:$userId){
            username
            email
            _id
        }
}`;

export const QUERY_JOB=gql`
    query singleJob ($jobId:ID!) {
        job(jobId:$jobId){
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

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;

