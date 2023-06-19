/* eslint-disable jsx-a11y/alt-text */
import user from '../../images/perfil.svg'
import bag from '../../images/sacola.svg'
import styled from 'styled-components'

const MenuContainer = styled.div`
    display: flex;
`

const OptionsContainer = styled.ul`
    display: flex;
`

const Option = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

const IconsContainer = styled.ul`
    display: flex;
    align-items: center;
`

const Icon = styled.li`
    margin-right: 40px;
    cursor: pointer;
    width: 25px;
`

const optionTexts = ['Categorias', 'Favoritos', 'Minha Estante']
const menuIicons = [user, bag]

function Menu(){
    return(
        <MenuContainer>
            <OptionsContainer>
              {optionTexts.map( (text) => (
                <Option><p>{text}</p></Option>
              ))}
            </OptionsContainer>
            <IconsContainer>
              {menuIicons.map( (icon) => (
                <Icon><img src={icon} alt='Icon'></img></Icon>
              ))}
            </IconsContainer>
        </MenuContainer>


    )
}

export default Menu