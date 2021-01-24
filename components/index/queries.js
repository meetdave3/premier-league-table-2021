import {
  fetchFromGraph,
  tableFragments,
  matchFragments,
} from "../../lib/graph";

async function getTableData() {
  try {
    const { data } = await fetchFromGraph({
      query: `
        query StageTable($stageId: Int!, $sportId: Int!) {
          table(stageId: $stageId, sportId: $sportId){
            ...tableFragment
          }
        }
        ${tableFragments}
      `,
      variables: { stageId: 683940, sportId: 1 },
    });
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function getMatches(teamId) {
  try {
    const { data } = await fetchFromGraph({
      query: `
        query StatsTeamMatches($teamId: Int!, $stageId: Int!) {
          matchesForTeam(teamId: $teamId, stageId: $stageId) {
            id
            name
            groupName
            yearStart
            yearEnd
            hasTable
            tournament {
              id
              title
            }
            matches {
              ...graphStatsTeamMatch
            }
          }
        }
        ${matchFragments}
      `,
      variables: { stageId: 683940, teamId },
    });

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export { getTableData, getMatches };
