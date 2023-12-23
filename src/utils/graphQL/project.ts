import axios from 'axios';

export const fetchProjectData = async () => {
	const response = await axios.post('http://localhost:4001/graphql', {
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
