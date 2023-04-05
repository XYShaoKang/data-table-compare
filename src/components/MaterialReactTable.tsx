import { useMemo } from 'react'
import ReactTable from 'material-react-table'
import type { MRT_ColumnDef } from 'material-react-table'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Data, DataProps } from '../demo/DataTable.stories'

export const MaterialReactTable = ({ data }: DataProps) => {
  const columns = useMemo<MRT_ColumnDef<Data>[]>(
    () =>
      Object.keys(data[0]).map((header) => ({
        accessorKey: header,
        header,
      })) as any,
    []
  )

  return (
    <ReactTable
      columns={columns}
      data={data}
      enableRowSelection //enable some features
      enableColumnOrdering
      enableGlobalFilter={false} //turn off a feature
    />
  )
}
