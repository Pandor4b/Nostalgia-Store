import Navbar from '../../components/Navbar';
import ProductShowcase from '../../components/ProductShowcase';
import * as S from './styles';


const Home = () => {
  return (

    <S.Wrapper>
      <Navbar />
      <h1>Aqui é a home</h1>
      <ProductShowcase/>
    </S.Wrapper>
  )
};

export default Home