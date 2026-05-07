import C from '../../constants/colors';
import Btn from './Btn';

export default function AppHeader({ user, balance, onLogout, onHome }) { return (
  <header style={{
    background: C.header, color: '#fff', padding: '14px 0',
    position: 'sticky', top: 0, zIndex: 100,
    boxShadow: '0 2px 12px rgba(0,0,0,.25)',
  }}>
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      width: '90%', maxWidth: 1280, margin: '0 auto', gap: 16, flexWrap: 'wrap',
    }}>
      <span
        className="fr-syne"
        onClick={onHome}
        style={{ fontSize: '1.4rem', fontWeight: 800, color: C.greenL, letterSpacing: '-.5px', cursor: 'pointer' }}
      >
        FundRise
      </span>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
        {balance && (
          <span style={{
            background: 'rgba(255,255,255,.12)', borderRadius: 20, padding: '4px 12px',
            fontSize: '.8rem', fontWeight: 600, color: '#a8e6ab',
          }}>
            € {balance}
          </span>
        )}
        <span style={{ fontSize: '.875rem', opacity: .85 }}>
          Welcome, <strong>{user}</strong>
        </span>
        <Btn variant="danger" size="sm" onClick={onLogout}>Logout</Btn>
      </div>
    </div>
  </header>
);
}