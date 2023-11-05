import React from 'react'

export default function CardRow() {
  return (
    <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    src="/img/bootstrap.jpg"
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  ></img>{" "}
                  <span
                    className={
                      "ml-3 font-bold "
                    }
                  >
                    Argon Design System
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  $2,500 USD
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, neque esse? Hic impedit suscipit nemo. Similique laudantium veritatis ipsum rem ipsa autem, omnis nemo atque ducimus optio dolorem, modi est. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam repellendus aspernatur atque praesentium veniam eaque veritatis animi repellat rem vero, aliquam, quam suscipit libero distinctio molestiae laudantium dicta ullam adipisci.
                </td>
                
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                  {/* <TableDropdown /> */}
                </td>
              </tr>
  )
}
