export function ScoreBadge({ match, selectedTeamId }) {
  if (new Date().getTime() <= new Date(match?.timestamp).getTime()) return null;

  let score;
  let bgColor = "#FF0000";
  const { homeScore, awayScore } = match;

  homeScore === awayScore && (bgColor = "#AFAFAF");

  if (match.homeTeam.id === selectedTeamId) {
    score = `${homeScore} - ${awayScore}`;
    homeScore > awayScore && (bgColor = "#00BF00");
  } else {
    score = `${awayScore} - ${homeScore}`;
    awayScore > homeScore && (bgColor = "#00BF00");
  }

  return (
    <div>
      <style jsx>{`
        .badgeOuter {
          margin-left: 10px;
          padding: 5px 15px;
          height: fit-content;
          font-size: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #ff0000;
          border-radius: 5px;
          font-weight: 700;
          color: white;
          text-align: center;
          background: ${bgColor};
        }
        .badgeOuter p {
          margin: 0;
        }
      `}</style>
      <div className="badgeOuter">
        <p>{score}</p>
      </div>
    </div>
  );
}
