import React from 'react';
import katex from 'katex';
import PropTypes from 'prop-types';

const KatexRender = ({ string }) => (
    <div
        dangerouslySetInnerHTML={
            {__html: katex.renderToString(string, {throwOnError: false})}
        }>
    </div>
);

KatexRender.propTypes = {
    string: PropTypes.string
};

export default KatexRender;
