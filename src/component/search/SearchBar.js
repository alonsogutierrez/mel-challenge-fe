import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Col, Row, Input } from 'reactstrap';
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

  const onSearchSubmit = e => {
    e.preventDefault();
    props.history.push(`/search?query=${searchText}`);
  };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <form role='search' onSubmit={e => onSearchSubmit(e)}>
              <Input
                type='search'
                maxLength={150}
                id='search_text_input'
                placeholder='Ingresa tu búsqueda'
                value={searchText}
                onChange={e => handleSearchInput(e)}></Input>
            </form>
          </Col>
        </Row>
      </Container>
      >
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
