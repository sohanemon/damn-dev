import { Box, Grid } from "@mui/material";
import Heading from "../components/heading";
import ServiceCard from "../components/service-card";
const services = [
  {
    serviceTitle: "Web & Mobile design",
    details:
      "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
    image: require("../assets/images/icons/service1.png").default.src,
  },
  {
    serviceTitle: "Web & Mobile design",
    details:
      "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
    image: require("../assets/images/icons/service2.png").default.src,
  },
  {
    serviceTitle: "Web & Mobile design",
    details:
      "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
    image: require("../assets/images/icons/service3.png").default.src,
  },
  {
    serviceTitle: "Web & Mobile design",
    details:
      "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
    image: require("../assets/images/icons/service4.png").default.src,
  },
  {
    serviceTitle: "Web & Mobile design",
    details:
      "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
    image: require("../assets/images/icons/service5.png").default.src,
  },
];
const Services = () => {
  return (
    <>
      <Heading title={"Provide awesome"} colored='Services' />
      <Box
        sx={{
          maxWidth: "90%",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "25px",
        }}
      >
        {services.map((_) => {
          return (
            <Box key={_.serviceTitle}>
              <ServiceCard key={_} {..._} />
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default Services;
