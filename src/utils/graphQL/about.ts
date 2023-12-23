import axios from 'axios';

export const fetchAboutData = async () => {
	const response = await axios.post('http://localhost:4001/graphql', {
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
