import gql from 'graphql-tag';

export const getUsers = gql`
    query{
        users{
            id
            name
            email
            password
            reads
        }
    }
`;