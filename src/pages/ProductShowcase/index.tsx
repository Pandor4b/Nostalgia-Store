import * as S from "./styles.ts";
import Modal from "../../components/Modal/index.tsx";
import ProductCard from "../../components/ProductCard/index.tsx";
import CheckeredBorder from "../../components/CheckeredBorder/index.tsx";
import RetangularButton from "../../components/RetangularButton/index.tsx";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../services/productsApi";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart.tsx";

const ProductShowcase = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { addToCart, showModal, setShowModal, lastAddedItem } = useCart();

  const handleViewCart = () => {
    setShowModal(false);
    navigate("/cart");
  };

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Carregando produtos...</div>;

  return (
    <>
      <S.ShowcaseContainer>
        <S.ShowcaseContent>
          <S.ShowcaseHeading>PRINCIPAIS PRODUTOS!</S.ShowcaseHeading>
          <S.ProductsGrid>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
              >
                <RetangularButton
                  onClick={() =>
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price:
                        typeof product.price === "number"
                          ? `R$ ${product.price.toFixed(2)}`
                          : product.price,
                      image: product.image,
                    })
                  }
                >
                  Adicionar ao Carrinho
                </RetangularButton>
                <RetangularButton
                  variant="outline"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  Ver Produto
                </RetangularButton>
              </ProductCard>
            ))}
          </S.ProductsGrid>
        </S.ShowcaseContent>
        <CheckeredBorder position="bottom" />
      </S.ShowcaseContainer>
      {showModal && lastAddedItem && (
        <Modal
          title="Produto adicionado!"
          message={`${lastAddedItem.name} foi adicionado ao carrinho.`}
          onClose={() => setShowModal(false)}
          onAction={handleViewCart}
          actionLabel="Ver Carrinho"
        />
      )}
    </>
  );
};

export default ProductShowcase;
