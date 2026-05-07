import { useState } from 'react';
import C from '../constants/colors';
import AppHeader from '../components/ui/AppHeader';
import StatCard from '../components/ui/StatCard';
import Card, {CardTitle} from '../components/ui/Card';
import Btn from '../components/ui/Btn';
import TableHeader from '../components/ui/TableHeader';
import Badge from '../components/ui/Badge';
// ── Static data ───────────────────────────────────────────────────────────────

const STATS = [
  ['Total Users',    '318'],
  ['Project Owners', '84'],
  ['Contributors',   '234'],
  ['Total Projects', '42'],
  ['Active Projects','18', C.green],
  ['Completed',      '17', '#3f51b5'],
  ['Contributions',  '1,204'],
  ['Funds Raised',   '€128k', C.green],
];

const PROJECTS = [
  ['Solar Panels for Rural Schools', 'Marie Dupont', '€15,000', '€9,800',  '2025-08-20', 'active'],
  ['Community Urban Garden',         'Paul Rakoto',  '€5,000',  '€5,000',  '2025-06-15', 'funded'],
  ['Tech Bootcamp for Youth',        'Marie Dupont', '€8,000',  '€3,200',  '2025-09-30', 'active'],
  ['Clean Water Initiative',         'Hanta Rabe',   '€20,000', '€20,000', '2025-05-10', 'funded'],
  ['Mobile Health Clinic',           'Jean Andria',  '€30,000', '€12,000', '2025-10-01', 'active'],
  ["Children's Art Center",          'Noro Razafy',  '€6,000',  '€1,800',  '2025-04-01', 'expired'],
  ['Women Entrepreneurs Fund',       'Soa Rakoto',   '€12,000', '€7,500',  '2025-11-15', 'active'],
  ['Reforestation Drive 2025',       'Paul Rakoto',  '€10,000', '€4,300',  '2025-12-31', 'active'],
];

const USERS = [
  ['Marie Dupont',  'owner@fundrise.com', 'owner',       '€2,400.00'],
  ['Paul Rakoto',   'paul@fundrise.com',  'owner',       '€1,800.00'],
  ['Hanta Rabe',    'hanta@fundrise.com', 'owner',       '€950.00'],
  ['Luc Martin',    'contrib@fundrise.com','contributor', '€850.00'],
  ['Sophie Levy',   'sophie@fundrise.com','contributor', '€2,100.00'],
  ['Marc Bernard',  'marc@fundrise.com',  'contributor', '€420.00'],
];

const CONTRIBUTIONS = [
  ['Solar Panels for Rural Schools', 'Luc Martin',   '€500.00', '2025-04-10'],
  ['Tech Bootcamp for Youth',        'Sophie Levy',  '€200.00', '2025-04-08'],
  ['Mobile Health Clinic',           'Marc Bernard', '€150.00', '2025-04-05'],
  ['Solar Panels for Rural Schools', 'Sophie Levy',  '€300.00', '2025-03-29'],
  ['Women Entrepreneurs Fund',       'Luc Martin',   '€250.00', '2025-04-14'],
  ['Reforestation Drive 2025',       'Marc Bernard', '€100.00', '2025-04-12'],
];

const TABS = ['projects', 'users', 'contributions'];

// ── Sub-components ────────────────────────────────────────────────────────────

const TD = ({ children }) => (
  <td style={{ padding: '11px 14px', borderBottom: `1px solid ${C.border}`, fontSize: '.875rem' }}>
    {children}
  </td>
);

const TabBar = ({ active, onChange }) => (
  <div style={{ display: 'flex', borderBottom: `2px solid ${C.border}`, paddingLeft: 24, gap: 4 }}>
    {TABS.map(t => (
      <button key={t} onClick={() => onChange(t)} style={{
        padding: '10px 20px', border: 'none', background: 'none', cursor: 'pointer',
        fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '.9rem', fontWeight: 600,
        color: active === t ? C.green : C.muted,
        borderBottom: active === t ? `3px solid ${C.green}` : '3px solid transparent',
        marginBottom: -2, textTransform: 'capitalize', transition: 'all .2s',
      }}>
        {t.charAt(0).toUpperCase() + t.slice(1)}
      </button>
    ))}
  </div>
);

// ── Page ──────────────────────────────────────────────────────────────────────

const AdminDashboard = ({ nav }) => {
  const [tab, setTab] = useState('projects');

  return (
    <div className="fr-app" style={{ background: C.bg, minHeight: '100vh' }}>
      <AppHeader user="Admin User" onLogout={() => nav('landing')} onHome={() => nav('landing')} />

      <div style={{ padding: '28px 0 48px', width: '90%', maxWidth: 1280, margin: '0 auto' }}>

        {/* Stats grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 16, marginBottom: 24 }}>
          {STATS.map(([label, value, color]) => (
            <div key={label} className="fr-stat" style={{
              background: C.surface, borderRadius: 8,
              boxShadow: '0 1px 4px rgba(0,0,0,.10)', padding: 20, textAlign: 'center',
            }}>
              <div style={{ fontSize: '.78rem', textTransform: 'uppercase', letterSpacing: '.6px', color: C.muted, fontWeight: 600 }}>
                {label}
              </div>
              <div className="fr-syne" style={{ fontSize: '2rem', fontWeight: 700, margin: '6px 0', color: color || C.text }}>
                {value}
              </div>
            </div>
          ))}
        </div>

        {/* Tab panel */}
        <Card style={{ padding: 0 }}>
          <TabBar active={tab} onChange={setTab} />
          <div style={{ padding: 20 }}>

            {tab === 'projects' && (
              <>
                <CardTitle>Project Management</CardTitle>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <TableHeader cols={['Title', 'Owner', 'Goal', 'Collected', 'Deadline', 'Status', 'Actions']} />
                    <tbody>
                      {PROJECTS.map(([title, owner, goal, collected, deadline, status], i) => (
                        <tr key={i} style={{ background: i % 2 === 0 ? 'transparent' : 'rgba(61,156,69,.04)' }}>
                          <TD><strong>{title}</strong></TD>
                          <TD>{owner}</TD>
                          <TD>{goal}</TD>
                          <TD>{collected}</TD>
                          <TD>{deadline}</TD>
                          <TD><Badge status={status} /></TD>
                          <TD><Btn variant="warning" size="sm" onClick={() => nav('project-view')}>View</Btn></TD>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}

            {tab === 'users' && (
              <>
                <CardTitle>User Management</CardTitle>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <TableHeader cols={['Name', 'Email', 'Role', 'Balance', 'Actions']} />
                    <tbody>
                      {USERS.map(([name, email, role, balance], i) => (
                        <tr key={i} style={{ background: i % 2 === 0 ? 'transparent' : 'rgba(61,156,69,.04)' }}>
                          <TD><strong>{name}</strong></TD>
                          <TD>{email}</TD>
                          <TD><Badge status={role} /></TD>
                          <TD>{balance}</TD>
                          <TD><Btn variant="primary" size="sm" onClick={() => nav('deposit')}>Add Funds</Btn></TD>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}

            {tab === 'contributions' && (
              <>
                <CardTitle>Contribution Management</CardTitle>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <TableHeader cols={['Project', 'Contributor', 'Amount', 'Date', 'Actions']} />
                    <tbody>
                      {CONTRIBUTIONS.map(([proj, contrib, amount, date], i) => (
                        <tr key={i} style={{ background: i % 2 === 0 ? 'transparent' : 'rgba(61,156,69,.04)' }}>
                          <TD>{proj}</TD>
                          <TD>{contrib}</TD>
                          <TD>{amount}</TD>
                          <TD>{date}</TD>
                          <TD><Btn variant="warning" size="sm" onClick={() => nav('project-view')}>View Project</Btn></TD>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}

          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;