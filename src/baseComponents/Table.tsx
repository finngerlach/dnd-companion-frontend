import { Link } from "react-router-dom"

export interface LinkData<T> {
  linkBuilder: (_arg: T) => string
  linkPlacementKey: string
}

interface Props<T> {
  keyLabels: Map<string, string>
  objects: T[]
  rowKey: keyof T
  linkData?: LinkData<T>
}

export default function Table<T>({
  keyLabels,
  objects,
  rowKey,
  linkData
}: Props<T>) {
  const keys = Array.from(keyLabels.keys())
  const labels = Array.from(keyLabels.values())

  return (
    <table className='table-auto min-w-full'>
      <thead className='border-b'>
        <tr>
          {labels.map((label) => (
            <th key={label} scope='col' className='px-6 py-4 text-left'>
              {label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {objects.map((object) => (
          <tr
            key={(object as any)[rowKey]}
            className='bg-white border-b transition duration-200 ease-in-out hover:bg-gray-100'
          >
            {keys.map((key) => (
              <td
                key={`${(object as any)[rowKey]}${key}`}
                className='px-6 py-4 text-left'
              >
                {linkData && linkData.linkPlacementKey === key && (
                  <Link to={linkData.linkBuilder(object)}>
                    {(object as any)[key]}
                  </Link>
                )}
                {(object as any)[key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

Table.defaultProps = {
  linkData: null
}
