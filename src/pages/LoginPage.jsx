import { useState } from 'react';
import C from '../constants/colors';
import AppHeader from '../components/ui/AppHeader';
import FormGroup from '../components/ui/FormGroups';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import Btn from '../components/ui/Btn';

const LoginPage = ({ nav }) => {
  const [showPw, setShowPw] = useState(false);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg,#1c2b1e,#2e4a30)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
    }}>
      <div style={{
        background: C.surface, borderRadius: 16,
        boxShadow: '0 12px 48px rgba(0,0,0,.25)',
        padding: '40px 36px', width: '100%', maxWidth: 440,
      }}>
        <div className="fr-syne" style={{ fontSize: '1.7rem', fontWeight: 800, color: C.header, textAlign: 'center', marginBottom: 28 }}>
          Welcome Back
        </div>

        <FormGroup label="Email">
          <Input type="email" placeholder="you@example.com" defaultValue="admin@fundrise.com" />
        </FormGroup>

        <FormGroup label="Password">
          <div style={{ position: 'relative' }}>
            <Input type={showPw ? 'text' : 'password'} placeholder="••••••••" defaultValue="password" />
            <span
              onClick={() => setShowPw(p => !p)}
              style={{
                position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
                cursor: 'pointer', color: C.muted, fontSize: '.8rem', fontWeight: 600, userSelect: 'none',
              }}
            >
              {showPw ? 'Hide' : 'Show'}
            </span>
          </div>
        </FormGroup>

        <Btn variant="primary" onClick={() => nav('admin')}>
          <span style={{ width: '100%', display: 'block', textAlign: 'center', padding: '3px 0' }}>Login</span>
        </Btn>

        <div style={{ textAlign: 'center', marginTop: 20, fontSize: '.875rem', color: C.muted }}>
          Don't have an account?{' '}
          <span onClick={() => nav('register')} style={{ color: C.green, fontWeight: 600, cursor: 'pointer' }}>Register</span>
        </div>

        <div style={{ marginTop: 20, padding: 12, background: '#f7faf7', borderRadius: 8, fontSize: '.8rem', color: C.muted }}>
          <strong>Demo accounts:</strong><br />
          admin@fundrise.com →{' '}
          <span onClick={() => nav('admin')} style={{ color: C.green, cursor: 'pointer' }}>Admin</span><br />
          owner@fundrise.com →{' '}
          <span onClick={() => nav('owner')} style={{ color: C.green, cursor: 'pointer' }}>Project Owner</span><br />
          contrib@fundrise.com →{' '}
          <span onClick={() => nav('contributor')} style={{ color: C.green, cursor: 'pointer' }}>Contributor</span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;