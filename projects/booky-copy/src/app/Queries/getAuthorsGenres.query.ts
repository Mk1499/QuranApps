import gql from 'graphql-tag';

export const getAuthorsGenres = gql`
    query{
        authorsAndGenres{
            authors{
              id
              name
            }
            genres{
              id
              name
            }
          }
    }
`;