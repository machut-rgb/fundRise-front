export default function ProjectView ({nav}) {
    return(
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
}