const Heading = ({ title, colored }) => {
  return (
    <p
      style={{
        textAlign: "center",
        fontWeight: "600",
        fontSize: "34px",
        lineHeight: "43px",
      }}
    >
      <span style={{ color: "#2D2D2D" }}>{title}</span>{" "}
      <span style={{ color: "#7AB259" }}>{colored}</span>
    </p>
  );
};

export default Heading;
