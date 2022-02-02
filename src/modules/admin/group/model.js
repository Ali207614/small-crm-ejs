const { fetch, fetchAll } = require('../../../lib/postgres.js')
const { GROUPS , COUNT_GROUPS } = require('./query.js')



const groups = async ({ page = 1 }) => {
	let limit = 1
	let count = (await fetch(COUNT_GROUPS )).count
	let pages = Math.ceil( count / limit )
	// let page = 1
	// if(currentPage == 'next' && page <= pages){
	// 	page +=1
	// }
	// else if(currentPage == 'prev' && page>1){
	// 	page -=1
	// }


    let groups = await fetchAll(GROUPS , (page -1) * limit , limit )

	return {
		html:'private/admin.html',
		panel:'table-groups.html',
		data:groups,
		pages,
		page
	}
}



module.exports = {
	groups
}