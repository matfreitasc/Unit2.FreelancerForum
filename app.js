import { faker } from 'https://cdn.skypack.dev/@faker-js/faker'

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

const createTableRow = (freelancer) => {
	const tableRow = document.createElement('tr')
	const nameCell = document.createElement('td')
	nameCell.classList.add(
		'border-b',
		'border-slate-100',
		'dark:border-slate-700',
		'p-4',
		'pl-8',
		'text-slate-500',
		'dark:text-slate-400'
	)
	nameCell.textContent = freelancer.name

	const occupationCell = document.createElement('td')
	occupationCell.classList.add(
		'border-b',
		'border-slate-100',
		'dark:border-slate-700',
		'p-4',
		'text-slate-500',
		'dark:text-slate-400'
	)
	occupationCell.textContent =
		freelancer.occupation.charAt(0).toUpperCase() +
		freelancer.occupation.slice(1)

	const priceCell = document.createElement('td')
	priceCell.classList.add(
		'border-b',
		'border-slate-100',
		'dark:border-slate-700',
		'p-4',
		'pr-8',
		'text-slate-500',
		'dark:text-slate-400'
	)
	priceCell.textContent = `$ ${freelancer.price}`

	tableRow.appendChild(nameCell)
	tableRow.appendChild(occupationCell)
	tableRow.appendChild(priceCell)

	tableBody.appendChild(tableRow)
}

freelancers.forEach((freelancer) => {
	createTableRow(freelancer)
})

const averagePrice = document.querySelector('#average-price')
const average = freelancers.reduce((acc, curr) => {
	return acc + curr.price
}, 0)
averagePrice.innerHTML = `$ ${Math.round(average / freelancers.length)}`

// updates the Price Average when a new freelancer is added
const updateAveragePrice = () => {
	const average = freelancers.reduce((acc, curr) => {
		return acc + curr.price
	}, 0)
	averagePrice.innerHTML = `$ ${Math.round(average / freelancers.length)}`
}

// Generates a random freelancer and add it to the table when the button is clicked

const button = document.querySelector('#add-freelancer')

button.addEventListener('click', () => {
	const randomFreelancer = {
		name: faker.person.fullName(),
		price: Math.floor(
			// generate a random number between 10 and 100
			Math.random() * (300 - 10) + 10
		),
		occupation: faker.person.jobTitle(),
	}

	freelancers.push(randomFreelancer)
	createTableRow(randomFreelancer)
	updateAveragePrice()
})

// It sorts the table when the table SortPrice is clicked
const sortPrice = document.querySelector('#sortPrice')

sortPrice.addEventListener('click', () => {
	freelancers.sort((a, b) => {
		return a.price - b.price
	})
	tableBody.innerHTML = ''
	freelancers.forEach((freelancer) => {
		createTableRow(freelancer)
	})
})
