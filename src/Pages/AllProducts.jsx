import React from "react";
import products from "../data";
import ProductCard from "../Components/ProductCard";
import { Link } from "react-router-dom";

export default function AllProducts() {
    return (
        <section className="flex flex-col items-center gap-4 px-10 pb-24 bg-gray-50">
            <div className="flex self-start mt-4 ml-4 gap-x-1 text-neutral-600">
                <Link to="/">Home</Link>
                <p>/</p>
                <p>All Coffee</p>
            </div>
            <h2 className="mx-auto my-8 text-4xl font-bold text-neutral-800 sm:text-5xl">
                All Coffee
            </h2>
            <div className="flex flex-wrap justify-center max-w-6xl gap-10">
                {/* mapping over product array and generating a card for each element in the data array */}
                {products.map(product => {
                    return <ProductCard 
                                key={product.id} 
                                id={product.id}
                                img={product.image}
                                bean={product.bean}
                                title={product.title}
                                price={product.price}
                            />
                })}
            </div>
        </section>
    )
}
