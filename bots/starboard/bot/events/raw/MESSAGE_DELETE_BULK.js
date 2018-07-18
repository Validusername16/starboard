exports.run = async (data, client) => {
	for (const id of data.ids)
		await client.starboard.delete(id, data.channel_id);
};

/**
{
	ids: [
		'401786960865394708',
		'401786725791170575',
		'401786724402987010',
		'401786512036986900',
		'401786510707392536',
		'401786415253553173',
		'401786357036613642',
		'401786320042590214',
		'401786306163900417',
		'401784446744788994'
	],
	channel_id: '398605469406593025'
}
*/