/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getFavorites, deleteFavorite } from '../services/favorites';

import favoriteImg from '../images/livro.png';

const FavoritesContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
  overflow-x: auto;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Result = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  cursor: pointer;
  text-align: center;
  padding: 0 50px;
  p {
    width: 200px;
    color: #FFF;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

const Title = styled.h2`
  color: #FFF;
  font-size: 36px;
  text-align: center;
  width: 100%;
  padding-top: 35px;
`;

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  async function fetchFavorites() {
    const favoritesFromApi = await getFavorites();
    setFavorites(favoritesFromApi);
  }


  async function deleteFavorites(id){
    await deleteFavorite(id)
    await fetchFavorites()
    alert(`Livro de ID: ${id} Excluído`)
  }

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <FavoritesContainer>
      <div>
        <Title>Aqui estão seus livros favoritos:</Title>
        <ResultContainer>
          {favorites.length !== 0 ? favorites.map((favorite) => (
            <Result onClick={() => deleteFavorites(favorite.id)}>
              <p>{favorite.name} - {favorite.autor}</p>
              <img src={favoriteImg} alt="Livro" />
            </Result>
          )) : null}
        </ResultContainer>
      </div>
    </FavoritesContainer>
  );
}

export default Favorites;