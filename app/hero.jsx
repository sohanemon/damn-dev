/* eslint-disable @next/next/no-img-element */
import styled from "@emotion/styled";
import { Box, Button, Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";

const Heading = styled(Typography)`
  font-weight: 700;
  font-size: 48px;
  line-height: 60px;
  letter-spacing: 0.01em;
  color: #111430;
`;

const SubHeading = styled(Typography)`
  line-height: 24px;
  letter-spacing: 0.005em;
  color: #000000;
`;
const Hero = () => {
  return (
    <Container
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        backgroundColor: "primary.sub",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 75%, 0% 100%)",
        pb: 15,
      }}
    >
      <Stack spacing={2}>
        <Heading>Let’s Grow Your Brand To The Next Level</Heading>
        <SubHeading>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo
          ipsum duis laoreet maecenas. Feugiat{" "}
        </SubHeading>
        <Button variant='contained' sx={{ width: "max-content" }}>
          Hire now
        </Button>
      </Stack>
      <Box>
        <img
          loading='lazy'
          style={{ width: "100%" }}
          src={require("../assets/images/Frame.png").default.src}
          alt=''
        />
      </Box>
    </Container>
  );
};

export default Hero;
