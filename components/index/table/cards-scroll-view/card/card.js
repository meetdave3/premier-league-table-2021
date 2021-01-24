import { ScoreBadge } from "./score-badge";
import styles from "./Card.module.css";

export function DateView({ dateTime }) {
  return (
    <p className={styles.date}>
      {dateTime.toString().split(" ").slice(0, 4).join(" ")}
    </p>
  );
}

export function Card({ match, selectedTeamId, i }) {
  const { homeScore, awayScore } = match;
  const dateTime = new Date(match?.timestamp);

  let details = "";
  let score;
  let bgColor = "#FF0000";

  homeScore === awayScore && (bgColor = "#AFAFAF");

  if (match?.homeTeam?.id === selectedTeamId) {
    details = `vs ${match.awayTeam.name} (H)`;
    score = `${homeScore} - ${awayScore}`;
    homeScore > awayScore && (bgColor = "#00BF00");
  } else {
    details = `vs ${match.homeTeam.name} (A)`;
    score = `${awayScore} - ${homeScore}`;
    awayScore > homeScore && (bgColor = "#00BF00");
  }

  return (
    <div id={i} className={styles.card}>
      <div className={styles.fixture}>
        {details && <p>{details}</p>}
        {new Date().getTime() >= dateTime.getTime() && (
          <ScoreBadge bgColor={bgColor} score={score} />
        )}
      </div>
      <DateView dateTime={dateTime} i={i} />
    </div>
  );
}
