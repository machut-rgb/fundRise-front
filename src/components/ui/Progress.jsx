import C from '../../constants/colors';

const Progress = ({ pct }) => (
  <div style={{ height: 7, background: C.border, borderRadius: 4, overflow: 'hidden', margin: '8px 0 4px' }}>
    <div style={{
      height: '100%',
      width: `${pct}%`,
      background: `linear-gradient(90deg,${C.green},${C.greenL})`,
      borderRadius: 4,
    }} />
  </div>
);

export default Progress;