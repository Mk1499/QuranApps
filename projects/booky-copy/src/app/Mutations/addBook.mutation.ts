import gql from 'graphql-tag';

export const addBook = gql`
    mutation addBook(
        $name:String!,
        $genreID:String!,
        $authorID:ID!,
        $description:String!,
        $releaseDate:String,
        $posterURL:String,
        $buyURL:String,
        $downloadURL:String,
        $rate:Int,
        $readURL:String!){
        addBook(name: $name,
                genreID: $genreID,
                description: $description,
                posterURL : $posterURL,
                authorID:$authorID,
                releaseDate:$releaseDate,
                buyURL:$buyURL,
                downloadURL:$downloadURL,
                rate:$rate, 
                readURL:$readURL){
            name
          }
    }
`;