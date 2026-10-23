
import ProductCard from "./ProductCard";

const products = [
    {
        id: 1,
        name: "Wool Cashmere Sweater Coat",
        price: 398,
        image: "/products/Coat.jpg",

    },
    {
        id: 2,
        name: "Concertina Bag",
        price: 129,
        image: "/products/parts.jpg",
    },
    {
        id: 3,
        name: "Single-Origin Cashmere Beanie",
        price: 98,
        image: "/products/wool-top.jpg",

    },
    {
        id: 4,
        name: "Classic Easy Zipper Tote",
        price: 78,
        image: "/products/tote-bag.jpg",

    },
    {
        id: 5,
        name: "Alpaca Wool Cropped Cardigan",
        price: 248,
        image: "/products/sweater.jpg",

    },
];

export default function FeaturedProducts() {
    return (
        <section
            aria-labelledby="featured-products-title"
            className="px-4 py-6 sm:px-6 lg:px-8"
        >
            {/* Section heading */}
            <div className="mb-8  px-3 py-3">
                <h2
                    id="featured-products-title"
                    className="text-lg font-medium text-neutral-900"
                >
                    What to Wear Now
                </h2>
            </div>

            {/* Responsive product list */}
            <div
                className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2
        [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
        md:grid md:grid-cols-3 md:gap-4 md:overflow-visible
        md:pb-0 lg:grid-cols-4 xl:grid-cols-5"
            >
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </div>
        </section>
    );
}
