import C from '../../constants/colors';

export default function Card({ children, style: {} = {} })
{
    return (
        <div style={{
            background: C.surface, borderRadius: 8,
            boxShadow: '0 1px 4px rgba(0,0,0,.10),0 2px 8px rgba(0,0,0,.06)',
            padding: 24, marginBottom: 20, ...style,
        }}>
            {children}
        </div>
    );
}

export function CardTitle({ children }) {
    return (
        <div className="fr-syne" style={{
            fontSize: '1.05rem', fontWeight: 700, color: C.greenD,
            borderBottom: `1px solid ${C.border}`, paddingBottom: 12, marginBottom: 18,
        }}>
            {children}
        </div>
    );
}