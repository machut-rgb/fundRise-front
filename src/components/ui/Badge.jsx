const statusStyles = {
  active:      { bg: 'rgba(76,175,80,.12)',  color: '#2e7535' },
  funded:      { bg: 'rgba(63,81,181,.12)',  color: '#3f51b5' },
  expired:     { bg: 'rgba(244,67,54,.12)',  color: '#c62828' },
  pending:     { bg: 'rgba(255,152,0,.12)',  color: '#b36200' },
  owner:       { bg: 'rgba(33,150,243,.12)', color: '#1565c0' },
  contributor: { bg: 'rgba(76,175,80,.12)',  color: '#2e7535' },
  completed:   { bg: 'rgba(63,81,181,.12)',  color: '#3f51b5' },
};

const Badge = ({ status }) => {
  const { bg, color } = statusStyles[status] || { bg: '#eee', color: '#333' };
  return (
    <span style={{
      background: bg, color,
      display: 'inline-block', padding: '3px 10px',
      borderRadius: 20, fontSize: '.73rem',
      fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.5px',
    }}>
      {status}
    </span>
  );
};

export default Badge;