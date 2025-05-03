import MainHeading from '@/components/main-heading';
import Menu from '@/components/menu';

const bestSellers = [
    {
        id: crypto.randomUUID(),
        name: "Pizza",
        description: "Hello",
        basePrice: 42,
        image: "/pizza.png"
    },
    {
        id: crypto.randomUUID(),
        name: "Pizza",
        description: "Hello",
        basePrice: 42,
        image: "/pizza.png"
    },
    {
        id: crypto.randomUUID(),
        name: "Pizza",
        description: "Hello",
        basePrice: 42,
        image: "/pizza.png"
    },
]

async function BestSellers() {
  return (
    <section>
      <div className='container'>
        <div className='text-center mb-4'>
          <MainHeading
            subTitle={"checkOut"}
            title={"OurBestSellers"}
          />
        </div>
        <Menu items={bestSellers} />
      </div>
    </section>
  );
}

export default BestSellers;