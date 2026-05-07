import C from '../../constants/colors';

const FormGroup = ({ label, children }) => (
  <div style={{ marginBottom: 18 }}>
    <label style={{
      display: 'block', fontWeight: 600,
      fontSize: '.875rem', marginBottom: 5, color: C.text,
    }}>
      {label}
    </label>
    {children}
  </div>
);

export default FormGroup;