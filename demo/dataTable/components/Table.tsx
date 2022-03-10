import { Header, Rows } from '../../../src/hooks/useTable/useTable'

interface TableProps {
  headers: Header[]
  rows: Rows[]
}

export const Table = ({ headers, rows }: TableProps) => {
  return (
    <table>
      <thead>
        <tr>
          {headers.map(({ id, text, handleSortEvent }) => (
            <th key={id} className={''} onClick={handleSortEvent}>
              {text}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(({ data, key }) => (
          <tr key={key}>
            {data.map(({ cell, key }) => (
              <td key={key} className={''}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
