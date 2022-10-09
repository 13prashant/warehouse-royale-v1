import PropTypes from 'prop-types';

export default function WarehouseHeader({ title, mx, children }) {
  const warehouseHeaderStyle = {
    margin: `${mx ? '2rem 0 1rem' : '0'}`,
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  return (
    <div style={warehouseHeaderStyle}>
      <h3>{title}</h3>
      {children && <div>{children}</div>}
    </div>
  );
}

WarehouseHeader.propTypes = {
  title: PropTypes.string.isRequired,
  mx: PropTypes.bool,
};

WarehouseHeader.defaultProps = {
  title: '',
  mx: false,
};
