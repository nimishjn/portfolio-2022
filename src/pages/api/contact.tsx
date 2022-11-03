import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

async function sendEmail({
	fromName = 'Nimish Jain',
	fromEmail = 'nimishjain100701@gmail.com',
	toName = 'Nimish Jain',
	toEmail = 'nimishjain100701@gmail.com',
	subject = "New Message from Nimish Jain's Portfolio",
	textPart = "New Message from Nimish Jain's Portfolio. Couldn't load message.",
	HTMLPart = "New Message from Nimish Jain's Portfolio",
}) {
	const username = process.env.MAILJET_USERNAME || '';
	const password = process.env.MAILJET_PASSWORD || '';

	try {
		const response = await axios.post(
			'https://api.mailjet.com/v3.1/send',
			{
				Messages: [
					{
						From: {
							Email: fromEmail,
							Name: fromName,
						},
						To: [
							{
								Email: toEmail,
								Name: toName,
							},
						],
						Subject: subject,
						TextPart: textPart,
						HTMLPart: HTMLPart,
						CustomID: 'AppGettingStartedTest',
					},
				],
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
				auth: {
					username: username,
					password: password,
				},
			}
		);
		return response;
	} catch (error) {
		throw error;
	}
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'POST') {
		try {
			const {
				name = 'Anonymous',
				email = 'N/A',
				message,
			} = JSON.parse(req.body);
			const mailContentText =
				'Name: ' +
				name +
				'\nEmail: ' +
				email +
				'\nMessage: \n' +
				message;
			const mailContentHTML = `
				<h1>New Message from Nimish Jain's Portfolio</h1>
				<p><b>Name:</b> ${name}</p>
				<p><b>Email:</b> ${email}</p>
				<h3>Message:</h3>
				<p>${message}</p>
			`;
			const mailTo = process.env.EMAIL_TO || 'nimishjain100701@gmail';
			const mailSubject = 'Portfolio Contact Form: Message from ' + name;

			const response = await sendEmail({
				fromName: 'Nimish Jain',
				fromEmail: 'nimishjain1007@gmail.com',
				toName: 'Nimish Jain',
				toEmail: mailTo,
				subject: mailSubject,
				textPart: mailContentText,
				HTMLPart: mailContentHTML,
			});
			res.status(200).json({ message: 'Message sent successfully.' });
		} catch (error) {
			console.log(error);
			res.status(400).json({ message: 'Error sending message.' });
		}
	} else {
		res.redirect('/404');
	}
}
