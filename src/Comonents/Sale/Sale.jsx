const stylesale = {
  position: 'absolute',
  top: '12px',
  right: '12px',
  backgroundColor: '#ff4d4f',
  color: '#fff',
  display: 'inline-block',
  padding: '4px 8px',
  borderRadius: '6px',
  fontSize: '12px',
  fontWeight: '700',
  zIndex: 2,
  boxShadow: '0 6px 14px rgba(255, 77, 79, 0.28)'
};

const Sale = ({ sale }) => {
  return (
    <div style={sale > 0 ? stylesale : undefined}>
      {sale > 0 ? `Sale ${sale}%` : ''}
    </div>
  );
};

export default Sale;