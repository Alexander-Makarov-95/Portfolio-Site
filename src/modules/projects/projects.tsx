import CornerDotsBox from "@/components/ui/corner-dots-box";
import { Box, ColoredBox, T, Underline } from "@/components/stitches";
import { styled } from "stitches.config";
import AlarmStatsContainer from "@/modules/index/alarm-stats/alarm-stats-container";

const Projects = () => {
  return (
    <Wrapper>
      <ColoredBox color="cyan14" size="max">
        <Box css={{ display: "flex", justifyContent: "space-between" }}></Box>
      </ColoredBox>
      <Box css={{ h: 15 }} />
      <CornerDotsBox />
      <Background>
        <Box css={{ h: 10 }} />
        <T color="gray12" size="6">
          As a developer and designer, I'm passionate about using technology to
          craft creative solutions. My portfolio highlights projects that blend
          modern digital tools with innovative concepts.
          <br />
          <br />
          Below you will find the Pathfinder's onboard terminal, powered by
          Makarov Corps' SingularityOS. This interface grants you access to a
          curated selection of my completed and pending projects. By clicking on
          any of the icons, you'll be redirected to the corresponding GitHub
          page for more details.
        </T>
      </Background>
      <CornerDotsBox />
      <br />
      <br />
      <AlarmStatsContainer />
    </Wrapper>
  );
};

const Wrapper = styled("div", {
  "@media (max-width: 510px)": {
    textShadow: "0 0 4px BLACK",
    // Add styles bp4 breakpoint here
    // For example, changing the height
    height: "calc(100vh - 375px)",
    // '@media (orientation: landscape)': {
    overflowY: "scroll",
    //add padding to the right
    paddingRight: "20px",
    // },
  },
  marginRight: "-20px",
});

const Background = styled("div", {
  background: "$cyan14",
  padding: "12px",
  display: "flex",
  flexDirection: "column",
  // backdropFilter: 'blur(2.5px)',
  border: "0.1px solid rgba(0, 255, 255, 0.025)",
});

export default Projects;
