import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";


const UpdateUser = () => {
    const loadedUsers = useLoaderData()
    const handleOnSubmit = (e) =>{
       e.preventDefault()
        const form = e.target 
        const name = form.name.value
        const email = form.email.value
        const UpdatedUser = {name,email}
        console.log(UpdatedUser)
        fetch(`http://localhost:5000/users/${loadedUsers._id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdatedUser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
           if (data.modifiedCount == 1) {
            toast.success('User Update Successfully DB!')
           }
        })
    }
    console.log(loadedUsers)
    return (
        <div>
            Update User {loadedUsers.name}
            <form onSubmit={handleOnSubmit} action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
    <div>
      <label htmlFor="email" className="sr-only">Email</label>

      <div className="relative">
        <input
        defaultValue={loadedUsers?.name}
          type="text"
          name="name"
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Name"
        />

      
      </div>
    </div>

    <div>
      <label htmlFor="email" className="sr-only">Password</label>

      <div className="relative">
        <input
          type="email"
          defaultValue={loadedUsers?.email}
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Email"
          name="email"
        />
      </div>
    </div>

    <div className="flex items-center justify-center">
    

      <button
        type="submit"
        className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
      >
        Update User
      </button>
    </div>
  </form>
        </div>
    );
};

export default UpdateUser;