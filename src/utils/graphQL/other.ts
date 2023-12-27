import axios from 'axios';
import { tinaAxiosInstance } from 'utils/axiosInstance';

export const fetchOtherData = async () => {
	const response = await tinaAxiosInstance.post('/api/tina/gql', {
		query: `#graphql
    {
      otherConnection {
        edges {
          node{
            fromDate
            toDate
            title
            type
            imageURL
            description
            url
            techStack
            featured
          }
        }
      }
    }`,
	});
	const data = response?.data?.data?.otherConnection?.edges?.map(
		(edge: any) => ({ ...edge.node, id: crypto.randomUUID().slice(0, 8) })
	);
  return data;
};
