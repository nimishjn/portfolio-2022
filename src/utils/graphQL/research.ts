import axios from 'axios';
import { tinaAxiosInstance } from 'utils/axiosInstance';

export const fetchResearchData = async () => {
	const response = await tinaAxiosInstance.post('/api/tina/gql', {
		query: `#graphql
    {
      researchConnection {
        edges {
          node{
            title
            img
            abstract
            link
            publisher
            date
            id
          }
        }
      }
    }`,
	});
	const data = response?.data?.data?.researchConnection?.edges?.map(
		(edge: any) => ({ ...edge.node, id: crypto.randomUUID().slice(0, 8) })
	);
	return data;
};
