import React from 'react';
import Routes from './Routes.jsx';
import Loader from 'react-loaders';

const Content = ({ loading, ...rest }) => {
  console.log("LOADING", loading);
  console.log("Rest", rest);
  return (loading ? (<Loader type="line-scale" active />) : (<Routes {...rest} />));
}
export default Content;