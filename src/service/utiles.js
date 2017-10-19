export const defaultDay = () => {
	const dictionary = {
		Jan: '01',
		Feb: '02',
		Mar: '03',
		Apr: '04',
		May: '05',
		Jun: '06',
		Jul: '07',
		Agu: '08',
		Sep: '09',
		Oct: '10',
		Nov: '11',
		Dec: '12'
	}
	const date = new Date().toString().split(' ')
	const queryDate = `${date[3]}-${dictionary[date[1]]}-${date[2]}`
	return queryDate
}