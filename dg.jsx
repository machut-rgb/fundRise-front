import { useState } from "react";

const C = {
  green:'#3d9c45', greenL:'#4CAF50', greenD:'#2e7535',
  pink:'#ff4081', orange:'#ff9800', red:'#f44336', blue:'#3f51b5',
  bg:'#f2f4f0', surface:'#ffffff', header:'#1c2b1e',
  text:'#1a2b1c', muted:'#6b7c6e', border:'#d8e0d9',
};

const Fonts = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');
    .fr-app *{font-family:'Plus Jakarta Sans',sans-serif;box-sizing:border-box}
    .fr-syne{font-family:'Syne',sans-serif!important}
    .fr-app input,.fr-app select,.fr-app textarea{font-family:'Plus Jakarta Sans',sans-serif}
    .fr-card-hover:hover{transform:translateY(-3px);transition:transform .2s,box-shadow .2s}
    .fr-btn:hover{opacity:.88;transform:translateY(-1px)}
    .fr-stat:hover{transform:translateY(-4px);transition:transform .25s}
  `}</style>
);

// ─── Primitives ──────────────────────────────────────────────────────────────

const Btn = ({children, variant='primary', size='md', onClick, className=''}) => {
  const bg = {
    primary:C.green, secondary:C.pink, danger:C.red,
    warning:C.orange, ghost:'transparent', outline:'transparent',
  }[variant];
  const clr = variant==='ghost'?C.green:variant==='outline'?'rgba(255,255,255,.9)':'#fff';
  const border = variant==='ghost'?`1.5px solid ${C.green}`:variant==='outline'?'1.5px solid rgba(255,255,255,.6)':'none';
  const pad = size==='sm'?'5px 12px':'9px 18px';
  const fz = size==='sm'?'0.8rem':'0.875rem';
  return (
    <button onClick={onClick} className="fr-btn"
      style={{background:bg,color:clr,border,padding:pad,fontSize:fz,
        fontWeight:600,borderRadius:8,cursor:'pointer',display:'inline-flex',
        alignItems:'center',gap:6,whiteSpace:'nowrap',transition:'all .2s'}}>
      {children}
    </button>
  );
};

const Badge = ({status}) => {
  const cfg = {
    active:{bg:'rgba(76,175,80,.12)',color:'#2e7535'},
    funded:{bg:'rgba(63,81,181,.12)',color:'#3f51b5'},
    expired:{bg:'rgba(244,67,54,.12)',color:'#c62828'},
    pending:{bg:'rgba(255,152,0,.12)',color:'#b36200'},
    owner:{bg:'rgba(33,150,243,.12)',color:'#1565c0'},
    contributor:{bg:'rgba(76,175,80,.12)',color:'#2e7535'},
    completed:{bg:'rgba(63,81,181,.12)',color:'#3f51b5'},
  }[status]||{bg:'#eee',color:'#333'};
  return (
    <span style={{...cfg,display:'inline-block',padding:'3px 10px',borderRadius:20,
      fontSize:'.73rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'.5px'}}>
      {status}
    </span>
  );
};

const Progress = ({pct}) => (
  <div style={{height:7,background:C.border,borderRadius:4,overflow:'hidden',margin:'8px 0 4px'}}>
    <div style={{height:'100%',width:`${pct}%`,background:`linear-gradient(90deg,${C.green},${C.greenL})`,borderRadius:4}}/>
  </div>
);

const Card = ({children, style={}}) => (
  <div style={{background:C.surface,borderRadius:8,
    boxShadow:'0 1px 4px rgba(0,0,0,.10),0 2px 8px rgba(0,0,0,.06)',
    padding:24,marginBottom:20,...style}}>
    {children}
  </div>
);

const CardTitle = ({children}) => (
  <div className="fr-syne" style={{fontSize:'1.05rem',fontWeight:700,color:C.greenD,
    borderBottom:`1px solid ${C.border}`,paddingBottom:12,marginBottom:18}}>
    {children}
  </div>
);

const FormGroup = ({label, children}) => (
  <div style={{marginBottom:18}}>
    <label style={{display:'block',fontWeight:600,fontSize:'.875rem',marginBottom:5,color:C.text}}>{label}</label>
    {children}
  </div>
);

const Input = ({type='text', placeholder='', value, onChange, readOnly=false, min, max, step}) => (
  <input type={type} placeholder={placeholder} value={value} onChange={onChange}
    readOnly={readOnly} min={min} max={max} step={step}
    style={{width:'100%',padding:'10px 14px',border:`1.5px solid ${C.border}`,borderRadius:8,
      fontSize:'.9rem',outline:'none',background:readOnly?'#f7f9f7':C.surface,
      color:C.text,cursor:readOnly?'default':'text'}}/>
);

const Textarea = ({placeholder='', value, onChange, readOnly=false}) => (
  <textarea placeholder={placeholder} value={value} onChange={onChange} readOnly={readOnly}
    style={{width:'100%',padding:'10px 14px',border:`1.5px solid ${C.border}`,borderRadius:8,
      fontSize:'.9rem',outline:'none',minHeight:100,resize:'vertical',
      background:readOnly?'#f7f9f7':C.surface,color:C.text}}/>
);

const Select = ({children, value, onChange}) => (
  <select value={value} onChange={onChange}
    style={{width:'100%',padding:'10px 14px',border:`1.5px solid ${C.border}`,borderRadius:8,
      fontSize:'.9rem',background:C.surface,color:C.text,cursor:'pointer',outline:'none'}}>
    {children}
  </select>
);

const AppHeader = ({user, balance, onLogout, onHome}) => (
  <header style={{background:C.header,color:'#fff',padding:'14px 0',
    position:'sticky',top:0,zIndex:100,boxShadow:'0 2px 12px rgba(0,0,0,.25)'}}>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',
      width:'90%',maxWidth:1280,margin:'0 auto',gap:16,flexWrap:'wrap'}}>
      <span className="fr-syne" onClick={onHome}
        style={{fontSize:'1.4rem',fontWeight:800,color:C.greenL,letterSpacing:'-.5px',cursor:'pointer'}}>
        FundRise
      </span>
      <div style={{display:'flex',alignItems:'center',gap:12,flexWrap:'wrap'}}>
        {balance && (
          <span style={{background:'rgba(255,255,255,.12)',borderRadius:20,padding:'4px 12px',
            fontSize:'.8rem',fontWeight:600,color:'#a8e6ab'}}>
            € {balance}
          </span>
        )}
        <span style={{fontSize:'.875rem',opacity:.85}}>Welcome, <strong>{user}</strong></span>
        <Btn variant="danger" size="sm" onClick={onLogout}>Logout</Btn>
      </div>
    </div>
  </header>
);

const StatCard = ({label, value, color=C.green, borderColor}) => (
  <div className="fr-stat" style={{background:C.surface,borderRadius:8,
    boxShadow:'0 1px 4px rgba(0,0,0,.10),0 2px 8px rgba(0,0,0,.06)',
    padding:20,textAlign:'center',borderTop:borderColor?`3px solid ${borderColor}`:undefined}}>
    <div style={{fontSize:'.78rem',textTransform:'uppercase',letterSpacing:'.6px',color:C.muted,fontWeight:600,marginBottom:4}}>
      {label}
    </div>
    <div className="fr-syne" style={{fontSize:'1.8rem',fontWeight:700,margin:'6px 0',color}}>{value}</div>
  </div>
);

const TableHeader = ({cols}) => (
  <thead>
    <tr>
      {cols.map(c=>(
        <th key={c} style={{padding:'11px 14px',background:C.green,color:'#fff',
          fontFamily:'Syne,sans-serif',fontWeight:600,fontSize:'.8rem',
          textTransform:'uppercase',letterSpacing:'.5px',textAlign:'left'}}>
          {c}
        </th>
      ))}
    </tr>
  </thead>
);

// ─── Page: Landing ────────────────────────────────────────────────────────────

const LandingPage = ({nav}) => (
  <div style={{minHeight:'100vh',
    background:`linear-gradient(160deg,rgba(28,43,30,.92),rgba(0,0,0,.78)),
    url("data:image/svg+xml,%3Csvg width='800' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='800' height='600' fill='%23234025'/%3E%3Ccircle cx='200' cy='150' r='200' fill='%233d9c45' opacity='.3'/%3E%3Ccircle cx='650' cy='400' r='250' fill='%23275b29' opacity='.4'/%3E%3C/svg%3E") center/cover`,
    display:'flex',flexDirection:'column',justifyContent:'center',
    alignItems:'center',textAlign:'center',padding:'60px 24px',color:'#fff'}}>
    <div className="fr-syne" style={{fontSize:'3.2rem',fontWeight:800,color:C.greenL,marginBottom:12,letterSpacing:-1}}>
      FundRise
    </div>
    <h1 className="fr-syne" style={{fontSize:'1.55rem',fontWeight:600,marginBottom:14}}>
      Bring Your Ideas to Life
    </h1>
    <p style={{fontSize:'1rem',opacity:.8,maxWidth:540,margin:'0 auto 40px',lineHeight:1.7}}>
      Join our crowdfunding community to support innovative projects or launch your own campaign.
      Together, we can turn great ideas into reality.
    </p>
    <div style={{display:'flex',gap:16,flexWrap:'wrap',justifyContent:'center'}}>
      <Btn variant="primary" onClick={()=>nav('login')}>
        <span style={{fontSize:'1rem',padding:'3px 14px'}}>Login</span>
      </Btn>
      <Btn variant="outline" onClick={()=>nav('register')}>
        <span style={{fontSize:'1rem',padding:'3px 14px'}}>Register</span>
      </Btn>
    </div>
    <div style={{display:'flex',gap:24,justifyContent:'center',flexWrap:'wrap',marginTop:48}}>
      {[['42','Active Projects'],['318','Users'],['€128k','Total Funded']].map(([v,l])=>(
        <div key={l} style={{background:'rgba(255,255,255,.1)',backdropFilter:'blur(8px)',
          borderRadius:12,padding:'18px 28px',textAlign:'center',border:'1px solid rgba(255,255,255,.15)'}}>
          <div className="fr-syne" style={{fontSize:'1.9rem',fontWeight:800,color:C.greenL}}>{v}</div>
          <div style={{fontSize:'.8rem',opacity:.7,marginTop:4,textTransform:'uppercase',letterSpacing:'.8px'}}>{l}</div>
        </div>
      ))}
    </div>
  </div>
);

// ─── Page: Login ─────────────────────────────────────────────────────────────

const LoginPage = ({nav}) => {
  const [pw, setPw] = useState(false);
  return (
    <div style={{minHeight:'100vh',background:`linear-gradient(160deg,#1c2b1e,#2e4a30)`,
      display:'flex',alignItems:'center',justifyContent:'center',padding:24}}>
      <div style={{background:C.surface,borderRadius:16,boxShadow:'0 12px 48px rgba(0,0,0,.25)',
        padding:'40px 36px',width:'100%',maxWidth:440}}>
        <div className="fr-syne" style={{fontSize:'1.7rem',fontWeight:800,color:C.header,textAlign:'center',marginBottom:28}}>
          Welcome Back
        </div>
        <FormGroup label="Email">
          <Input type="email" placeholder="you@example.com" defaultValue="admin@fundrise.com"/>
        </FormGroup>
        <FormGroup label="Password">
          <div style={{position:'relative'}}>
            <Input type={pw?'text':'password'} placeholder="••••••••" defaultValue="password"/>
            <span onClick={()=>setPw(p=>!p)}
              style={{position:'absolute',right:12,top:'50%',transform:'translateY(-50%)',
                cursor:'pointer',color:C.muted,fontSize:'.8rem',fontWeight:600,userSelect:'none'}}>
              {pw?'Hide':'Show'}
            </span>
          </div>
        </FormGroup>
        <Btn variant="primary" onClick={()=>nav('admin')}>
          <span style={{width:'100%',display:'block',textAlign:'center',padding:'3px 0'}}>Login</span>
        </Btn>
        <div style={{textAlign:'center',marginTop:20,fontSize:'.875rem',color:C.muted}}>
          Don't have an account?{' '}
          <span onClick={()=>nav('register')} style={{color:C.green,fontWeight:600,cursor:'pointer'}}>Register</span>
        </div>
        <div style={{marginTop:20,padding:12,background:'#f7faf7',borderRadius:8,fontSize:'.8rem',color:C.muted}}>
          <strong>Demo accounts:</strong><br/>
          admin@fundrise.com → <span onClick={()=>nav('admin')} style={{color:C.green,cursor:'pointer'}}>Admin</span><br/>
          owner@fundrise.com → <span onClick={()=>nav('owner')} style={{color:C.green,cursor:'pointer'}}>Project Owner</span><br/>
          contrib@fundrise.com → <span onClick={()=>nav('contributor')} style={{color:C.green,cursor:'pointer'}}>Contributor</span>
        </div>
      </div>
    </div>
  );
};

// ─── Page: Register ───────────────────────────────────────────────────────────

const RegisterPage = ({nav}) => {
  const [showPw, setShowPw] = useState(false);
  const [showCp, setShowCp] = useState(false);
  return (
    <div style={{minHeight:'100vh',background:`linear-gradient(160deg,#1c2b1e,#2e4a30)`,
      display:'flex',alignItems:'center',justifyContent:'center',padding:24}}>
      <div style={{background:C.surface,borderRadius:16,boxShadow:'0 12px 48px rgba(0,0,0,.25)',
        padding:'40px 36px',width:'100%',maxWidth:520}}>
        <div className="fr-syne" style={{fontSize:'1.7rem',fontWeight:800,color:C.header,textAlign:'center',marginBottom:28}}>
          Create Account
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
          <FormGroup label="First Name"><Input placeholder="Jean"/></FormGroup>
          <FormGroup label="Last Name"><Input placeholder="Dupont"/></FormGroup>
        </div>
        <FormGroup label="Email"><Input type="email" placeholder="you@example.com"/></FormGroup>
        <FormGroup label="Address"><Input placeholder="123 Rue de la Paix, Paris"/></FormGroup>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
          <FormGroup label="Password">
            <div style={{position:'relative'}}>
              <Input type={showPw?'text':'password'} placeholder="••••••••"/>
              <span onClick={()=>setShowPw(p=>!p)}
                style={{position:'absolute',right:12,top:'50%',transform:'translateY(-50%)',
                  cursor:'pointer',color:C.muted,fontSize:'.8rem',fontWeight:600}}>
                {showPw?'Hide':'Show'}
              </span>
            </div>
          </FormGroup>
          <FormGroup label="Confirm Password">
            <div style={{position:'relative'}}>
              <Input type={showCp?'text':'password'} placeholder="••••••••"/>
              <span onClick={()=>setShowCp(p=>!p)}
                style={{position:'absolute',right:12,top:'50%',transform:'translateY(-50%)',
                  cursor:'pointer',color:C.muted,fontSize:'.8rem',fontWeight:600}}>
                {showCp?'Hide':'Show'}
              </span>
            </div>
          </FormGroup>
        </div>
        <FormGroup label="Account Type">
          <Select><option>Project Owner</option><option>Contributor</option></Select>
        </FormGroup>
        <Btn variant="primary" onClick={()=>nav('login')}>
          <span style={{display:'block',textAlign:'center',padding:'3px 0',width:'100%'}}>Create Account</span>
        </Btn>
        <div style={{textAlign:'center',marginTop:20,fontSize:'.875rem',color:C.muted}}>
          Already have an account?{' '}
          <span onClick={()=>nav('login')} style={{color:C.green,fontWeight:600,cursor:'pointer'}}>Login</span>
        </div>
      </div>
    </div>
  );
};

// ─── Page: Admin Dashboard ────────────────────────────────────────────────────

const AdminDashboard = ({nav}) => {
  const [tab, setTab] = useState('projects');
  const stats = [
    ['Total Users','318'],['Project Owners','84'],['Contributors','234'],['Total Projects','42'],
    ['Active Projects','18',C.green],['Completed','17',C.blue],['Contributions','1,204'],['Funds Raised','€128k',C.green],
  ];
  const projects = [
    ['Solar Panels for Rural Schools','Marie Dupont','€15,000','€9,800','2025-08-20','active'],
    ['Community Urban Garden','Paul Rakoto','€5,000','€5,000','2025-06-15','funded'],
    ['Tech Bootcamp for Youth','Marie Dupont','€8,000','€3,200','2025-09-30','active'],
    ['Clean Water Initiative','Hanta Rabe','€20,000','€20,000','2025-05-10','funded'],
    ['Mobile Health Clinic','Jean Andria','€30,000','€12,000','2025-10-01','active'],
    ["Children's Art Center","Noro Razafy",'€6,000','€1,800','2025-04-01','expired'],
    ['Women Entrepreneurs Fund','Soa Rakoto','€12,000','€7,500','2025-11-15','active'],
    ['Reforestation Drive 2025','Paul Rakoto','€10,000','€4,300','2025-12-31','active'],
  ];
  const users = [
    ['Marie Dupont','owner@fundrise.com','owner','€2,400.00'],
    ['Paul Rakoto','paul@fundrise.com','owner','€1,800.00'],
    ['Hanta Rabe','hanta@fundrise.com','owner','€950.00'],
    ['Luc Martin','contrib@fundrise.com','contributor','€850.00'],
    ['Sophie Levy','sophie@fundrise.com','contributor','€2,100.00'],
    ['Marc Bernard','marc@fundrise.com','contributor','€420.00'],
  ];
  const contribs = [
    ['Solar Panels for Rural Schools','Luc Martin','€500.00','2025-04-10'],
    ['Tech Bootcamp for Youth','Sophie Levy','€200.00','2025-04-08'],
    ['Mobile Health Clinic','Marc Bernard','€150.00','2025-04-05'],
    ['Solar Panels for Rural Schools','Sophie Levy','€300.00','2025-03-29'],
    ['Women Entrepreneurs Fund','Luc Martin','€250.00','2025-04-14'],
    ['Reforestation Drive 2025','Marc Bernard','€100.00','2025-04-12'],
  ];
  const TD = ({children}) => (
    <td style={{padding:'11px 14px',borderBottom:`1px solid ${C.border}`,fontSize:'.875rem'}}>{children}</td>
  );
  const tabs = ['projects','users','contributions'];
  return (
    <div className="fr-app" style={{background:C.bg,minHeight:'100vh'}}>
      <AppHeader user="Admin User" onLogout={()=>nav('landing')} onHome={()=>nav('landing')}/>
      <div style={{padding:'28px 0 48px',width:'90%',maxWidth:1280,margin:'0 auto'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))',gap:16,marginBottom:24}}>
          {stats.map(([l,v,clr])=>(
            <div key={l} className="fr-stat" style={{background:C.surface,borderRadius:8,
              boxShadow:'0 1px 4px rgba(0,0,0,.10)',padding:20,textAlign:'center'}}>
              <div style={{fontSize:'.78rem',textTransform:'uppercase',letterSpacing:'.6px',color:C.muted,fontWeight:600}}>{l}</div>
              <div className="fr-syne" style={{fontSize:'2rem',fontWeight:700,margin:'6px 0',color:clr||C.text}}>{v}</div>
            </div>
          ))}
        </div>
        <Card style={{padding:0}}>
          <div style={{display:'flex',borderBottom:`2px solid ${C.border}`,paddingLeft:24,gap:4}}>
            {tabs.map(t=>(
              <button key={t} onClick={()=>setTab(t)}
                style={{padding:'10px 20px',border:'none',background:'none',cursor:'pointer',
                  fontFamily:'Plus Jakarta Sans,sans-serif',fontSize:'.9rem',fontWeight:600,
                  color:tab===t?C.green:C.muted,
                  borderBottom:tab===t?`3px solid ${C.green}`:'3px solid transparent',
                  marginBottom:-2,textTransform:'capitalize',transition:'all .2s'}}>
                {t.charAt(0).toUpperCase()+t.slice(1)}
              </button>
            ))}
          </div>
          <div style={{padding:20}}>
            {tab==='projects'&&(
              <>
                <CardTitle>Project Management</CardTitle>
                <div style={{overflowX:'auto'}}>
                  <table style={{width:'100%',borderCollapse:'collapse'}}>
                    <TableHeader cols={['Title','Owner','Goal','Collected','Deadline','Status','Actions']}/>
                    <tbody>
                      {projects.map(([title,owner,goal,collected,deadline,status],i)=>(
                        <tr key={i} style={{background:i%2===0?'transparent':'rgba(61,156,69,.04)'}}>
                          <TD><strong>{title}</strong></TD>
                          <TD>{owner}</TD><TD>{goal}</TD><TD>{collected}</TD><TD>{deadline}</TD>
                          <TD><Badge status={status}/></TD>
                          <TD><Btn variant="warning" size="sm" onClick={()=>nav('project-view')}>View</Btn></TD>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
            {tab==='users'&&(
              <>
                <CardTitle>User Management</CardTitle>
                <div style={{overflowX:'auto'}}>
                  <table style={{width:'100%',borderCollapse:'collapse'}}>
                    <TableHeader cols={['Name','Email','Role','Balance','Actions']}/>
                    <tbody>
                      {users.map(([name,email,role,balance],i)=>(
                        <tr key={i} style={{background:i%2===0?'transparent':'rgba(61,156,69,.04)'}}>
                          <TD><strong>{name}</strong></TD>
                          <TD>{email}</TD>
                          <TD><Badge status={role}/></TD>
                          <TD>{balance}</TD>
                          <TD><Btn variant="primary" size="sm" onClick={()=>nav('deposit')}>Add Funds</Btn></TD>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
            {tab==='contributions'&&(
              <>
                <CardTitle>Contribution Management</CardTitle>
                <div style={{overflowX:'auto'}}>
                  <table style={{width:'100%',borderCollapse:'collapse'}}>
                    <TableHeader cols={['Project','Contributor','Amount','Date','Actions']}/>
                    <tbody>
                      {contribs.map(([proj,contrib,amount,date],i)=>(
                        <tr key={i} style={{background:i%2===0?'transparent':'rgba(61,156,69,.04)'}}>
                          <TD>{proj}</TD><TD>{contrib}</TD><TD>{amount}</TD><TD>{date}</TD>
                          <TD><Btn variant="warning" size="sm" onClick={()=>nav('project-view')}>View Project</Btn></TD>
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

// ─── Page: Owner Dashboard ────────────────────────────────────────────────────

const OwnerDashboard = ({nav}) => {
  const projects = [
    ['Solar Panels for Rural Schools','2025-08-20','€15,000.00','€9,800.00',65,'active'],
    ['Tech Bootcamp for Youth','2025-09-30','€8,000.00','€3,200.00',40,'active'],
    ['Community Urban Garden','2025-06-15','€5,000.00','€5,000.00',100,'funded'],
    ["Children's Art Center",'2025-04-01','€6,000.00','€1,800.00',30,'expired'],
  ];
  const TD = ({children}) => <td style={{padding:'11px 14px',borderBottom:`1px solid ${C.border}`,fontSize:'.875rem'}}>{children}</td>;
  return (
    <div className="fr-app" style={{background:C.bg,minHeight:'100vh'}}>
      <AppHeader user="Marie Dupont" balance="2,400.00" onLogout={()=>nav('landing')} onHome={()=>nav('landing')}/>
      <div style={{padding:'28px 0 48px',width:'90%',maxWidth:1280,margin:'0 auto'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))',gap:16,marginBottom:24}}>
          <StatCard label="Active" value="3" color={C.green} borderColor={C.green}/>
          <StatCard label="Funded" value="2" color={C.blue} borderColor={C.blue}/>
          <StatCard label="Expired" value="1" color={C.red} borderColor={C.red}/>
          <StatCard label="Success Rate" value="33.3%" color={C.orange} borderColor={C.orange}/>
        </div>
        <Card>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:16}}>
            <div className="fr-syne" style={{fontSize:'1.05rem',fontWeight:700,color:C.greenD}}>My Projects</div>
            <Btn variant="primary" size="sm" onClick={()=>nav('create-project')}>+ New Project</Btn>
          </div>
          <div style={{overflowX:'auto'}}>
            <table style={{width:'100%',borderCollapse:'collapse'}}>
              <TableHeader cols={['Project','Deadline','Goal','Collected','Status','Actions']}/>
              <tbody>
                {projects.map(([title,deadline,goal,collected,pct,status],i)=>(
                  <tr key={i} style={{background:i%2===0?'transparent':'rgba(61,156,69,.04)'}}>
                    <TD><strong>{title}</strong></TD>
                    <TD>{deadline}</TD>
                    <TD>{goal}</TD>
                    <TD>
                      {collected}
                      <div style={{height:5,background:C.border,borderRadius:3,marginTop:4,overflow:'hidden',position:'relative'}}>
                        <div style={{position:'absolute',top:0,left:0,height:'100%',width:`${pct}%`,background:C.green,borderRadius:3}}/>
                      </div>
                    </TD>
                    <TD><Badge status={status}/></TD>
                    <TD style={{display:'flex',gap:6,flexWrap:'wrap'}}>
                      <Btn variant="warning" size="sm" onClick={()=>nav('project-view')}>View</Btn>
                      {status==='active'&&<><Btn variant="primary" size="sm">Edit</Btn><Btn variant="danger" size="sm">Del</Btn></>}
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
};

// ─── Page: Contributor Dashboard ──────────────────────────────────────────────

const ContributorDashboard = ({nav}) => {
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
          <Card>
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

// ─── Page: Project View ───────────────────────────────────────────────────────

const ProjectView = ({nav}) => (
  <div className="fr-app" style={{background:C.bg,minHeight:'100vh'}}>
    <AppHeader user="Luc Martin" balance="850.00" onLogout={()=>nav('landing')} onHome={()=>nav('landing')}/>
    <div style={{padding:'28px 0 48px',width:'90%',maxWidth:820,margin:'0 auto'}}>
      <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:20,fontSize:'.85rem',color:C.muted}}>
        <span onClick={()=>nav('contributor')} style={{color:C.green,cursor:'pointer',textDecoration:'none'}}>Dashboard</span>
        <span style={{opacity:.5}}>›</span><span>View Project</span>
      </div>
      <Card>
        <CardTitle>Project Details</CardTitle>
        <FormGroup label="Project Title">
          <Input value="Solar Panels for Rural Schools" readOnly/>
        </FormGroup>
        <FormGroup label="Description">
          <Textarea readOnly value="Bringing renewable energy to off-grid schools in rural Madagascar. This project will install solar panels in 12 schools, providing electricity for lighting, computers, and teaching equipment for over 2,400 students."/>
        </FormGroup>
        <FormGroup label="Funding Goal (€)">
          <Input type="number" value="15000" readOnly/>
          <div style={{color:C.green,fontSize:'.85rem',marginTop:6,fontWeight:600}}>Amount Reached: €9,800.00</div>
        </FormGroup>
        <FormGroup label="Progress">
          <div style={{height:12,background:C.border,borderRadius:4,overflow:'hidden',margin:'8px 0 4px'}}>
            <div style={{height:'100%',width:'65%',background:`linear-gradient(90deg,${C.green},${C.greenL})`,borderRadius:4}}/>
          </div>
          <div style={{textAlign:'right',fontSize:'.8rem',color:C.muted,marginTop:4}}>65% funded</div>
        </FormGroup>
        <FormGroup label="Amount to Fund (€)">
          <Input type="number" placeholder="Enter amount" defaultValue="350" min="1" max="850"/>
        </FormGroup>
        <FormGroup label="Deadline">
          <Input type="date" value="2025-08-20" readOnly/>
        </FormGroup>
        <div style={{display:'flex',justifyContent:'flex-end',gap:10,marginTop:24}}>
          <Btn variant="danger" onClick={()=>nav('contributor')}>Back to Dashboard</Btn>
          <Btn variant="primary">Fund the Project</Btn>
        </div>
      </Card>
    </div>
  </div>
);

// ─── Page: Create Project ─────────────────────────────────────────────────────

const CreateProject = ({nav}) => (
  <div className="fr-app" style={{background:C.bg,minHeight:'100vh'}}>
    <AppHeader user="Marie Dupont" onLogout={()=>nav('landing')} onHome={()=>nav('landing')}/>
    <div style={{padding:'28px 0 48px',width:'90%',maxWidth:820,margin:'0 auto'}}>
      <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:20,fontSize:'.85rem',color:C.muted}}>
        <span onClick={()=>nav('owner')} style={{color:C.green,cursor:'pointer'}}>Dashboard</span>
        <span style={{opacity:.5}}>›</span><span>Create New Project</span>
      </div>
      <Card>
        <CardTitle>Create New Project</CardTitle>
        <FormGroup label="Project Title *">
          <Input placeholder="e.g. Solar Panels for Rural Schools"/>
        </FormGroup>
        <FormGroup label="Description *">
          <Textarea placeholder="Describe your project…"/>
        </FormGroup>
        <FormGroup label="Funding Goal (€) *">
          <Input type="number" placeholder="5000.00" min="1" step="0.01"/>
        </FormGroup>
        <FormGroup label="Deadline *">
          <Input type="date"/>
        </FormGroup>
        <div style={{display:'flex',justifyContent:'flex-end',gap:10,marginTop:24}}>
          <Btn variant="danger" onClick={()=>nav('owner')}>Cancel</Btn>
          <Btn variant="primary">Create Project</Btn>
        </div>
      </Card>
    </div>
  </div>
);

// ─── Page: Deposit ────────────────────────────────────────────────────────────

const DepositPage = ({nav}) => {
  const [pm, setPm] = useState('card');
  const methods = [
    ['card','💳','Credit Card'],
    ['bank','🏦','Bank Transfer'],
    ['mobile','📱','Mobile Pay'],
  ];
  return (
    <div className="fr-app" style={{background:C.bg,minHeight:'100vh'}}>
      <AppHeader user="Admin User" onLogout={()=>nav('landing')} onHome={()=>nav('landing')}/>
      <div style={{padding:'28px 0 48px',width:'90%',maxWidth:820,margin:'0 auto'}}>
        <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:20,fontSize:'.85rem',color:C.muted}}>
          <span onClick={()=>nav('admin')} style={{color:C.green,cursor:'pointer'}}>Dashboard</span>
          <span style={{opacity:.5}}>›</span><span>Deposit Funds</span>
        </div>
        <div style={{background:'linear-gradient(135deg,#3f51b5,#283593)',color:'#fff',borderRadius:8,
          padding:'20px 24px',display:'flex',justifyContent:'space-between',alignItems:'center',
          marginBottom:24,boxShadow:'0 4px 16px rgba(63,81,181,.3)'}}>
          <div>
            <div style={{fontSize:'.85rem',opacity:.8,marginBottom:4}}>Current Balance</div>
            <div className="fr-syne" style={{fontSize:'1.8rem',fontWeight:700}}>€850.00</div>
          </div>
          <div style={{opacity:.6,fontSize:'2rem'}}>💳</div>
        </div>
        <Card>
          <CardTitle>Deposit Funds for User: <span style={{color:C.text,fontWeight:400}}>Luc Martin</span></CardTitle>
          <FormGroup label="Amount (€)">
            <Input type="number" placeholder="0.00" min="1" step="0.01"/>
          </FormGroup>
          <FormGroup label="Payment Method">
            <div style={{display:'flex',flexWrap:'wrap',gap:12,marginBottom:4}}>
              {methods.map(([k,icon,label])=>(
                <div key={k} onClick={()=>setPm(k)}
                  style={{flex:1,minWidth:110,border:`1.5px solid ${pm===k?C.green:C.border}`,
                    borderRadius:8,padding:'14px 12px',textAlign:'center',cursor:'pointer',
                    background:pm===k?'rgba(61,156,69,.06)':'transparent',transition:'all .2s'}}>
                  <div style={{fontSize:'1.5rem'}}>{icon}</div>
                  <div style={{fontWeight:600,fontSize:'.85rem',marginTop:6,color:C.text}}>{label}</div>
                </div>
              ))}
            </div>
          </FormGroup>
          <div style={{display:'flex',justifyContent:'flex-end',gap:10,marginTop:24}}>
            <Btn variant="secondary" onClick={()=>nav('admin')}>Cancel</Btn>
            <Btn variant="primary">Deposit Funds</Btn>
          </div>
        </Card>
      </div>
    </div>
  );
};

// ─── App Root ────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState('landing');
  const nav = (p) => setPage(p);

  const pages = {
    landing: <LandingPage nav={nav}/>,
    login: <LoginPage nav={nav}/>,
    register: <RegisterPage nav={nav}/>,
    admin: <AdminDashboard nav={nav}/>,
    owner: <OwnerDashboard nav={nav}/>,
    contributor: <ContributorDashboard nav={nav}/>,
    'project-view': <ProjectView nav={nav}/>,
    'create-project': <CreateProject nav={nav}/>,
    deposit: <DepositPage nav={nav}/>,
  };

  return (
    <div className="fr-app">
      <Fonts/>
      {pages[page] || pages.landing}
    </div>
  );
}
