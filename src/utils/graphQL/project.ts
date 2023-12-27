import axios from 'axios';
import { tinaAxiosInstance } from 'utils/axiosInstance';

export const fetchProjectData = async () => {
	const response = await tinaAxiosInstance.post('/api/tina/gql', {
		query: `#graphql
    {
      projectConnection {
        edges {
          node{
            fromDate
            toDate
            projectName
            orgName
            imageURL
            description
            repoUrl
            viewUrl
            techStack {
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
            featured
          }
        }
      }
    }`,
	});
	const data = response?.data?.data?.projectConnection?.edges?.map(
		(edge: any) => ({ ...edge.node, id: crypto.randomUUID().slice(0, 8) })
	);
  return data;
};
