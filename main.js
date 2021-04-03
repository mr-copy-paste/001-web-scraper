const axios = require('axios').default;
const cheerio = require('cheerio');

const URL_ROGUE = 'https://www.rogueeurope.eu/monster-lite-wallmount-eu';

async function main() {
	console.log('Scrapping has begun!');

	const { data } = await axios.get(URL_ROGUE);

	const $ = cheerio.load(data);

	const mlw4 = $(
		'#super-product-table > div.grouped-item.product-purchase-wrapper-16559 > div.bin-stock-availability > div > div > button'
	)
		.text()
		.trim();

	if (mlw4 === 'Notify Me') {
		console.log('Not yet in stock.');
	} else {
		console.log('IN STOCK!!!');
		process.exit(1);
	}
}

main();
