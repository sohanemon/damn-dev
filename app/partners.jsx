import { Box } from "@mui/system";

const partners = [
  require("../assets/images/logos/airbnb.png").default.src,
  require("../assets/images/logos/google.png").default.src,
  require("../assets/images/logos/netflix.png").default.src,
  require("../assets/images/logos/slack.png").default.src,
  require("../assets/images/logos/uber.png").default.src,
];
console.log(partners);
const Partners = () => {
  return (
    <Box
      maxWidth={"md"}
      margin='auto'
      gap={2}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
      container
    >
      {partners.map((_) => (
        <img style={{ width: "100px" }} key={_} loading='lazy' src={_} alt='' />
      ))}
    </Box>
  );
};

export default Partners;
