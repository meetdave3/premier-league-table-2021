import React from "react";
import styles from "./Table.module.css";
import { CardsScrollView } from "./cards-scroll-view";
import { RenderArrow } from './arrow';

export function Table({ tableData }) {
  const [selectedTeamId, setselectedTeamId] = React.useState(null);

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHeaderRow}>
            <th colSpan="1">#</th>
            <th colSpan="4">Club</th>
            <th colSpan="1">MP</th>
            <th colSpan="1">W</th>
            <th colSpan="1">D</th>
            <th colSpan="1">L</th>
            <th colSpan="1">GF</th>
            <th colSpan="1">GA</th>
            <th colSpan="1">GD</th>
            <th colSpan="1">Pts</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((t) => (
            <React.Fragment key={t.id}>
              <tr>
                <td colSpan="1">{t.place}</td>
                <td colSpan="4">
                  <div
                    onClick={() => setselectedTeamId(t.id)}
                    style={{
                      display: "flex",
                      placeItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <p>{t.name}</p>
                    {t.id === selectedTeamId && <RenderArrow />}
                  </div>
                </td>
                <td colSpan="1">{t.played}</td>
                <td colSpan="1">{t.won}</td>
                <td colSpan="1">{t.draw}</td>
                <td colSpan="1">{t.lost}</td>
                <td colSpan="1">{t.goalsScored}</td>
                <td colSpan="1">{t.goalsConceded}</td>
                <td colSpan="1">{t.goalDifference}</td>
                <td colSpan="1">{t.points}</td>
              </tr>
              {t.id === selectedTeamId && (
                <tr>
                  <td colSpan="13">
                    <CardsScrollView
                      selectedTeamId={selectedTeamId}
                      setselectedTeamIdFn={() => setselectedTeamId(null)}
                    />
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
