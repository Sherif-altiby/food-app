import { Routes } from "@/constatnts"
import Link from "../link"
import Navbar from "./Navbar"

const Header = () => {
  return (
    <header className="h-[80px] flex" >
         <div className="container flex  items-center justify-between">
              <Link href={Routes.ROOT} className="text-2xl text-primary" > 🍕 Pizza </Link>
              <Navbar />
         </div>
    </header>
  )
}

export default Header