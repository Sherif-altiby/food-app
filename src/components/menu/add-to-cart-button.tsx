"use client";
import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { formatCurrency } from "@/lib/formatter";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { RadioGroupItem } from "../ui/radio-group";
import { Extra, Size } from "@/generated/prisma";
import { ProductWithRelations } from "@/types/product";

const AddTocCartButton = ({ item }: { item: ProductWithRelations }) => {
  const handleAddToCart = () => {
    // dispatch(
    //   addCartItem({
    //     basePrice: item.basePrice,
    //     id: item.id,
    //     image: item.image,
    //     name: item.name,
    //     size: selectedSize,
    //     extras: selectedExtras,
    //   })
    // );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          size="lg"
          className="mt-4 text-white rounded-full !px-8"
        >
          <span>Add To Cart</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[80vh] overflow-y-auto">
        <DialogHeader className="flex items-center">
          <Image src={item.image} alt={item.name} width={200} height={200} />
          <DialogTitle>{item.name}</DialogTitle>
          <DialogDescription className="text-center">
            {item.description}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-10">
          <div className="space-y-4 text-center">
            <Label htmlFor="pick-size">Pick your size</Label>
            <PickSize sizes={item.sizes} item={item} />
          </div>
          <div className="space-y-4 text-center">
            <Label htmlFor="add-extras">Any extras?</Label>
            <Extras extras={item.extras} />
          </div>
        </div>
        <DialogFooter>
          {/* {quantity === 0 ? ( */}
          <Button
            type="submit"
            onClick={handleAddToCart}
            className="w-full h-10"
          >
            Add to cart
            {/* {formatCurrency(totalPrice)} */}
          </Button>
          {/* ) : ( */}
          {/* <ChooseQuantity
            quantity={quantity}
            item={item}
            selectedSize={selectedSize}
            selectedExtras={selectedExtras}
          />
        )} */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddTocCartButton;

function PickSize({
  sizes,
  item,
}: {
  sizes: Size[];
  item: ProductWithRelations;
}) {
  return (
    <RadioGroup defaultValue="comfortable">
      {sizes.map((size) => (
        <div
          key={size.id}
          className="flex items-center space-x-2 border border-gray-100 rounded-md p-4"
        >
          <RadioGroupItem
            value={"12"}
            checked={false}
            // onClick={() => setSelectedSize(size)}
            id={size.id}
          />
          <Label htmlFor={size.id}>
            {size.name} {formatCurrency(size.price + item.basePrice)}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
function Extras({ extras, }: { extras: Extra[]; }) {
   
  return extras.map((extra) => (
    <div
      key={extra.id}
      className="flex items-center space-x-2 border border-gray-100 rounded-md p-4"
    >
      <Checkbox
        id={extra.id}
        // onClick={() => handleExtra(extra)}
        // checked={Boolean(selectedExtras.find((e) => e.id === extra.id))}
      />
      <Label
        htmlFor={extra.id}
        className="text-sm text-accent font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {extra.name} {formatCurrency(extra.price)}
      </Label>
    </div>
  ));
}

const ChooseQuantity = ({
  quantity,
  item,
  selectedExtras,
  selectedSize,
}: {
  quantity: number;
  selectedExtras: any[];
  selectedSize: any;
  item: ProductWithRelations;
}) => {
  // const dispatch = useAppDispatch();
  return (
    <div className="flex items-center flex-col gap-2 mt-4 w-full">
      <div className="flex items-center justify-center gap-2">
        <Button
          variant="outline"
          // onClick={() => dispatch(removeCartItem({ id: item.id }))}
        >
          -
        </Button>
        <div>
          <span className="text-black">{quantity} in cart</span>
        </div>
        <Button
          variant="outline"
          // onClick={() =>
          //   dispatch(
          //     addCartItem({
          //       basePrice: item.basePrice,
          //       id: item.id,
          //       image: item.image,
          //       name: item.name,
          //       extras: selectedExtras,
          //       size: selectedSize,
          //     })
          //   )
          // }
        >
          +
        </Button>
      </div>
      <Button
        size="sm"
        //   onClick={() => dispatch(removeItemFromCart({ id: item.id }))}
      >
        Remove
      </Button>
    </div>
  );
};
