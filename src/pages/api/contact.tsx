import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'POST') {
		console.log('hello post');
	} else {
		res.status(404).json({
			message: 'Not Found',
		});
	}
}

// TODO: Connection to database and send email for each POST request
// TODO: Figure out a way out for Error 404