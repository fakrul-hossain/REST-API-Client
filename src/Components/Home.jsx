import toast from "react-hot-toast";


const Home = () => {


    const handleOnSubmit = (e) =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = {name,email}

        fetch('http://localhost:5000/users',{
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            if (data.insertedId) {
              toast.success('User Added Successfully DB!')
            }
        })
      

        console.log(user)
        form.reset()
    }
    return (
        <div>
 
<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-lg text-center">
    <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

    <p className="mt-4 text-gray-500">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
      ipsa culpa autem, at itaque nostrum!
    </p>
  </div>

  <form onSubmit={handleOnSubmit} action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
    <div>
      <label htmlFor="email" className="sr-only">Email</label>

      <div className="relative">
        <input
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
        Add User
      </button>
    </div>
  </form>
</div>
        </div>
    );
};

export default Home;