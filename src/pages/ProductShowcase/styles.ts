import styled from "styled-components"

export const ShowcaseContainer = styled.section`
  background-color: ${(props) => props.theme.colors.yellow};
  padding: 70px 0 60px 0;
  position: relative;
`

export const ShowcaseContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`

export const ShowcaseHeading = styled.h2`
  font-size: 2.2rem;
  font-weight: 800;
  color: ${(props) => props.theme.colors.darkText};
  margin-bottom: 40px;
  text-align: center;
`

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 30px;
`
