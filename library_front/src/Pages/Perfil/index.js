import React, { useEffect, useState } from 'react';
import { Background, Center, BooksList } from './Style';
import { rentedUserBooks } from '../../Services/Axios/bookService';
import Book from '../../Components/Book';


const Perfil = () => {
    const [token] = useState(sessionStorage.getItem('app-token'))
    const [books, setBooks] = useState([]);

    const resBooks = async () => {
        await rentedUserBooks(sessionStorage.getItem('app-userID'))
          .then((response) => setBooks(response?.data));
      };

    useEffect(() => {
        resBooks();
    }, [token]);

      const listBooks = () => {
        if (books.length > 0) {
            books.map((book) =>
                <Book
                    title={book.title}
                    author={book.author}
                    release_year={book.release_year}
                    renter={book.renter}
                    id={book.id}
                    is_rented={book.is_rented}
                    messageAlert={"Livro alugado com sucesso"}
                    messageTernario={"Alugar livro"}
                />
            )
        }
    };

return(
    <Background>
            <h1>
                Meus livros alugados
            </h1>
        <Center>
            <BooksList>
                {listBooks}
            </BooksList>
        </Center>
    </Background>
    )
}

export default Perfil;