import Image from "next/image"

const Hero = () => {
  return (
    <div>
        <div className="container">
              <div>
                    
                    <div>
                          <Image 
                               src={'/pizza.png'} 
                               alt="Pizza image" 
                               fill
                               loading="eager"
                               priority
                               className="object-contain "
                           />
                    </div>

                    <div>
                        <h1> Slice into Happiness </h1>
                    </div>

              </div>
        </div>
    </div>
  )
}

export default Hero