import {
  Header,
  Form,
  SearchButton,
  ButtonLabel,
  Input,
} from './Searchbar.styled';
import { BiSearch } from 'react-icons/bi';

export const Searchbar = () => {
  return (
    <Header>
      <Form>
        <SearchButton type="submit">
          <BiSearch size={28} />
          <ButtonLabel>Search</ButtonLabel>
        </SearchButton>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </Header>
  );
};
