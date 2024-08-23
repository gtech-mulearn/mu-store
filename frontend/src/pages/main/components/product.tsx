import { FaChevronCircleUp } from "react-icons/fa";

function Product({ product }: { product: ProductProps }) {
  return (
    <div className="flex justify-between items-center py-4 p-4 rounded-xl">
      <div className="flex items-center space-x-4">
        <img
          // src={product.icon}
          src="https://images.pexels.com/photos/13925674/pexels-photo-13925674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt={product.name}
          className="w-10 h-10 rounded-lg"
        />
        <div>
          <h3 className="font-bold text-gray-800">
            {product.name} —{" "}
            <span className="font-normal text-gray-600">
              {product.description}
            </span>
          </h3>
          <div className="text-sm text-gray-500">
            {product.tags.join(" • ")}
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-500 text-lg font-semibold">
          {product.votes}
        </span>
        <button className="text-gray-500 hover:text-gray-700">
          <FaChevronCircleUp className="text-black text-3xl" />
        </button>
      </div>
    </div>
  );
}

export default Product;
