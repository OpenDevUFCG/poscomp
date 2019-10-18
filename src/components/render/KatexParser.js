import React from 'react';
import KatexRender from './KatexRender';
import PropTypes from 'prop-types';

const KatexParser = ({ string }) => {

    const SPECIAL_TOKEN = '$';
    const blocks = [];
    
    let start_block = -1;
    let end_block = false;
    let last_end_block = -1;
    let id = 0;

    for (let i = 0; i < string.length; ++i) {
        if (string[i] === SPECIAL_TOKEN) {
            if (end_block) {
                if (last_end_block + 1 < start_block)
                    blocks.push(<span key={ id++ }>{ string.slice(last_end_block + 1, start_block) }</span>)
                blocks.push(<KatexRender key={ id++ } string={ string.slice(start_block + 1, i) } />);
                end_block = false;
                last_end_block = i;
            } else {
                start_block = i;
                end_block = true;
            }
        }
    }

    if (last_end_block + 1 < string.length)
        blocks.push(<span key={ id }>{ string.slice(last_end_block + 1, string.length) }</span>)

    return (<div>{blocks}</div>);
};

KatexParser.propTypes = {
    string: PropTypes.string
};

export default KatexParser;