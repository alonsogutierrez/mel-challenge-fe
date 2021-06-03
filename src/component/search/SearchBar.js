import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Col, Row, Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';

import setCategories from '../../actions/setCategories';
import setProducts from '../../actions/setProducts';
import setUbication from '../../actions/setUbication';
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
    const {
      ubication,
      setCategories,
      setProducts,
      setUbication,
      changeProducts,
      setChangeProducts
    } = props;
    try {
      const productsAPIResponse = await ProductsAPI.getProductsByText(
        searchText
      );
      console.log('onSearch: ', productsAPIResponse);
      setIsLoading(true);
      setCategories(productsAPIResponse.categories);
      if (ubication !== productsAPIResponse.ubication) {
        setUbication(productsAPIResponse.ubication);
      }
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

  const rowStyle = {
    paddingTop: '5px',
    paddingBottom: '5px',
    paddingLeft: '10px',
    paddingRight: '10px',
    justifyContent: 'center',
    backgroundColor: '#FFE600'
  };

  const colStyleInput = { paddingRight: '0px' };
  const colStyleButton = { paddingLeft: '0px' };
  const buttonSearchStyle = {
    backgroundColor: '#EEEEEE',
    borderColor: '#EEEEEE'
  };

  return (
    <>
      <form role='search' onSubmit={e => onSearchSubmit(e)}>
        <Row style={rowStyle}>
          <Col lg={1} style={{ width: 'auto' }}>
            <img src='/assets/Logo_ML.png'></img>
          </Col>
          <Col lg={8} style={colStyleInput}>
            <Input
              type='search'
              maxLength={150}
              id='search_text_input'
              placeholder='Nunca dejes de buscar'
              value={searchText}
              style={{ width: '100%' }}
              onChange={e => handleSearchInput(e)}></Input>
          </Col>
          <Col lg={1} style={colStyleButton}>
            <Button
              type='submit'
              onClick={e => onSearchSubmit(e)}
              disabled={loading}
              style={buttonSearchStyle}>
              <img src={'/assets/ic_Search.png'}></img>
            </Button>
          </Col>
        </Row>
      </form>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  setUbication: ubication => dispatch(setUbication(ubication)),
  setCategories: categories => dispatch(setCategories(categories)),
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
  setCategories: () => {},
  setUbication: () => {},
  setChangeProducts: () => {},
  setIsLoading: () => {},
  changeProducts: false
};

SearchBar.propTypes = {
  history: PropTypes.object,
  setProducts: PropTypes.func,
  setCategories: PropTypes.func,
  setUbication: PropTypes.func,
  setChangeProducts: PropTypes.func,
  setIsLoading: PropTypes.func,
  changeProducts: PropTypes.bool
};
