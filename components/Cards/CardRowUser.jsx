import React from 'react'
import TableDropdownUsers from '../Dropdowns/TableDropdownUsers'

export default function CardRowUser({name, role,username,phone,email, id, handleOpenModal,handleDeleteUser,handleOpenModalDelete}) {
  return (
    <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <span
                    className={
                      "ml-3 font-bold "
                    }
                  >
                    {name}
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {username}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4">
                  {phone}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4"> 
                  {email}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4">
                  {role == 2 ? "Admin" : "User"}
                </td>
                
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <TableDropdownUsers handleOpenModal={handleOpenModal} id={id} handleDeleteUser={handleDeleteUser} handleOpenModalDelete={handleOpenModalDelete} />
                </td>

              </tr>
  )
}
