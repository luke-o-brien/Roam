export const Loading = () => {
  const linecolours = [
    "#B36305",
    "#E32017",
    "#FFD300",
    "#00782A",
    "#F3A9BB",
    "#A0A5A9",
    "#9B0056",
    "#000000",
    "#003688",
    "#0098D4",
    "#95CDBA",
    "#00A4A7",
    "#EE7C0E",
    "#7156A5",
    "#84B817",
  ];
  return (
    <div style={{display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px"}}>
      <div style={{ display: "flex", flexDirection: "row", gap: "5px", flexWrap: "wrap", width: "100px"}}>
        {linecolours.map((line, idx) => (
          <div
            key={idx}
            style={{
              height: "20px",
              width: "20px",
              backgroundColor: line,
              borderRadius: "20px",
            }}
          ></div>
        ))}
      </div>
      <p>loading</p>
    </div>
  );
};
