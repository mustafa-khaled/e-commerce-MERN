import MainHeading from "@/components/main-heading";
import Menu from "@/components/menu";

const data = [
  {
    id: 1,
    name: "Product 1",
    description: "Product 1 description",
    basePrice: 15,
    image: "https://source.unsplash.com/300x200/?product,1",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Product 2 description",
    basePrice: 34,
    image: "https://source.unsplash.com/300x200/?product,2",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Product 3 description",
    basePrice: 22,
    image: "https://source.unsplash.com/300x200/?product,3",
  },
];

export default function BestSellers() {
  return (
    <section className="p-6">
      <MainHeading
        title="Our Best Sellers"
        description="This is a dummy description"
      />

      <Menu data={data} />
    </section>
  );
}
