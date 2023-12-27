import { TinaNodeBackend, LocalBackendAuthProvider } from '@tinacms/datalayer';
import { AuthJsBackendAuthProvider, TinaAuthJSOptions } from 'tinacms-authjs';

import databaseClient from '../../../../tina/__generated__/databaseClient';
import { IncomingMessage, ServerResponse } from 'http';

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === 'true';

const handler = TinaNodeBackend({
	authProvider: isLocal
		? LocalBackendAuthProvider()
		: AuthJsBackendAuthProvider({
				authOptions: TinaAuthJSOptions({
					databaseClient: databaseClient,
					secret: process.env.NEXTAUTH_SECRET!,
				}),
		  }),
	databaseClient,
});

const ReqRes = (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
	// Modify the request here if you need to
	return handler(req, res);
};

export default ReqRes;
