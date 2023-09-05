import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="flex bg-yellow-900 text-stone-300 p-4 justify-between items-center font-medium uppercase">
      <p className="flex gap-6">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
