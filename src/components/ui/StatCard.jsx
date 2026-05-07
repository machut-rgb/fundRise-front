import C from '../../constants/colors';

const StatCard = ({ label, value, color = C.green, borderColor }) => (
  <div className="fr-stat" style={{
    background: C.surface, borderRadius: 8,
    boxShadow: '0 1px 4px rgba(0,0,0,.10),0 2px 8px rgba(0,0,0,.06)',
    padding: 20, textAlign: 'center',
    borderTop: borderColor ? `3px solid ${borderColor}` : undefined,
  }}>
    <div style={{
      fontSize: '.78rem', textTransform: 'uppercase',
      letterSpacing: '.6px', color: C.muted, fontWeight: 600, marginBottom: 4,
    }}>
      {label}
    </div>
    <div className="fr-syne" style={{ fontSize: '1.8rem', fontWeight: 700, margin: '6px 0', color }}>
      {value}
    </div>
  </div>
);

export default StatCard;