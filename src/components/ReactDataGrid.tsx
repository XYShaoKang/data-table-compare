import DataGrid from 'react-data-grid'
import 'react-data-grid/lib/styles.css'
import { DataProps } from '../demo/DataTable.stories'

export const ReactDataGrid = ({ data }: DataProps) => {
  const columns = Object.keys(data[0]).map((key) => ({ key, name: key }))

  return <DataGrid columns={columns} rows={data} />
}
