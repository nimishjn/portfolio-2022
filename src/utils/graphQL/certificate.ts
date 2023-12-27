import axios from 'axios';
import { tinaAxiosInstance } from 'utils/axiosInstance';

export const fetchCertificateData = async () => {
	const response = await tinaAxiosInstance.post('/api/tina/gql', {
		query: `#graphql
    {
      certificateConnection {
        edges {
          node{
            fromDate
            toDate
            title
            orgName
            imageURL
            description
            skills {
              skill {
                ...on Skill {
                  name
                  icon
                  bgcolor
                  link
                  category
                }
              }
            }
            url
            featured
          }
        }
      }
    }`,
	});
	const data = response?.data?.data?.certificateConnection?.edges?.map(
		(edge: any) => ({ ...edge.node, id: crypto.randomUUID().slice(0, 8) })
	);
  return data;
};
