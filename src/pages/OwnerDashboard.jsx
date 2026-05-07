import C from '../constants/colors';
import AppHeader from '../components/ui/AppHeader';
import StatCard from '../components/ui/StatCard';
import Card from '../components/ui/Card';
import Btn from '../components/ui/Btn';
import TableHeader from '../components/ui/TableHeader';
import Badge from '../components/ui/Badge';

const PROJECTS = [
  ['Solar Panels for Rural Schools', '2025-08-20', '€15,000.00', '€9,800.00',  65,  'active'],
  ['Tech Bootcamp for Youth',        '2025-09-30', '€8,000.00',  '€3,200.00',  40,  'active'],
  ['Community Urban Garden',         '2025-06-15', '€5,000.00',  '€5,000.00',  100, 'funded'],
  ["Children's Art Center",          '2025-04-01', '€6,000.00',  '€1,800.00',  30,  'expired'],
];

const TD = ({ children }) => (
  <td style={{ padding: '11px 14px', borderBottom: `1px solid ${C.border}`, fontSize: '.875rem' }}>
    {children}
  </td>
);

const OwnerDashboard = ({ nav }) => (
  <div className="fr-app" style={{ background: C.bg, minHeight: '100vh' }}>
    <AppHeader user="Marie Dupont" balance="2,400.00" onLogout={() => nav('landing')} onHome={() => nav('landing')} />

    <div style={{ padding: '28px 0 48px', width: '90%', maxWidth: 1280, margin: '0 auto' }}>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 16, marginBottom: 24 }}>
        <StatCard label="Active"       value="3"     color={C.green}    borderColor={C.green} />
        <StatCard label="Funded"       value="2"     color={C.blue}     borderColor={C.blue} />
        <StatCard label="Expired"      value="1"     color={C.red}      borderColor={C.red} />
        <StatCard label="Success Rate" value="33.3%" color={C.orange}   borderColor={C.orange} />
      </div>

      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <div className="fr-syne" style={{ fontSize: '1.05rem', fontWeight: 700, color: C.greenD }}>My Projects</div>
          <Btn variant="primary" size="sm" onClick={() => nav('create-project')}>+ New Project</Btn>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <TableHeader cols={['Project', 'Deadline', 'Goal', 'Collected', 'Status', 'Actions']} />
            <tbody>
              {PROJECTS.map(([title, deadline, goal, collected, pct, status], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? 'transparent' : 'rgba(61,156,69,.04)' }}>
                  <TD><strong>{title}</strong></TD>
                  <TD>{deadline}</TD>
                  <TD>{goal}</TD>
                  <TD>
                    {collected}
                    <div style={{ height: 5, background: C.border, borderRadius: 3, marginTop: 4, overflow: 'hidden', position: 'relative' }}>
                      <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: `${pct}%`, background: C.green, borderRadius: 3 }} />
                    </div>
                  </TD>
                  <TD><Badge status={status} /></TD>
                  <TD>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      <Btn variant="warning" size="sm" onClick={() => nav('project-view')}>View</Btn>
                      {status === 'active' && (
                        <>
                          <Btn variant="primary" size="sm">Edit</Btn>
                          <Btn variant="danger"  size="sm">Del</Btn>
                        </>
                      )}
                    </div>
                  </TD>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  </div>
);

export default OwnerDashboard;
