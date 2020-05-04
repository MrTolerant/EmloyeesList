import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsersList } from '../redux/reducers/UsersList'

import Head from './head'

const Index = () => {
  const [checkedUsers, setChechedUsers] = useState([])

  const handleCheck = (uuid) => {
    const checked = checkedUsers.includes(uuid)
    setChechedUsers(checked ? checkedUsers.filter((x) => x !== uuid) : [...checkedUsers, uuid])
  }
  const USERS = useSelector((state) => state.usersList.list)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsersList())
  }, [dispatch])

  const checkAll = () => {
    setChechedUsers(
      checkedUsers.length !== USERS.length ? USERS.map((user) => user.login.uuid) : []
    )
  }
  return (
    <>
      <Head title="Employeers list" />
      <div className="flex flex-row w-full">
        <div className="flex flex-col items-center justify-center h-screen mx-auto">
          {!USERS.length ? (
            <>
              <link
                rel="stylesheet"
                href="https://pagecdn.io/lib/font-awesome/5.10.0-11/css/all.min.css"
                integrity="sha256-p9TTWD+813MlLaxMXMbTA7wN/ArzGyW/L7c5+KkjOkM="
                crossOrigin="anonymous"
              />

              <i className="absolute text-indigo-400 opacity-70 fas fa-circle-notch fa-spin fa-5x" />
            </>
          ) : (
            <table className="border-collapse w-full">
              <thead>
                <tr>
                  <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                    <input
                      className="mx-auto leading-tight"
                      type="checkbox"
                      checked={checkedUsers.length === USERS.length}
                      onChange={() => checkAll()}
                    />
                  </th>
                  <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                    Avatar
                  </th>
                  <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                    First name
                  </th>
                  <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                    Last name
                  </th>
                  <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                    Age
                  </th>
                </tr>
              </thead>
              <tbody>
                {USERS.map((user) => (
                  <tr
                    key={user.login.uuid}
                    onClick={() => handleCheck(user.login.uuid)}
                    className={`${
                      checkedUsers.includes(user.login.uuid)
                        ? 'bg-green-200 lg:hover:bg-green-300'
                        : 'bg-white lg:hover:bg-gray-100'
                    } cursor-pointer transition ease-in-out duration-500 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0`}
                  >
                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                      <input
                        className="mx-auto leading-tight"
                        type="checkbox"
                        checked={checkedUsers.includes(user.login.uuid)}
                        onChange={() => handleCheck(user.login.uuid)}
                      />
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                      <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                        Avatar
                      </span>
                      <div className="mx-auto flex-shrink-0 w-10 h-10">
                        <img
                          className="w-full h-full rounded-full"
                          src={user.picture.thumbnail}
                          alt=""
                        />
                      </div>
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                      <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                        First name
                      </span>

                      {user.name.first}
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                      <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                        Last name
                      </span>
                      {user.name.last}
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                      <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                        Age
                      </span>
                      {user.dob.age}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                  <td
                    colSpan="5"
                    className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static"
                  >
                    <textarea
                      className="text-sm text-center resize-none  rounded focus:outline-none focus:shadow-outline w-full"
                      placeholder={USERS.filter((user) => checkedUsers.includes(user.login.uuid))
                        .map((user) => user.name.first)
                        .join(', ')}
                      disabled
                    />
                  </td>
                </tr>
              </tfoot>
            </table>
          )}
        </div>
      </div>
    </>
  )
}

Index.propTypes = {}

export default Index
