import Product from "./product";
const products = [
  {
    icon: "path_to_icon1",
    name: "AgentQL",
    description: "Painless data extraction and web automation",
    tags: ["Developer Tools", "Artificial Intelligence", "Data & Analytics"],
    votes: 389,
  },
  {
    icon: "path_to_icon2",
    name: "MolyPix.AI",
    description: "Create beautiful, easy-to-edit designs you want",
    tags: ["Design Tools", "Artificial Intelligence", "Graphic Design"],
    votes: 347,
  },
  //generate more products
  {
    icon: "path_to_icon3",
    name: "AgentQL",
    description: "Painless data extraction and web automation",
    tags: ["Developer Tools", "Artificial Intelligence", "Data & Analytics"],
    votes: 389,
  },
  {
    icon: "path_to_icon4",
    name: "MolyPix.AI",
    description: "Create beautiful, easy-to-edit designs you want",
    tags: ["Design Tools", "Artificial Intelligence", "Graphic Design"],
    votes: 347,
  },
  {
    icon: "path_to_icon5",
    name: "AgentQL",
    description: "Painless data extraction and web automation",
    tags: ["Developer Tools", "Artificial Intelligence", "Data & Analytics"],
    votes: 389,
  },
  {
    icon: "path_to_icon6",
    name: "MolyPix.AI",
    description: "Create beautiful, easy-to-edit designs you want",
    tags: ["Design Tools", "Artificial Intelligence", "Graphic Design"],
    votes: 347,
  },
];

function Products() {
  return (
    <div className="flex flex-col gap-5 w-full">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
}

export default Products;
