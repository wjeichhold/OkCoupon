var Sequelize = require('sequelize');
const sequelize = new Sequelize('okc','root', '', {
  host: 'localhost',
  dialect: 'mysql'
 //  dialect:  'postgres',
 // protocol: 'postgres',
 // port:     match[4],
 // host:     match[3],
 // logging: false,
 // dialectOptions: {
 //     ssl: true
 // },
 //  pool: {
 //  	max: 5,
 //  	min: 0,
 //  	idle: 10000
 //  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// image url
// title
// price 
// discount
// merchant (name)
// fine print and description - saved and then provided on saved page…
// url


const Coupons = sequelize.define('coupons', {
	imgUrl: {
		type: Sequelize.STRING
	},
	title: {
		type: Sequelize.STRING
	},
	price: {
		type: Sequelize.INTEGER
	},
	discount: {
		type: Sequelize.INTEGER
	},
  merchant: {
    type: Sequelize.STRING
  },
  finePrint: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  url: {
    type: Sequelize.STRING
  },
  saved:{
    type: Sequelize.STRING
  }
})

Coupons.sync({force: false})

module.exports = {
  sequelize: sequelize,
  Coupons: Coupons,
}
