import styled from "styled-components"

export const ShowcaseContainer = styled.section`
  background-color: ${(props) => props.theme.colors.yellow};
  padding: 80px 0;
  position: relative;
`

export const ShowcaseContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`

export const ShowcaseHeading = styled.h2`
  font-size: 36px;
  text-align: center;
  margin-bottom: 50px;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
`

export const ProductCarousel = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 20px 0;
`

export const CarouselButton = styled.button<{ position: 'left' | 'right' }>`
  background-color: ${(props) => props.theme.colors.darkText};
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: absolute;
  top: 50%;
  ${(props) => (props.position === 'left' ? 'left: 0;' : 'right: 0;')}
  transform: translateY(-50%);
  z-index: 2;
  opacity: 0.85;

  &:hover {
    background-color: ${(props) => props.theme.colors.coral};
    transform: translateY(-50%) scale(1.1);
  }
`

export const CarouselTrack = styled.div<{ isGrabbing: boolean }>`
  display: flex;
  transition: transform 0.5s ease;
  cursor: ${(props) => (props.isGrabbing ? 'grabbing' : 'grab')};
`

export const CarouselNavigation = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 30px;
`

export const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
`

export const CarouselDot = styled.button<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? props.theme.colors.darkText : "white")};
  border: 2px solid ${(props) => props.theme.colors.darkText};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.coral};
  }
`
