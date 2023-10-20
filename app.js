const freelancers = [
	{ name: 'Dr. Slice', price: 25, occupation: 'gardener' },
	{ name: 'Dr. Pressure', price: 51, occupation: 'programmer' },
	{ name: 'Prof. Possibility', price: 43, occupation: 'teacher' },
	{ name: 'Prof. Prism', price: 81, occupation: 'teacher' },
	{ name: 'Dr. Impulse', price: 43, occupation: 'teacher' },
	{ name: 'Prof. Spark', price: 76, occupation: 'programmer' },
	{ name: 'Dr. Wire', price: 47, occupation: 'teacher' },
	{ name: 'Prof. Goose', price: 72, occupation: 'driver' },
]

const tableBody = document.querySelector('#table-body')

freelancers
	.sort((a, b) => a.price - b.price)
	.forEach((freelancer) => {
		const tableRow = document.createElement('tr')
		tableBody.innerHTML += `
    					<td
						class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"
					>
						${freelancer.name}
					</td>
					<td
						class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400"
					>
						${
							// first letter to uppercase
							freelancer.occupation.charAt(0).toUpperCase() +
							freelancer.occupation.slice(1)
						}
					</td>
					<td
						class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"
					>
                       $ ${freelancer.price}
					</td>
                `
		tableBody.appendChild(tableRow)
	})

const averagePrice = document.querySelector('#average-price')
const average = freelancers.reduce((acc, curr) => {
	return acc + curr.price
}, 0)
averagePrice.innerHTML = `$ ${Math.round(average / freelancers.length)}`
