import SearchInput from "../Input"
import styled from 'styled-components'

const SearchContainer = styled.section`
        color: #FFF;
        text-align: center;
        padding: 60px 0px 385px 0;
        height: 270px;
        width: 100%;
`

const Title = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`

const Subtitle = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`

function Search(){
    return (
        <SearchContainer>
            <Title>Já sabe por onde começar?</Title>
            <Subtitle>Encontre seu livro em nossa estante.</Subtitle>
            <SearchInput placeholder='Escreva sua próxima leitura...'/>
        </SearchContainer>
    )
}

export default Search