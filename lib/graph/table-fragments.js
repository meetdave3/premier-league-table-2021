const tableFragments = `
  fragment tableFragment on Table {
    tableDividingLines {
      typeId
      fromPlace
      toPlace
      type
      id
    }
    stage {
      id
      name
      yearStart
      yearEnd
    }
    teams {
      place
      played
      won
      draw
      lost
      goalsScored
      goalsConceded
      goalDifference
      points
      changeSinceLastRound
      name
      trimmedName
      id
    }
  }
`;

export { tableFragments };
