function App() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* 8. Navigation Bar */}
      <nav className="bg-white shadow p-4 flex flex-col md:flex-row md:justify-between gap-4">
        <h1 className="text-xl font-bold">Tailwind UI</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Features</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </div>
      </nav>

      {/* 10. Hero Section */}
      <section className="p-8 text-center">
        {/* 3. Responsive Text */}
        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold 
          bg-gradient-to-r from-blue-500 to-purple-600 
          text-transparent bg-clip-text">
          Tailwind CSS Exploration
        </h2>

        {/* 2. Image with Hover Effect */}
        <div className="mt-6 flex justify-center">
          <img
            src="https://via.placeholder.com/300"
            alt="Hero"
            className="rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </section>

      {/* 1. Button Styling */}
      <section className="text-center p-6">
        <button className="px-6 py-2 rounded bg-gray-200 
          hover:bg-gray-300 active:bg-gray-400 transition">
          Click Me
        </button>
      </section>

      {/* 4. List Styling */}
      <section className="p-6">
        <ul className="list-disc list-inside pl-5 space-y-2">
          <li className="hover:text-blue-600">Tailwind Utilities</li>
          <li className="hover:text-blue-600">Responsive Design</li>
          <li className="hover:text-blue-600">Hover & Focus Effects</li>
        </ul>
      </section>

      {/* 9. Responsive Grid Layout */}
      <section className="p-8">
        <h3 className="text-2xl font-semibold mb-4">Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* 5. Card Component */}
          {["One", "Two", "Three"].map((item) => (
            <div key={item} className="bg-white p-4 rounded-xl shadow">
              <img
                src="https://via.placeholder.com/200"
                alt="Card"
                className="rounded mb-3"
              />
              <h4 className="font-bold text-lg">Feature {item}</h4>
              <p className="text-gray-600 mb-3">
                Simple card styled with Tailwind CSS.
              </p>
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Table Styling */}
      <section className="p-8 overflow-x-auto">
        <table className="w-full border border-gray-300 bg-white">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Role</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {["A", "B", "C", "D"].map((item, index) => (
              <tr key={index} className="odd:bg-gray-50 hover:bg-blue-50">
                <td className="border p-2">{item}</td>
                <td className="border p-2">Developer</td>
                <td className="border p-2">Active</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* 7. Input Form */}
      <section className="p-8">
        <h3 className="text-2xl font-semibold mb-4 text-center">Contact Form</h3>
        <form className="bg-white p-6 rounded-xl shadow max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Submit
          </button>
        </form>
      </section>

    </div>
  );
}

export default App;
