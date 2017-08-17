import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as colors from '../styles/colors';


const listSizes = {
  small: {
    'font-size': '14px',
    'line-height': '30px',
    padding: '0 8px',
  },
  medium: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 12px',
  },
  large: {
    'font-size': '18px',
    'line-height': '50px',
    padding: '0 16px',
  },
  wide: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 36px',
  },
  extraWide: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 72px',
  },
  fullWidth: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 8px',
  },
};
function setDisplay({ size }) {
  return size === 'fullWidth' ? 'block' : 'inline-block';
}
function setWidth({ size }) {
  return size === 'fullWidth' ? '100%' : 'initial';
}

const List = styled.ul`
  color: ${({ color }) => colors[color]};
  list-style-type: ${({ listStyleType }) => listStyleType};
  border-style: ${({ borderStyle }) => borderStyle};
  transition: all 300ms ease;
  margin: 8px 0;
  display: ${setDisplay};
  font-size: ${({ size }) => listSizes[size]['font-size']};
  line-height: ${({ size }) => listSizes[size]['line-height']};
  padding: ${({ size }) => listSizes[size]['padding']};
  width: ${setWidth};
`;
List.propTypes = {
  color: PropTypes.string,
  listStyleType: PropTypes.string
};
List.defaultProps = {
  color: 'black',
  listStyleType: 'circle',
  borderStyle: 'solid',
  size: 'large'
};
export default List;
