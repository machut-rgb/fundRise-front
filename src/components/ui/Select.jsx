import C from '../../constants/colors';

const Select = ({ children, value, onChange }) => (
  <select
    value={value}
    onChange={onChange}
    style={{
      width: '100%', padding: '10px 14px',
      border: `1.5px solid ${C.border}`, borderRadius: 8,
      fontSize: '.9rem', background: C.surface,
      color: C.text, cursor: 'pointer', outline: 'none',
    }}
  >
    {children}
  </select>
);

export default Select;