import C from '../../constants/colors';

const Input = ({ type = 'text', placeholder = '', value, onChange, readOnly = false, min, max, step, defaultValue }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    defaultValue={defaultValue}
    onChange={onChange}
    readOnly={readOnly}
    min={min}
    max={max}
    step={step}
    style={{
      width: '100%', padding: '10px 14px',
      border: `1.5px solid ${C.border}`, borderRadius: 8,
      fontSize: '.9rem', outline: 'none',
      background: readOnly ? '#f7f9f7' : C.surface,
      color: C.text, cursor: readOnly ? 'default' : 'text',
    }}
  />
);

export default Input;