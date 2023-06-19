import styled from 'styled-components';
import logo from '../../images/logo.svg'
import Menu from '../Menu';

const LogoContainer = styled.div`
    display: flex;
    align-items: center; /* Alinha verticalmente os itens ao centro */
    font-size: 1.5em;
    margin-left: 1rem;
`

const LogoImage = styled.img`
    margin-right: 0.5em;
    vertical-align: middle; /* Alinha verticalmente a imagem ao centro */
`

function Logo() {
    return (
      <LogoContainer>
        <LogoImage
            src={logo}
            alt='logo'
            className='logo-image'
        />
        <p><strong>Trivinho</strong>Books</p>
        <Menu />
      </LogoContainer>
    )
}

export default Logo;