import C from '../constants/colors';
import Btn from '../components/ui/Btn';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate()

  function nav(link) {
    navigate(link)
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: `linear-gradient(160deg,rgba(28,43,30,.92),rgba(0,0,0,.78)),
    url("data:image/svg+xml,%3Csvg width='800' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='800' height='600' fill='%23234025'/%3E%3Ccircle cx='200' cy='150' r='200' fill='%233d9c45' opacity='.3'/%3E%3Ccircle cx='650' cy='400' r='250' fill='%23275b29' opacity='.4'/%3E%3C/svg%3E") center/cover`,
      display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center',
      textAlign: 'center', padding: '60px 24px', color: '#fff',
    }}>
      <div className="fr-syne" style={{ fontSize: '3.2rem', fontWeight: 800, color: C.greenL, marginBottom: 12, letterSpacing: -1 }}>
        FundRise
      </div>
      <h1 className="fr-syne" style={{ fontSize: '1.55rem', fontWeight: 600, marginBottom: 14 }}>
        Bring Your Ideas to Life
      </h1>
      <p style={{ fontSize: '1rem', opacity: .8, maxWidth: 540, margin: '0 auto 40px', lineHeight: 1.7 }}>
        Join our crowdfunding community to support innovative projects or launch your own campaign.
        Together, we can turn great ideas into reality.
      </p>

      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Btn variant="primary" onClick={() => nav('/login')}>
          <span style={{ fontSize: '1rem', padding: '3px 14px' }}>Login</span>
        </Btn>
        <Btn variant="outline" onClick={() => nav('/register')}>
          <span style={{ fontSize: '1rem', padding: '3px 14px' }}>Register</span>
        </Btn>
      </div>

      <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap', marginTop: 48 }}>
        {[['42', 'Active Projects'], ['318', 'Users'], ['€128k', 'Total Funded']].map(([v, l]) => (
          <div key={l} style={{
            background: 'rgba(255,255,255,.1)', backdropFilter: 'blur(8px)',
            borderRadius: 12, padding: '18px 28px', textAlign: 'center',
            border: '1px solid rgba(255,255,255,.15)',
          }}>
            <div className="fr-syne" style={{ fontSize: '1.9rem', fontWeight: 800, color: C.greenL }}>{v}</div>
            <div style={{ fontSize: '.8rem', opacity: .7, marginTop: 4, textTransform: 'uppercase', letterSpacing: '.8px' }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default LandingPage;