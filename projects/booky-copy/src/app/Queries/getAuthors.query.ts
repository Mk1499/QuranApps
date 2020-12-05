import gql from 'graphql-tag';

export const getAuthors = gql`
    query{
        authors{
            id 
            name
            avatarURL
          }
    }
`;