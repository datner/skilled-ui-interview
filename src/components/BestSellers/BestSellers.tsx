import React from "react";
import { Product, ProductProps } from "./Product";

export interface BestSellersProps {
	products: Omit<ProductProps, "onClick">[];
	onClick(name: string): void;
}

export function BestSellers(props: BestSellersProps) {
	const { products, onClick } = props;
	return (
		<div className="p-8 bg-white rounded-xl">
			<h3>Bestsellers</h3>
			<div className="flex flex-col mt-6">
				{products.map((product) => (
					<div className="m2" key={product.name}>
						<Product {...product} onClick={onClick} />
					</div>
				))}
			</div>
		</div>
	);
}
