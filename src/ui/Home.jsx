import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="p-3 text-center space-y-16">
      <div className=" text-2xl font-semibold tracking-widest">
        <h1>
          The best pizza.
          <br />
          <span className="text-yellow-500 block pt-2">
            Straight out of the oven, straight to you.
          </span>
        </h1>
      </div>

      <CreateUser />
    </div>
  );
}

export default Home;
