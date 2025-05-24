import * as S from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import { LuCassetteTape , LuMenu } from "react-icons/lu";
import { useCart } from "../../hooks/useCart";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartCount } = useCart();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "#all-products", label: "Produtos" },
    { path: "/#", label: "On Sale" },
    { path: "/#", label: "Contato" },
  ];

  return (
    <S.Container>
      <S.Logo onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        NOSTALGIA.STORE
      </S.Logo>
      <S.NavContainer>
        {navItems.map((item) => (
          <S.NavItem
            to={item.path}
            key={item.path}
            $active={
              item.path.startsWith("#")
                ? location.hash === item.path
                : location.pathname === item.path
            }
            onClick={(e) => {
              if (item.path.startsWith("#")) {
                e.preventDefault();
                const el = document.getElementById(item.path.replace("#", ""));
                if (el) el.scrollIntoView({ behavior: "smooth" });
                window.history.replaceState(null, "", item.path);
              } else {
                navigate(item.path);
              }
            }}
          >
            {item.label}
          </S.NavItem>
        ))}
      </S.NavContainer>

      <S.MobileMenuButton>
        <LuMenu></LuMenu>
      </S.MobileMenuButton>
      <S.RightSection>
        <S.CartButton onClick={() => navigate("/cart")} aria-label="Carrinho">
          <S.CartCount>{cartCount}</S.CartCount>
          <S.CartIcon></S.CartIcon>
        </S.CartButton>
        <S.CartButton
          onClick={() => navigate("/orders")}
          aria-label="Histórico de Pedidos"
          style={{ marginLeft: 12 }}
        >
          <span color="#333">
            <LuCassetteTape size={24}/>
          </span>
        </S.CartButton>
      </S.RightSection>
    </S.Container>
  );
};

export default Navbar;
