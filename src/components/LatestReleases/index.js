/* eslint-disable jsx-a11y/alt-text */

import { latestBooks } from "./latestBooks"
import styled from "styled-components"
import Title  from "../Title"
import RecommendCard from "../RecommendCard"
import bookImage from '../../images/livro2.png'

const LatestBooksContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`
const BookWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 30px;
`

const BookImage = styled.img`
    border-radius: 24px;
`

const BookName = styled.small`
    margin-top: 10px;
    color: #333;
    font-size: 14px;
    font-weight: bold;
`

const BookAutor = styled.small`
    margin-top: 3px;
    color: #333000;
    font-size: 12px;
    font-style: italic;
    font-weight: bold;
`


function LatestReleases(){
    return (
        <LatestBooksContainer>
            <Title
                color="#FF8436"
                text="ÚLTIMOS LANÇAMENTOS"
                textSize="38px"
                align="center"/>
            <NewBooksContainer>
                { latestBooks.map( book => (
                    <BookWrapper>
                        <BookImage src={book.src} />
                        <BookName>{book.name}</BookName>
                        <BookAutor>{book.autor}</BookAutor>
                    </BookWrapper>
                ) ) }
            </NewBooksContainer>
            <RecommendCard
                title="Talvez você se interesse por"
                subtitle="Angular 11"
                description="Construindo uma aplicação com a plataforma Google"
                img={bookImage}/>
        </LatestBooksContainer>
    )
}

export default LatestReleases