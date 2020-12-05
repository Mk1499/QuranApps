import gql from 'graphql-tag';

export const addAuthor = gql`
    mutation addAuthor($name:String!,$age:Int!,$bio:String,$avatarURL:String){
        addAuthor(name: $name, age: $age, bio: $bio, avatarURL : $avatarURL){
            name
          }
    }
`;