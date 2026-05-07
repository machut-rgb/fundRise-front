import C from '../../constants/colors';

const Btn = ({ children, variant = 'primary', size = 'md', onClick, className = '' }) => {
  const bg = {
    primary:  C.green,
    secondary: C.pink,
    danger:   C.red,
    warning:  C.orange,
    ghost:    'transparent',
    outline:  'transparent',
  }[variant];

  const clr   = variant === 'ghost' ? C.green : variant === 'outline' ? 'rgba(255,255,255,.9)' : '#fff';
  const border = variant === 'ghost'
    ? `1.5px solid ${C.green}`
    : variant === 'outline'
    ? '1.5px solid rgba(255,255,255,.6)'
    : 'none';
  const pad = size === 'sm' ? '5px 12px' : '9px 18px';
  const fz  = size === 'sm' ? '0.8rem'   : '0.875rem';

  return (
    <button
      onClick={onClick}
      className="fr-btn"
      style={{
        background: bg, color: clr, border, padding: pad,
        fontSize: fz, fontWeight: 600, borderRadius: 8, cursor: 'pointer',
        display: 'inline-flex', alignItems: 'center', gap: 6,
        whiteSpace: 'nowrap', transition: 'all .2s',
      }}
    >
      {children}
    </button>
  );
};

export default Btn;