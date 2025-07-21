import React from 'react';

const CommonTable = ({ headers, data }) => {
  return (
    <table border="1" cellPadding="8" cellSpacing="0" style={{ width: '100%', marginBottom: '20px' }}>
      <thead>
        <tr>
          {headers.map(header => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {headers.map(header => (
              <td key={header}>
                {typeof row[header] === 'object'
                  ? JSON.stringify(row[header])
                  : String(row[header])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CommonTable;
