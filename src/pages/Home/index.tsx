import Navbar from '../../components/Navbar';
import CheckeredBorder from '../../components/CheckeredBorder';
import ProductShowcase from '../../components/ProductShowcase';
import * as S from './styles';


const Home = () => {
  return (

    <S.Wrapper>
      <Navbar />
      <h1>Aqui é a home</h1>
      <CheckeredBorder position="bottom" />
      <ProductShowcase/>
    </S.Wrapper>
  )
};

export default Home