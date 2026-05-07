import C from '../../constants/colors';

const Textarea = ({ placeholder = '', value, onChange, readOnly = false }) => (
  <textarea
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    readOnly={readOnly}
    style={{
      width: '100%', padding: '10px 14px',
      border: `1.5px solid ${C.border}`, borderRadius: 8,
      fontSize: '.9rem', outline: 'none',
      minHeight: 100, resize: 'vertical',
      background: readOnly ? '#f7f9f7' : C.surface,
      color: C.text,
    }}
  />
);

export default Textarea;