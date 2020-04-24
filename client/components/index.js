import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { getProjectsList } from '../redux/reducers/repositories'
import USERS from './USERS'

import Head from './head'

const Index = () => {
  // const list = useSelector((state) => state.repositories.list)
  // const currentUser = useSelector((state) => state.repositories.user)
  // const dispatch = useDispatch()
  // const { user } = useParams()

  // useEffect(() => {
  //     if (currentUser !== user) dispatch(getProjectsList(user))
  // }, [dispatch, user, currentUser])

  return (
    <>
      <Head title="Projects list" />
      <div className="flex flex-row w-full">
        <div className="flex flex-col items-center justify-center h-screen mx-auto">
          <table className="border-collapse w-full">
            <thead>
              <tr>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Select
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
                  className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
                >
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    <input className="mx-auto leading-tight" type="checkbox" />
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
          </table>
        </div>
      </div>
    </>
  )
}

Index.propTypes = {}

export default Index
