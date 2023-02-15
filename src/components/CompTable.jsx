import React from "react";

function CompTable(props) {
	const { products } = props;

	const productKeys = products.length ? Object.keys(products[0].knife) : [];

	const commonSpecs = products.reduce((common, newSpecs) => {
		const sameKeys = [];
		for (const key of common) {
			if (newSpecs.knife[key]) {
				sameKeys.push(key);
			}
		}
		return sameKeys;
	}, productKeys);

	const topRow = [''];

	products.forEach((product) => {
		topRow.push(`${product.knife.Brand} ${product.knife.Model}`);
	});

	const dataRows = commonSpecs.map((spec) => {
		const row = [spec];
		products.forEach((product) => {
			row.push(product.knife[spec]);
		});
		return row;
	});

	return (
		<div>
			<table>
				<tr>
					{topRow.map((text) => (
						<th>{text}</th>
					))}
				</tr>
				{dataRows.map((row) => {
					return (
						<tr>
							{row.map((text) => (
								<td>{text}</td>
							))}
						</tr>
					);
				})}
			</table>
		</div>
	);
}

export default CompTable;
