export function ScoreBadge({ bgColor, score }) {
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
