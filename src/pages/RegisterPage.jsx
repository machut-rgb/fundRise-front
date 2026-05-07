import { useState } from 'react';
import C from '../constants/colors';
import AppHeader from '../components/ui/AppHeader';
import FormGroup from '../components/ui/FormGroups';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import Btn from '../components/ui/Btn';

const RegisterPage = ({ nav }) => {
  const [showPw, setShowPw] = useState(false);
  const [showCp, setShowCp] = useState(false);

  const PasswordField = ({ label, show, toggle }) => (
    <FormGroup label={label}>
      <div style={{ position: 'relative' }}>
        <Input type={show ? 'text' : 'password'} placeholder="••••••••" />
        <span
          onClick={toggle}
          style={{
            position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
            cursor: 'pointer', color: C.muted, fontSize: '.8rem', fontWeight: 600,
          }}
        >
          {show ? 'Hide' : 'Show'}
        </span>
      </div>
    </FormGroup>
  );

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg,#1c2b1e,#2e4a30)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
    }}>
      <div style={{
        background: C.surface, borderRadius: 16,
        boxShadow: '0 12px 48px rgba(0,0,0,.25)',
        padding: '40px 36px', width: '100%', maxWidth: 520,
      }}>
        <div className="fr-syne" style={{ fontSize: '1.7rem', fontWeight: 800, color: C.header, textAlign: 'center', marginBottom: 28 }}>
          Create Account
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <FormGroup label="First Name"><Input placeholder="Jean" /></FormGroup>
          <FormGroup label="Last Name"><Input placeholder="Dupont" /></FormGroup>
        </div>

        <FormGroup label="Email"><Input type="email" placeholder="you@example.com" /></FormGroup>
        <FormGroup label="Address"><Input placeholder="123 Rue de la Paix, Paris" /></FormGroup>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <PasswordField label="Password"         show={showPw} toggle={() => setShowPw(p => !p)} />
          <PasswordField label="Confirm Password" show={showCp} toggle={() => setShowCp(p => !p)} />
        </div>

        <FormGroup label="Account Type">
          <Select>
            <option>Project Owner</option>
            <option>Contributor</option>
          </Select>
        </FormGroup>

        <Btn variant="primary" onClick={() => nav('login')}>
          <span style={{ display: 'block', textAlign: 'center', padding: '3px 0', width: '100%' }}>
            Create Account
          </span>
        </Btn>

        <div style={{ textAlign: 'center', marginTop: 20, fontSize: '.875rem', color: C.muted }}>
          Already have an account?{' '}
          <span onClick={() => nav('login')} style={{ color: C.green, fontWeight: 600, cursor: 'pointer' }}>Login</span>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;