import { useState } from 'react';
import C from '../constants/colors';
import AppHeader from '../components/ui/AppHeader';
import Card, {CardTitle} from '../components/ui/Card';
import Btn from '../components/ui/Btn';
import TableHeader from '../components/ui/TableHeader';
import Badge from '../components/ui/Badge';
import Progress from '../components/ui/Progress';

// ── Static data ───────────────────────────────────────────────────────────────
export default function  ContributorDashboard ({nav}) {
  const [tab, setTab] = useState('available');
  const available = [
    ['Solar Panels for Rural Schools','Bringing renewable energy to off-grid schools in rural Madagascar.',15000,9800,65,'2025-08-20'],
    ['Tech Bootcamp for Youth','6-week intensive coding bootcamp for underprivileged youth aged 16–24.',8000,3200,40,'2025-09-30'],
    ['Mobile Health Clinic','A fully-equipped mobile clinic to serve isolated communities.',30000,12000,40,'2025-10-01'],
    ['Women Entrepreneurs Fund','Micro-grants and mentorship for women starting small businesses.',12000,7500,63,'2025-11-15'],
    ['Reforestation Drive 2025','Plant 50,000 native trees to restore deforested highland areas.',10000,4300,43,'2025-12-31'],
  ];
  const myContribs = [
    ['Solar Panels for Rural Schools','2025-04-10','€500.00','active'],
    ['Women Entrepreneurs Fund','2025-04-14','€250.00','active'],
  ];
  const ProjectCard = ({title,desc,goal,raised,pct,deadline}) => (
    <div className="fr-card-hover" style={{background:C.surface,borderRadius:8,
      boxShadow:'0 1px 4px rgba(0,0,0,.10)',overflow:'hidden',cursor:'pointer'}}>
      <div style={{padding:16,background:'linear-gradient(135deg,#f7faf7,#edf4ed)',borderBottom:`1px solid ${C.border}`}}>
        <div className="fr-syne" style={{fontSize:'.95rem',fontWeight:700,color:C.text}}>{title}</div>
      </div>
      <div style={{padding:16}}>
        <div style={{color:C.muted,fontSize:'.83rem',marginBottom:12,height:52,overflow:'hidden'}}>{desc}</div>
        <div style={{display:'flex',justifyContent:'space-between',fontSize:'.8rem',color:C.muted,marginBottom:8}}>
          <span>Goal: €{goal.toLocaleString()}</span><span>Raised: €{raised.toLocaleString()}</span>
        </div>
        <Progress pct={pct}/>
        <div style={{fontSize:'.78rem',color:C.muted,textAlign:'right'}}>{pct}% funded</div>
      </div>
      <div style={{padding:'12px 16px',borderTop:`1px solid ${C.border}`,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <span style={{fontSize:'.78rem',color:C.muted}}>Deadline: {deadline}</span>
        <Btn variant="primary" size="sm" onClick={()=>nav('project-view')}>View</Btn>
      </div>
    </div>
  );
  const TD = ({children}) => <td style={{padding:'11px 14px',borderBottom:`1px solid ${C.border}`,fontSize:'.875rem'}}>{children}</td>;
  return (
    <div className="fr-app" style={{background:C.bg,minHeight:'100vh'}}>
      <AppHeader user="Luc Martin" balance="850.00" onLogout={()=>nav('landing')} onHome={()=>nav('landing')}/>
      <div style={{padding:'28px 0 48px',width:'90%',maxWidth:1280,margin:'0 auto'}}>
        <div style={{display:'flex',borderBottom:`2px solid ${C.border}`,marginBottom:20,gap:4}}>
          {[['available','Available Projects'],['mine','My Contributions'],['featured','Featured']].map(([k,l])=>(
            <button key={k} onClick={()=>setTab(k)}
              style={{padding:'10px 20px',border:'none',background:'none',cursor:'pointer',
                fontFamily:'Plus Jakarta Sans,sans-serif',fontSize:'.9rem',fontWeight:600,
                color:tab===k?C.green:C.muted,
                borderBottom:tab===k?`3px solid ${C.green}`:'3px solid transparent',
                marginBottom:-2,transition:'all .2s'}}>
              {l}
            </button>
          ))}
        </div>
        {tab==='available'&&(
          <Card style={{ padding: 0 }}>
            <CardTitle>Available Projects</CardTitle>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:18}}>
              {available.map(args=><ProjectCard key={args[0]} title={args[0]} desc={args[1]} goal={args[2]} raised={args[3]} pct={args[4]} deadline={args[5]}/>)}
            </div>
          </Card>
        )}
        {tab==='mine'&&(
          <Card>
            <CardTitle>My Contributions</CardTitle>
            <div style={{overflowX:'auto'}}>
              <table style={{width:'100%',borderCollapse:'collapse'}}>
                <TableHeader cols={['Project','Date','Amount','Status','Actions']}/>
                <tbody>
                  {myContribs.map(([proj,date,amount,status],i)=>(
                    <tr key={i} style={{background:i%2===0?'transparent':'rgba(61,156,69,.04)'}}>
                      <TD>{proj}</TD><TD>{date}</TD><TD>{amount}</TD>
                      <TD><Badge status={status}/></TD>
                      <TD><Btn variant="warning" size="sm" onClick={()=>nav('project-view')}>View</Btn></TD>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}
        {tab==='featured'&&(
          <Card>
            <CardTitle>Featured Projects</CardTitle>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:18}}>
              <ProjectCard title="Solar Panels for Rural Schools"
                desc="Bringing renewable energy to off-grid schools in rural Madagascar."
                goal={15000} raised={9800} pct={65} deadline="2025-08-20"/>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};