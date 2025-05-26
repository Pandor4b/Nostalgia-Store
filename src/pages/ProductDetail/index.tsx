import Navbar from "../../components/Navbar";
import * as S from "./styles";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../services/productsApi";
import { useCart } from "../../hooks/useCart";
import { useFavorites } from "../../contexts/FavoritesContext";
import Modal from "../../components/Modal";
import { useNavigate } from "react-router-dom";
import CheckeredBorder from "../../components/CheckeredBorder";
import { FiHeart } from "react-icons/fi";
import RoundButton from "../../components/RoundButton";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { addToCart, showModal, setShowModal, lastAddedItem } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  useEffect(() => {
    if (id) {
      fetchProductById(id).then((data) => {
        setProduct(data);
        setLoading(false);
      });
    }
  }, [id]);

  const handleFavorite = () => {
    if (!product) return;

    const favorite = {
      id: Number(product.id),
      name: product.name,
      price: product.price,
      image: product.image,
    };

    if (isFavorite(Number(product.id))) {
      removeFromFavorites(Number(product.id));
    } else {
      addToFavorites(favorite);
    }
  };

  if (loading)
    return (
      <div>
        <Navbar />
        <S.ProductDetailContainer>
          Carregando produto...
        </S.ProductDetailContainer>
      </div>
    );
  if (!product)
    return (
      <div>
        <Navbar />
        <S.ProductDetailContainer>
          Produto não encontrado.
        </S.ProductDetailContainer>
      </div>
    );

  return (
    <div>
      <Navbar />
      <S.ProductDetailContainer>
        <S.ProductDetailContent>
          <S.ProductImageSection>
            <S.MainImageContainer>
              <S.MainImage src={product.image} alt={product.name} />
            </S.MainImageContainer>
          </S.ProductImageSection>
          <S.ProductInfoSection>
            <S.ProductCategory>
              {product.category || "Produto"}
            </S.ProductCategory>
            <S.ProductTitle>{product.name}</S.ProductTitle>
            <S.ProductPrice>R$ {product.price}</S.ProductPrice>
            <S.ProductDescription>{product.description}</S.ProductDescription>
            <S.ButtonsContainer>
              <RoundButton
                color="green"
                onClick={() => {
                  let priceString: string;
                  if (typeof product.price === "number") {
                    priceString = `R$ ${product.price.toFixed(2)}`;
                  } else {
                    priceString = product.price;
                  }
                  addToCart({
                    id: product.id,
                    name: product.name,
                    price: priceString,
                    image: product.image,
                  });
                }}
              >
                Adicionar ao Carrinho
              </RoundButton>

              <RoundButton variant="outline" onClick={handleFavorite}>
                <FiHeart
                  style={{
                    fill: isFavorite(Number(product.id)) ? "#FF6B5E" : "none",
                    marginRight: "8px",
                  }}
                />
                {isFavorite(Number(product.id))
                  ? "Remover dos Favoritos"
                  : "Adicionar aos Favoritos"}
              </RoundButton>
            </S.ButtonsContainer>
            {showModal && lastAddedItem && lastAddedItem.id === product.id && (
              <Modal
                title="Produto adicionado!"
                message={`${lastAddedItem.name} foi adicionado ao carrinho.`}
                onClose={() => setShowModal(false)}
                onAction={() => {
                  setShowModal(false);
                  navigate("/cart");
                }}
                actionLabel="Ver Carrinho"
              />
            )}
          </S.ProductInfoSection>
        </S.ProductDetailContent>
        <CheckeredBorder />
      </S.ProductDetailContainer>
    </div>
  );
};

export default ProductDetail;
