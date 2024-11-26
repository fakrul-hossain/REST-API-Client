import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";


const User = () => {
    const loadedUsers = useLoaderData()
    const [users,setUser] = useState(loadedUsers)
    const handleDelete = (id) =>{
        console.log(id)
        fetch(`http://localhost:5000/users/${id}`,{
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.deletedCount == 1) {
                toast.success('Delete Successfully DB!')
            }
            const remainingUser  = users.filter(user => user._id !== id)
            setUser(remainingUser)
          })
    }
    return (
        <div>
            <p>User {users.length}</p>
            <div className="">
                {
                    users.map(user => <div key={user._id}>
                            <div className="flex justify-center items-center">
                            <div className=" overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Delete/Update</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td className="flex gap-3"><button onClick={() => handleDelete(user._id)} className="btn btn-error">Delete</button>
        <Link to={`/update/${user._id}`}><button className="btn btn-secondary">Update</button></Link>
        </td>
      </tr>
    </tbody>
  </table>
</div>
                            </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default User;