import PropTypes from 'prop-types';

export default function WarehouseButton({
  text,
  sm,
  success,
  warning,
  ...rest
}) {
  const warehouseButtonStyle = {
    border: 'none',
    borderRadius: '0.3rem',
    padding: `${sm ? '0.3125rem 1rem' : '0.625rem 1rem'}`,
    backgroundColor: `${success ? '#3bb077' : warning ? '#ea1010' : '#3f51b5'}`,
    color: '#ffffff',
    cursor: 'pointer',
  };

  return (
    <button {...rest} style={warehouseButtonStyle}>
      {text}
    </button>
  );
}

WarehouseButton.propTypes = {
  text: PropTypes.string.isRequired,
  sm: PropTypes.bool,
  success: PropTypes.bool,
};

WarehouseButton.defaultProps = {
  sm: false,
  success: false,
};
