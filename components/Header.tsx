import Container from "./Container";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="bg-white py-5">
      <Container>
        {/* Logo */}
        <Logo />
        {/* NavButtons */}
        {/* NavAdmin */}
      </Container>
    </header>
  );
};
export default Header;
