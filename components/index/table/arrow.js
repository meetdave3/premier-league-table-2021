export function RenderArrow() {
  return (
    <div>
      <style jsx>{`
        .arrow {
          margin-left: 20px;
          margin-top: 5px;
          max-width: 20px;
          cursor: pointer;
        }

        @keyframes rotateOpen {
          from {
            transform: rotate(-180deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .arrow img {
          animation: rotateOpen 0.6s ease;
        }
      `}</style>
      <div className="arrow">
        <img width="20px" src="/down-arrow.png" />
      </div>
    </div>
  );
}