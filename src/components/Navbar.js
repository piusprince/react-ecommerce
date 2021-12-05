import React from "react";
import styled from "styled-components";
import { FiSearch, FiShoppingCart } from "react-icons/fi";

const Container = styled.nav`
  height: 6rem;
  background-color: aliceblue;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

const Left = styled.div`
  flex: 1;
`;

const BrandName = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

const Center = styled.div`
  flex: 1;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 0.5rem;
  margin-right: 1rem;
  width: 90%;
  height: 100%;
`;

const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 1.5rem;
  color: #333;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  display: flex;
  margin-left: 2rem;
  font-size: 1.6rem;
  cursor: pointer;

  :hover {
    color: red;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <BrandName>Style Up</BrandName>
        </Left>
        <Center>
          <SearchBar>
            <FiSearch size={20} />
            <Input type="text" placeholder="Search" />
          </SearchBar>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem style={{ marginRight: "1rem" }}>Sign in</MenuItem>
          <MenuItem>
            <FiShoppingCart size={20} />
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
