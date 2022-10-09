import PropTypes from 'prop-types';

export default function WarehouseButton({ text, sm, success, onClick }) {
  const warehouseButtonStyle = {
    border: 'none',
    borderRadius: '0.3rem',
    padding: `${sm ? '0.3125rem 1rem' : '0.625rem 1rem'}`,
    backgroundColor: `${success ? '#3bb077' : '#3f51b5'}`,
    color: '#ffffff',
    cursor: 'pointer',
  };

  return (
    <button style={warehouseButtonStyle} onClick={(e) => onClick(e)}>
      {text}
    </button>
  );
}

WarehouseButton.propTpes = {
  text: PropTypes.string.isRequired,
  sm: PropTypes.bool,
  success: PropTypes.bool,
  onClick: PropTypes.func,
};

WarehouseButton.defaultProps = {
  sm: false,
  success: false,
};
