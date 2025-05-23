import * as S from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const products = [
  {
    name: "Retro Graphic Tee",
    price: 35,
  },
  {
    name: "Vintage Denim Jacket",
    price: 65,
  },
  {
    name: "Patterned Midi Dress",
    price: 48,
  },
  {
    name: "High-Waist Jeans",
    price: 55,
  },
  {
    name: "Retro Graphic Tee",
    price: 35,
  },
  {
    name: "Vintage Denim Jacket",
    price: 65,
  },
  {
    name: "Patterned Midi Dress",
    price: 48,
  },
  {
    name: "High-Waist Jeans",
    price: 55,
  },
  {
    name: "Retro Sunglasses",
    price: 28,
  },
  {
    name: "Platform Sandals",
    price: 42,
  },
];

const Carousel = () => {
  return (
    <S.Wrapper>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <S.Card>
              <S.ImagePlaceholder />
              <S.Info>
                <S.InftoTitle>{product.name}</S.InftoTitle>
                <S.Price className="price">${product.price.toFixed(2)}</S.Price>
                <S.Button>View Item</S.Button>
              </S.Info>
            </S.Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Wrapper>
  );
};

export default Carousel;
