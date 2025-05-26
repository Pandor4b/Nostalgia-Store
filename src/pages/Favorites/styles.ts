import styled from "styled-components";

export const FavoritesContainer = styled.section`
  background-color: ${(props) => props.theme.colors.orange};
  padding: 8rem 0;
  position: relative;
  min-height: 70vh;
`;

export const FavoritesContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const FavoritesHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
  position: relative;
`;

export const FavoritesTitle = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
  position: relative;
  display: inline-block;
`;

export const FavoritesSubtitle = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.darkText};
  opacity: 0.7;
`;

export const FavoritesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 30px;
`;

export const RemoveFavoriteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: #FF6B5E;
  font-size: 24px;
  padding: 0;
  z-index: 9999;
  
`;

export const EmptyFavorites = styled.div`
  text-align: center;
  padding: 60px 20px;
  background-color: white;
  border: 3px solid ${(props) => props.theme.colors.darkText};
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    width: 100%;
    height: 100%;
    border: 2px dashed ${(props) => props.theme.colors.darkText};
    z-index: 0;
    pointer-events: none; 
  }
`;

export const EmptyFavoritesIcon = styled.div`
  font-size: 64px;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
`;

export const EmptyFavoritesText = styled.h2`
  font-size: 24px;
  margin-bottom: 15px;
  position: relative;
  z-index: 1;
`;

export const EmptyFavoritesSubtext = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.darkText};
  opacity: 0.7;
  margin-bottom: 30px;
  position: relative;
  z-index: 1;
`;
