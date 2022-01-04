import styled from "styled-components";

const Input = styled.input`
  background: #222531;
  color: #e2e2e2;
  border: none;
  padding: 1rem;
  border-radius: 0.4rem;
  outline: none;
  height: 100%;
  width: 100%;
  ::placeholder {
    color: #aaaaaa;
  }
`;
const Div = styled.div`
  width: 25rem;
  margin: 2rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchBar = ({ ...rest }) => {
  return (
    <Div>
      <Input {...rest} />
    </Div>
  );
};

export default SearchBar;
