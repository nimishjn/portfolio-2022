import axios from 'axios';
import { tinaAxiosInstance } from 'utils/axiosInstance';

export const fetchAboutData = async () => {
	const response = await tinaAxiosInstance.post('/api/tina/gql', {
		query: `#graphql
    {
      aboutConnection {
        edges {
          node{
          content
            id
          }
        }
      }
    }`,
	});
	const data = response?.data?.data?.aboutConnection?.edges[0].node?.content;
	return data;
};
