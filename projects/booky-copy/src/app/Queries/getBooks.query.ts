import gql from 'graphql-tag';

export const getBooks = gql`
    query{
        books{
            id 
            name
            description
            posterURL
            author{
                id
                name
            }
          }
    }
`;