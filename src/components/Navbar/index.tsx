import * as S from './styles';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LuShoppingCart, LuMenu } from 'react-icons/lu';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/shop', label: 'Best Sellers' },
    { path: '/sale', label: 'On Sale' },
    { path: '/lookbook', label: 'Lookbook' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <S.Container>
       <S.Logo>NOSTALGIA.STORE</S.Logo>


      <S.NavContainer>
        {navItems.map((item) => (
          <S.NavItem
            to={item.path}
            key={item.path}
            $active={location.pathname === item.path}
              >
              {item.label}
          </S.NavItem>
        ))}

      </S.NavContainer>
      <S.RightSection>
        <LuShoppingCart size={18}/>
      </S.RightSection>
    </S.Container>
  )
};

export default Navbar