import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Col, Row, Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';

const SearchBar = props => {
  const [searchText, setSearchText] = useState('');

  const handleSearchInput = e => {
    const textInput = e.target.value;
    const textInputFormatted = textInput.replace(
      /[^a-zA-ZáéíñóúüÁÉÍÑÓÚÜ´'\s]/g,
      ''
    );
    setSearchText(textInputFormatted);
  };

  const onSearchSubmit = async e => {
    e.preventDefault();
    props.history.push(`/items?query=${searchText}`);
  };
  return (
    <>
      <Container>
        <form role='search' onSubmit={e => onSearchSubmit(e)}>
          <Row>
            <Col xs='10'>
              <Input
                type='search'
                maxLength={150}
                id='search_text_input'
                placeholder='Ingresa tu búsqueda'
                value={searchText}
                onChange={e => handleSearchInput(e)}></Input>
            </Col>
            <Col xs='2'>
              <Button type='submit' onClick={e => onSearchSubmit(e)}>
                <img src={'/assets/ic_Search.png'}></img>
              </Button>
            </Col>
          </Row>
        </form>
      </Container>
    </>
  );
};

export default withRouter(SearchBar);

SearchBar.defaultProps = {
  history: {}
};

SearchBar.propTypes = {
  history: PropTypes.object
};
