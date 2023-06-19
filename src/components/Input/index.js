/* eslint-disable jsx-a11y/alt-text */
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {books} from "./books";

const InputContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Input = styled.input`
  order: 1px solid #FFF;
  background: transparent;
  border: 1px solid #FFF;
  padding: 20px 40px 20px 40px;
  border-radius: 50px;
  width: 400px;
  color: #FFF;
  font-size: 16px;
  margin-bottom: 10px;

  &::placeholder {
    color: #FFF;
    font-size: 16px;
  }
`;

const SearchIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 45%;
  right: 1.5em;
  transform: translateY(-50%);
  color: #FFF;
  cursor: pointer;
`;

const ResultContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

const SearchInput = ({ placeholder }) => {
    const [searchedBooks, setSearchedBooks] = useState([])

    function removerAcentos(str){
        return str
          .toLowerCase()
          .replace(/[áàãâä]/g, 'a')
          .replace(/[éèêë]/g, 'e')
          .replace(/[íìîï]/g, 'i')
          .replace(/[óòõôö]/g, 'o')
          .replace(/[úùûü]/g, 'u')
          .replace(/ç/g, 'c');
      }

    return (
        <>
        <InputContainer>
          <Input
            placeholder={placeholder}
            onChange={(event) => {
                if(event.target.value.length > 3){
                    const typedBook = removerAcentos(event.target.value);
                    const result = books.filter((book) => {
                    const normalizedBookName = removerAcentos(book.name);
                    const normalizedAuthorName = removerAcentos(book.autor);
                    const normalizedTypedBook = removerAcentos(typedBook);
                    return (
                      normalizedBookName.includes(normalizedTypedBook) ||
                      normalizedAuthorName.includes(normalizedTypedBook) ||
                      String(book.id).includes(typedBook)
                    );
                  });
                  setSearchedBooks(result);
              }

            }}
          />
          <SearchIcon icon={faSearch} />
        </InputContainer>
        { searchedBooks.map( bookInfo => (
            <ResultContainer>
                <img src={bookInfo.src}/>
                <p>{bookInfo.name} - {bookInfo.autor}</p>
            </ResultContainer>
        )) }
      </>
    );
  };

  export default SearchInput;