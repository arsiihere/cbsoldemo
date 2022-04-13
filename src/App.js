import {
  MainHeader,
  HeroSection,
  SecondHero,
  InformationSection,
  DesignerSection,
  MemberShipSection,
  InviteSection,
} from "components/layout";
import { Container } from "@mui/material";

function App() {
  return (
    <div className="App">
      <MainHeader />
      <Container maxWidth="lg" disableGutters>
        <HeroSection />
        <SecondHero />
      </Container>
      <DesignerSection />
      <MemberShipSection />
      <InviteSection />
    </div>
  );
}

export default App;
