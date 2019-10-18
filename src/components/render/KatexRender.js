import React from 'react';
import katex from 'katex';
import PropTypes from 'prop-types';

const KatexRender = ({ string }) => (
  <span dangerouslySetInnerHTML={{ __html: katex.renderToString(string, { throwOnError: false }) }}></span>
);

KatexRender.propTypes = {
  string: PropTypes.string,
};

export default KatexRender;
