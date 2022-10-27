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
