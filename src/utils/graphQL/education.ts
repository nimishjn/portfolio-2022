import axios from 'axios';

export const fetchEducationData = async () => {
	const response = await axios.post('http://localhost:4001/graphql', {
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
