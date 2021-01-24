const matchFragments = `
  fragment graphStatsTeamMatch on TeamMatch {
    id
    matchTypeId
    title
    timestamp
    date
    stageId
    homeScore
    awayScore
    sportId
    result {
      homeScore45
      homeScore90
      awayScore45
      awayScore90
    }
    homeTeam {
      ...teamMatchTeam
    }
    awayTeam {
      ...teamMatchTeam
    }
    matchStatusId
    tvChannels {
      id
      nid
      name
      sportId
      progId
      broadcastTime
    }
  }
  fragment teamMatchTeam on MatchTeam {
    name
    id
    shortName
    trimmedName
  }
`;

export { matchFragments };
