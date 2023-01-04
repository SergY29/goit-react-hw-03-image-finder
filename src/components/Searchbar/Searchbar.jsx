import { BiSearch } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Component } from 'react';

import {
  Header,
  Form,
  SearchButton,
  ButtonLabel,
  Input,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    search: '',
  };

  handleSubmit = e => {
    const { search } = this.state;
    e.preventDefault();
    if (search.trim() === '') {
      toast.warn('Enter words to search for');
      return;
    }
    this.props.onSubmit(search);
    // this.setState({ search: '' });
  };

  handleChange = e => {
    const { name, value } = e.target;
    const normalizeValue = value.toLowerCase();
    this.setState({ [name]: normalizeValue });
  };

  render() {
    const { search } = this.state;

    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <BiSearch size={28} />
            <ButtonLabel>Search</ButtonLabel>
          </SearchButton>
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
            onChange={this.handleChange}
            value={search}
          />
        </Form>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
