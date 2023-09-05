import { useState } from "react";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="sm:text-lg">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        className="block w-64 outline-none
         border-stone-100  ring focus:ring-yellow-400 m-auto p-2 rounded-full"
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== "" && (
        <div>
          <button>Start ordering</button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
