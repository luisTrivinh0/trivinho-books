import styled from "styled-components";

const TitleContainer = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${props => props.color || '#EB9B00'};
    font-size: ${props => props.textSize || '36px'};
    text-align: ${props => props.align || 'center'};
    margin: 0;
`

function Title({ text, color, textSize, align }){
    return (
        <TitleContainer
            color={color}
            textSize={textSize}
            align={align}>{text}</TitleContainer>
    )
}

export default Title;