import axios from "axios";

export async function subgraphQuery(query) {
  try {
    // Replace YOUR-SUBGRAPH-URL with the url of your subgraph
    const SUBGRAPH_URL = "YOUR-SUBGRAPH-URL";
    const response = await axios.post(
      "https://api.thegraph.com/subgraphs/name/tnsqjahong/learnweb3",
      {
        query,
      }
    );
    if (response.data.errors) {
      console.error(response.data.errors);
      throw new Error(`Error making subgraph query ${response.data.errors}`);
    }
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw new Error(`Could not query the subgraph ${error.message}`);
  }
}
