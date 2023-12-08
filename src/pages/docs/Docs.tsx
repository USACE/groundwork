import { Container } from "../../../lib/components/layout/Container";
import { Grid, GridCol } from "../../../lib/components/layout/Grid";

import Sidebar from "./Sidebar";
import ContainerDocs from "./layout/ContainerDocs";
import FlexDocs from "./layout/FlexDocs";
import GroundworkCoreStylePropsDocs from "./types/GroundworkCoreStylePropsDocs";
import GroundworkSizeDocs from "./types/GroundworkSizeDocs";

type PageMap = {
  [key: string]: JSX.Element;
};

const pages: PageMap = {
  container: <ContainerDocs />,
  flex: <FlexDocs />,
  "core-style-props": <GroundworkCoreStylePropsDocs />,
  "groundwork-size": <GroundworkSizeDocs />,
};

interface DocsProps {
  routeParams: {
    page: string;
  };
}

const Docs = ({ routeParams }: DocsProps) => {
  const page = routeParams.page || "container";
  return (
    <Container fluid $pt={1}>
      <Grid>
        <GridCol span={2}>
          <Sidebar />
        </GridCol>
        <GridCol span={10}>{pages[page]}</GridCol>
      </Grid>
    </Container>
  );
};

export default Docs;
