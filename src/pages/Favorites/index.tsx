import Navbar from "../../components/Navbar";
import * as S from "./styles";
import { useFavorites } from "../../contexts/FavoritesContext";
import { useNavigate } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import CheckeredBorder from "../../components/CheckeredBorder";
import ProductCard from "../../components/ProductCard";
import RoundButton from "../../components/RoundButton";
import RetantugarButton from "../../components/RetangularButton";

const Favorites = () => {
  const { favorites, removeFromFavorites } = useFavorites();
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <S.FavoritesContainer>
        <S.FavoritesContent>
          <S.FavoritesHeader>
            <S.FavoritesTitle>Meus Favoritos</S.FavoritesTitle>
            <S.FavoritesSubtitle>
              Veja aqui os produtos que você marcou como favorito!
            </S.FavoritesSubtitle>
          </S.FavoritesHeader>
          {favorites.length === 0 ? (
            <S.EmptyFavorites>
              <S.EmptyFavoritesIcon>
                <FiHeart />
              </S.EmptyFavoritesIcon>
              <S.EmptyFavoritesText>
                Nenhum favorito ainda!
              </S.EmptyFavoritesText>
              <S.EmptyFavoritesSubtext>
                Adicione produtos aos favoritos para vê-los aqui.
              </S.EmptyFavoritesSubtext>
              <RoundButton color="coral" onClick={() => navigate("/")}>
                Ir às Compras
              </RoundButton>
            </S.EmptyFavorites>
          ) : (
            <S.FavoritesGrid>
              {favorites.map((item) => (
                <ProductCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                >
                  <S.RemoveFavoriteButton
                    title="Remover dos favoritos"
                    onClick={() => removeFromFavorites(item.id)}
                  >
                    <FiHeart fill="#FF6B5E" />
                  </S.RemoveFavoriteButton>

                  <RetantugarButton
                    variant="outline"
                    onClick={() => navigate(`/product/${item.id}`)}
                  >
                    Ver Produto
                  </RetantugarButton>
                </ProductCard>
              ))}
            </S.FavoritesGrid>
          )}
        </S.FavoritesContent>
        <CheckeredBorder />
      </S.FavoritesContainer>
    </>
  );
};

export default Favorites;
