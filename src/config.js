const host = 'localhost'
const PORT = process.env.PORT || 5000

const pgConfig = {
	host: 'localhost',
	port: 5432,
	user:'postgres',
	password: '010203',
	database: 'score'
}

module.exports = { 
	pgConfig,
	PORT,
	host,
}