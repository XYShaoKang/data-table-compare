import type { Meta, StoryObj } from '@storybook/react'
import { Tabulator } from '../components/Tabulator'
import { MaterialReactTable } from '../components/MaterialReactTable'
import { ReactDataTableComponent } from '../components/ReactDataTableComponent'
import { ReactDataGrid } from '../components/ReactDataGrid'
import { AGGrid } from '../components/AGGrid'
import { Handsontable } from '../components/Handsontable'

const data = [
  {
    id: 1,
    name: 'Oli Bob',
    progress: 12,
    gender: 'male',
    rating: 1,
    col: 'red',
    dob: '19/02/1984',
    car: 1,
  },
  {
    id: 2,
    name: 'Mary May',
    progress: 1,
    gender: 'female',
    rating: 2,
    col: 'blue',
    dob: '14/05/1982',
    car: true,
  },
  {
    id: 3,
    name: 'Christine Lobowski',
    progress: 42,
    gender: 'female',
    rating: 0,
    col: 'green',
    dob: '22/05/1982',
    car: 'true',
  },
  {
    id: 4,
    name: 'Brendon Philips',
    progress: 100,
    gender: 'male',
    rating: 1,
    col: 'orange',
    dob: '01/08/1980',
  },
  {
    id: 5,
    name: 'Margret Marmajuke',
    progress: 16,
    gender: 'female',
    rating: 5,
    col: 'yellow',
    dob: '31/01/1999',
  },
  {
    id: 6,
    name: 'Frank Harbours',
    progress: 38,
    gender: 'male',
    rating: 4,
    col: 'red',
    dob: '12/05/1966',
    car: 1,
  },
]
export type Data = (typeof data)['0']
export type DataProps = {
  data: Data[]
}
const Demo = (props: DataProps) => {
  return <></>
}

const meta = {
  title: 'DataTable/Demo',
  tags: [],
  component: Demo,
  args: {
    data,
  },
} satisfies Meta<typeof Demo>

export default meta
type Story = StoryObj<typeof meta>

export const TabulatorDemo: Story = {
  render: (props) => {
    return <Tabulator {...props} />
  },
}
export const MaterialReactTableDemo: Story = {
  render: (props) => {
    return <MaterialReactTable {...props} />
  },
}
export const ReactDataTableComponentDemo: Story = {
  render: (props) => {
    return <ReactDataTableComponent {...props} />
  },
}
export const ReactDataGridDemo: Story = {
  render: (props) => {
    return <ReactDataGrid {...props} />
  },
}
export const AGGridDemo: Story = {
  render: (props) => {
    return <AGGrid {...props} />
  },
}
export const HandsontableDemo: Story = {
  render: (props) => {
    return <Handsontable {...props} />
  },
}
