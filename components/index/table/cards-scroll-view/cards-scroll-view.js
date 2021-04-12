import React from "react";
import { Card } from "./card";
import styles from "../Table.module.css";
import { getMatches } from "../../queries";
import { LoadingView } from "./loading-view";
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

function Cards({ selectedTeamId }) {
  const [loading, setloading] = React.useState(true);
  const [matches, setMatches] = React.useState(null);
  const [error, seterror] = React.useState(null);

  React.useEffect(async () => {
    async function fetchMatches() {
      setloading(true);

      try {
        const {
          matchesForTeam: { matches },
        } = await getMatches(selectedTeamId);
        matches && matches.length > 0 && setMatches(matches);
        setloading(false);

        if (document) {
          const element = document.getElementById(31);
          element.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest",
          });
        }
      } catch (e) {
        seterror(e);
      }
    }

    fetchMatches();
  }, [selectedTeamId]);

  if (error) {
    return Error(error); // Because Error boundaries can only catch errors in lifecycle methods
  }

  if (loading === true) {
    return <LoadingView />;
  }

  return (
    <div className={styles.cardsList}>
      {matches &&
        matches.map((m, i) => (
          <Card key={m.id} i={i} selectedTeamId={selectedTeamId} match={m} />
        ))}
    </div>
  );
}

export function CardsScrollView({ selectedTeamId }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} key={selectedTeamId}>
      <Cards selectedTeamId={selectedTeamId} />
    </ErrorBoundary>
  );
}
