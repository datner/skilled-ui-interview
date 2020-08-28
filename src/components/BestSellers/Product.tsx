import React from "react";

export interface ProductProps {
	img: string;
	name: string;
	brand: string;
	price: number;
	onClick(name: string): void;
}

export function Product(props: ProductProps) {
	const { name, img, brand, price, onClick } = props;
	return (
		<div
			onClick={() => onClick(name)}
			className="flex px-4 py-4 cursor-pointer w-84 hover:bg-peach-bg active:bg-orange-200 rounded-xl"
		>
			<img className="w-24 h-24" src={img} alt="a shoe" />
			<div className="ml-6">
				<p className="m-0 font-medium leading-none tracking-wider text-peach-text">
					{name}
				</p>
				<p className="m-0 text-sm font-light tracking-wider text-gray-500">
					{brand}
				</p>
				<p className="m-0 mt-3 font-semibold">{price}$</p>
			</div>
		</div>
	);
}
