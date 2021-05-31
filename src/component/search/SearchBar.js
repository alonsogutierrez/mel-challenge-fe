import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container, Col, Row, Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';

import setProducts from '../../actions/setProducts';
import setChangeProducts from '../../actions/setChangeProducts';
import setIsLoading from '../../actions/setIsLoading';

import ProductsAPI from './../../common/ProductsAPI';

const SearchBar = props => {
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    const { setProducts, changeProducts, setChangeProducts } = props;
    try {
      const productsAPIResponse = await ProductsAPI.getProductsByText(
        searchText
      );
      setIsLoading(true);
      setProducts(productsAPIResponse.items);
      setChangeProducts(!changeProducts);
      setLoading(false);
      setIsLoading(false);
      props.history.push(`/items?query=${searchText}`);
    } catch (err) {
      setLoading(false);
      setIsLoading(false);
    }
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
                placeholder='Nunca dejes de buscar'
                value={searchText}
                onChange={e => handleSearchInput(e)}></Input>
            </Col>
            <Col xs='2'>
              <Button
                type='submit'
                onClick={e => onSearchSubmit(e)}
                disabled={loading}>
                <img src={'/assets/ic_Search.png'}></img>
              </Button>
            </Col>
          </Row>
        </form>
      </Container>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  setProducts: products => dispatch(setProducts(products)),
  setChangeProducts: changeProducts =>
    dispatch(setChangeProducts(changeProducts)),
  setIsLoading: isLoading => dispatch(setIsLoading(isLoading))
});

const mapStateToProps = state => ({
  changeProducts: state.changeProductsReducer.changeProductsData
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchBar));

SearchBar.defaultProps = {
  history: {},
  setProducts: () => {},
  setChangeProducts: () => {},
  setIsLoading: () => {},
  changeProducts: false
};

SearchBar.propTypes = {
  history: PropTypes.object,
  setProducts: PropTypes.func,
  setChangeProducts: PropTypes.func,
  setIsLoading: PropTypes.func,
  changeProducts: PropTypes.bool
};
