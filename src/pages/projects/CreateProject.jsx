export default function CreateProject({nav}) {return(
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
}
