import React from 'react';
import Routes from './Routes.jsx';
import Loader from 'react-loaders';

const Content = ({ loading, ...rest }) => (loading ? (<Loader type="line-scale" active />) : (<Routes {...rest} />));

export default Content;