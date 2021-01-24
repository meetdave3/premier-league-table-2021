import { ScoreBadge } from "./score-badge";
import styles from "./Card.module.css";

function RenderDetails({ match, selectedTeamId }) {
  if (match?.homeTeam?.id === selectedTeamId) {
    return <p>vs {match.awayTeam.name} (H)</p>;
  } else {
    return <p>vs {match?.homeTeam?.name} (A)</p>;
  }
}

export function DateView({ timestamp }) {
  const dateTime = new Date(timestamp)
    .toString()
    .split(" ")
    .slice(0, 4)
    .join(" ");

  return <p className={styles.date}>{dateTime}</p>;
}

export function Card({ match, selectedTeamId, i }) {
  return (
    <div id={i} className={styles.card}>
      <div className={styles.fixture}>
        <RenderDetails match={match} selectedTeamId={selectedTeamId} />
        <ScoreBadge match={match} selectedTeamId={selectedTeamId} />
      </div>
      <DateView timestamp={match?.timestamp} i={i} />
    </div>
  );
}
