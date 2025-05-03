import Link from "@/components/link";
import { buttonVariants } from "@/components/ui/button";
import { Routes } from "@/constatnts";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="section-gap" >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="md:py-12">
            <h1> Slice into Happiness </h1>
            <p className="text-accent my-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
              sapiente eum repudiandae cumque tenetur accusantium laudantium
              odit soluta beatae possimus doloribus, iure nemo sint, facere
              nihil necessitatibus molestias ducimus amet!{" "}
            </p>
            <div className="flex items-center gap-4">
              <Link
                href={`/${Routes.MENU}`}
                className={`${buttonVariants({
                  size: 'lg',
                })} space-x-2 !px-4 !rounded-full uppercase`}
              >
                 Order Now
                <ArrowRightCircle className={`!w-5 !h-5`} />
              </Link>
              <Link
                href={`/${Routes.ABOUT}`}
                className="flex gap-2 items-center text-black hover:text-primary duration-200 transition-colors font-semibold"
              >
                 Learn More
                <ArrowRightCircle className={`!w-5 !h-5`} />
              </Link>
            </div>
          </div>

          <div className="relative ">
            <Image
              src={"/pizza.png"}
              alt="Pizza image"
              fill
              loading="eager"
              priority
              className="object-contain "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
