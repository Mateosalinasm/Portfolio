import { useState } from "react";
import { Disclosure, RadioGroup, Tab } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Carousel } from "@mantine/carousel";

const product = [
  {
    dwello: [
      {
        src: "public/images/projects/Dwello/dwello 1.png",
      },
      {
        src: "public/images/projects/Dwello/dwello 5.png",
      },
      {
        src: "public/images/projects/Dwello/dwello 2.png",
      },
      {
        src: "public/images/projects/Dwello/dwello 3.png",
      },
      {
        src: "public/images/projects/Dwello/dwello 4.png",
      },
      {
        src: "public/images/projects/Dwello/dwello 6.png",
      },
      {
        src: "public/images/projects/Dwello/dwello 7.png",
      },
    ],
  },
  {
    fitlogic: [
      {
        src: "public/images/projects/Fitlogioc/fitlogic 1.png",
      },
      {
        src: "public/images/projects/Fitlogioc/fitlogic 2.png",
      },
      {
        src: "public/images/projects/Fitlogioc/fitlogic 3.png",
      },
      {
        src: "public/images/projects/Fitlogioc/fitlogic 4.png",
      },
      {
        src: "public/images/projects/Fitlogioc/fitlogic 5.png",
      },
      {
        src: "public/images/projects/Fitlogioc/fitlogic 6.png",
      },
      {
        src: "public/images/projects/Fitlogioc/fitlogic 7.png",
      },
    ],
  },
];
// const products = {
//   name: "Zip Tote Basket",
//   price: "$140",
//   rating: 4,
//   images: [
//     {
//       id: 1,
//       name: "Angled view",
//       src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
//       alt: "Angled front view with bag zipped and handles upright.",
//     },
//     // More images...
//   ],
//   colors: [
//     {
//       name: "Washed Black",
//       bgColor: "bg-gray-700",
//       selectedColor: "ring-gray-700",
//     },
//     { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
//     {
//       name: "Washed Gray",
//       bgColor: "bg-gray-500",
//       selectedColor: "ring-gray-500",
//     },
//   ],
//   description: `
//     <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
//   `,
//   details: [
//     {
//       name: "Features",
//       items: [
//         "Multiple strap configurations",
//         "Spacious interior with top zip",
//         "Leather handle and tabs",
//         "Interior dividers",
//         "Stainless strap loops",
//         "Double stitched construction",
//         "Water-resistant",
//       ],
//     },
//     // More sections...
//   ],
// };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProjectTest() {
  const [selectedColor, setSelectedColor] = useState(product.src);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <Tab.Group as="div" className="flex flex-col-reverse">
            {/* Image selector */}
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
              <Tab.List className="grid grid-cols-4 gap-6">
                {product.map((image, index) => (
                  <Tab
                    key={index}
                    className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                  >
                    {({ selected }) => (
                      <>
                        <span className="absolute inset-0 overflow-hidden rounded-md">
                          {}
                          <img
                            src={image.src}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </span>
                        <span
                          className={classNames(
                            selected ? "ring-indigo-500" : "ring-transparent",
                            "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"
                          )}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </div>

            <Tab.Panels className="aspect-h-1 aspect-w-1 w-full">
              {product.map((image, index) => (
                <Tab.Panel key={index}>
                  {product[Object.keys(product)[0]].map((image, imageIndex) => (
                    <img
                      key={imageIndex}
                      src={image.src}
                      alt=""
                      className="h-full w-full object-cover object-center sm:rounded-lg"
                    />
                  ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {product.name}
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                {product.price}
              </p>
            </div>

            {/* Reviews */}
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        product.rating > rating
                          ? "text-indigo-500"
                          : "text-gray-300",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{product.rating} out of 5 stars</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div
                className="space-y-6 text-base text-gray-700"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
