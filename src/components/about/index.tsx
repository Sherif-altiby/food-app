import { Routes } from '@/constatnts';
import MainHeading from '../main-heading';

async function About() {
  return (
    <section className='section-gap' id={Routes.ABOUT}>
      <div className='container text-center'>
        <MainHeading subTitle={"About Us"} title={"Sherif Altiby"} />
        <div className='text-accent max-w-md mx-auto mt-4 flex flex-col gap-4'>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse neque necessitatibus nobis mollitia temporibus laborum, velit aut architecto expedita, quod sed, ut corporis? Sapiente fugiat hic ut pariatur molestias totam. </p>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse neque necessitatibus nobis mollitia temporibus laborum, velit aut architecto expedita, quod sed, ut corporis? Sapiente fugiat hic ut pariatur molestias totam. </p>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse neque necessitatibus nobis mollitia temporibus laborum, velit aut architecto expedita, quod sed, ut corporis? Sapiente fugiat hic ut pariatur molestias totam. </p>
        </div>
      </div>
    </section>
  );
}

export default About;