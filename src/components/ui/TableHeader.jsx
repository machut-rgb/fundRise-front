import C from '../../constants/colors';

const TableHeader = ({ cols }) => (
  <thead>
    <tr>
      {cols.map(col => (
        <th key={col} style={{
          padding: '11px 14px', background: C.green, color: '#fff',
          fontFamily: 'Syne,sans-serif', fontWeight: 600,
          fontSize: '.8rem', textTransform: 'uppercase',
          letterSpacing: '.5px', textAlign: 'left',
        }}>
          {col}
        </th>
      ))}
    </tr>
  </thead>
);

export default TableHeader;