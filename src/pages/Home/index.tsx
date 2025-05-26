import Navbar from '../../components/Navbar';
import ProductShowcase from '../ProductShowcase';
import * as S from './styles';


const Home = () => {
  return (

    <S.Wrapper>
      <Navbar />
        <ProductShowcase/>
    </S.Wrapper>
  )
};

export default Home