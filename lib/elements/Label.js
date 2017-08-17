import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as colors from '../styles/colors';

const labelSizes = {
  small: {
    'font-size': '12px',
    'line-height': '12px',
  },
  medium: {
    'font-size': '14px',
    'line-height': '16px',
  },
  large: {
    'font-size': '16px',
    'line-height': '16px',
  },
  extraLarge: {
    'font-size': '32px',
    'line-height': '16px',
  },
};

function underline({ underline }) {
  return underline === true ? 'underline' : '';
}

const Label = styled.label`
  color: ${({ color }) => colors[color]};
  display: inline-block;
  font-size: ${({ size }) => labelSizes[size]['font-size']};
  line-height: ${({ size }) => labelSizes[size]['line-height']};
  font-weight: ${({ fontWeight }) => fontWeight};
  margin: 8px 0;
  text-transform: ${({ textTransform }) => textTransform};
  transition: all 300ms ease;
  text-decoration: ${underline}
`;
Label.propTypes = {
  color: PropTypes.string,
  fontWeight: PropTypes.number,
  textTransform: PropTypes.string,
  size: PropTypes.string,
};
Label.defaultProps = {
  color: 'silver',
  fontWeight: 400,
  textTransform: 'uppercase',
  size: 'medium',
};
export default Label;
