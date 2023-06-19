import Logo from "../Logo"
import styled from "styled-components"

const HeaderContainer = styled.header`
  background-color: #FFFFFFFF;
  display: flex;
  justify-content: center;

`
function Header(){
    return(
        <HeaderContainer>
            <Logo />
        </HeaderContainer>
    )
}

export default Header