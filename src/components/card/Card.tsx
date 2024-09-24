export const Card = () => {
  return (
    <div className="card">
      <img
        src="src/assets/Rectangle 38.png"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <p style={{ color: "#4B6BFB" }}> Technology</p>
        <p className="card-text">
          The Impact of Technology on the Workplace: How Technology is Changing
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "90%",
            alignItems: "center",
            verticalAlign: "middle",
          }}
        >
          <img src="src/assets/BrunoMartins.png" height={30} width={30} />
          <h6
            style={{
              color: "gray",
              marginTop: 0,
              marginBottom: 0,
            }}
          >
            Jason Francisco
          </h6>
          <h6 style={{ color: "gray", marginTop: 0, marginBottom: 0 }}>
            Aug 20, 2022
          </h6>
        </div>
      </div>
    </div>
  );
};
