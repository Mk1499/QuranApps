import gql from 'graphql-tag';

export const getGenres = gql`
    query{
        genres{
            id
            name
            photoURL
        }
    }
`;