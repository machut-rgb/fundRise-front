export default function DepositPage({nav}) {
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
