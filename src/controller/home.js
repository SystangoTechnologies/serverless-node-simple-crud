'use strict';

/**
 * Show home page.
 */
exports.homePage = async (req, res) => {
	return res.render('index', { title: 'Server Less Example' });
}
