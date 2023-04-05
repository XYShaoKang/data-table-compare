import DataTable from 'react-data-table-component'

import { DataProps } from '../demo/DataTable.stories'

export const ReactDataTableComponent = ({ data }: DataProps) => {
  const columns = Object.keys(data[0]).map((name) => ({
    name,
    selector: (row: any) => row[name],
  }))

  return <DataTable columns={columns} data={data} />
}
