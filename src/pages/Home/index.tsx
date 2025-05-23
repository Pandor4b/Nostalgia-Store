import Card from '../../components/ProductCard';
import Carousel from '../../components/Carousel';
import Navbar from '../../components/Navbar';
import ProductShowcase from '../../components/ProductShowcase';
import * as S from './styles';


const Home = () => {
  return (

    <S.Wrapper>
      <Navbar />
      <h1>Aqui é a home</h1>
      {/* <p>OI EU O SOU O GOKU!</p> */}
      {/* <Card /> */}
      {/* <Carousel/> */}
      <ProductShowcase/>
    </S.Wrapper>
  )
};

export default Home