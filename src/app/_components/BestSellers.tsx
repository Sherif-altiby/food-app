import MainHeading from '@/components/main-heading';
import Menu from '@/components/menu';
import { getBestSellers } from '@/server/db/product';


async function BestSellers() {
  
  const bestSellers  = await getBestSellers()

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