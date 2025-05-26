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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState<number | null>(null);
  const [dragStartIndex, setDragStartIndex] = useState<number | null>(null);
  const productsPerView = 3;
  const maxIndex = Math.max(0, products.length - productsPerView);
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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setStartX("touches" in e ? e.touches[0].clientX : e.clientX);
    setDragStartIndex(currentIndex);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || startX === null || dragStartIndex === null) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const diff = clientX - startX;
    const threshold = 80;
    if (diff > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsDragging(false);
    } else if (diff < -threshold && currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
      setIsDragging(false);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setStartX(null);
    setDragStartIndex(null);
  };

  if (loading) return <div>Carregando produtos...</div>;

  return (
    <>
      <S.ShowcaseContainer>
        <S.ShowcaseContent>
          <S.ShowcaseHeading>PRINCIPAIS PRODUTOS!</S.ShowcaseHeading>
          <S.ProductCarousel>
            <S.CarouselButton
              position="left"
              onClick={prevSlide}
              aria-label="Anterior"
            >
              ←
            </S.CarouselButton>
            <S.CarouselTrack
              isGrabbing={isDragging}
              style={{
                transform: `translateX(-${currentIndex * (280 + 30)}px)`,
              }}
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}
            >
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
            </S.CarouselTrack>
            <S.CarouselButton
              position="right"
              onClick={nextSlide}
              aria-label="Próximo"
            >
              →
            </S.CarouselButton>
          </S.ProductCarousel>
          <S.CarouselDots>
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <S.CarouselDot
                key={index}
                active={currentIndex === index}
                onClick={() => goToSlide(index)}
              />
            ))}
          </S.CarouselDots>
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
