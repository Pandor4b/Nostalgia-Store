import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    overflow: hidden;

    .swiper {
        width: 100%;
        height: 400px;
    }

    .swiper-wrapper {
        display: flex !important;
        flex-direction: row !important;
    }

    .swiper-slide {
        width: auto !important;
    }
`;

export const Card = styled.div`
    background: white;
    border: 1px solid #333;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 220px;
    height: 350px;
    margin: 0 auto;
`;

export const ImagePlaceholder = styled.div`
    width: 100%;
    height: 200px;
    background: #eee;
    border: 1px solid #aaa;
    margin-bottom: 1rem;
`;

export const Info = styled.div`
    text-align: center;
`;

export const InftoTitle = styled.h3`
    font-size: 1rem;
    margin: 0.5rem 0;
`;

export const Price = styled.div`
  color: #ff5c5c;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const Button = styled.button`
  background: #222;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
`;
