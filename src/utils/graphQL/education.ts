import axios from 'axios';
import { tinaAxiosInstance } from 'utils/axiosInstance';

export const fetchEducationData = async () => {
	const response = await tinaAxiosInstance.post('/api/tina/gql', {
		query: `#graphql
    {
      educationConnection {
        edges {
          node{
            fromDate
            toDate
            orgName
            imageURL
            description
            skills
            url
            featured
            id
          }
        }
      }
    }`,
	});
	const data = response?.data?.data?.educationConnection?.edges?.map(
		(edge: any) => ({ ...edge.node, id: crypto.randomUUID().slice(0, 8) })
	);
	return data;
};
