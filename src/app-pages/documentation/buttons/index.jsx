import { UsaceBox, H4, Text } from "../../../../lib";
import DocsPage from "../_docs-page";

const pageBreadcrumbs = [
  {
    text: "Documentation",
    href: "/#/docs",
  },
  {
    text: "Buttons",
    href: "/#/docs/buttons",
  },
];

function Buttons() {
  return (
    <DocsPage breadcrumbs={pageBreadcrumbs}>
      <UsaceBox title="Buttons">
        <div>
          <Text className="gw:pb-6">
            Buttons components are used to help users find their way around the
            site. They include breadcrumbs and other components that help users
            understand where they are in the site and how to get around.
          </Text>
          <H4>Components</H4>
          <ul>
            <li>
              <a href="/docs/buttons/generic-buttons">
                Generic Buttons - All the flavors that come out of the box.
              </a>
            </li>
            <li>
              <a href="/docs/buttons/ok-cancel">
                Ok/Cancel - When you need a simple acknowledgement or a chance
                to back out.
              </a>
            </li>
            <li>
              <a href="/docs/buttons/delete-confirm">
                Delete/Confirm - When you need to make sure the user wants to
                delete something.
              </a>
            </li>
          </ul>
        </div>
      </UsaceBox>
    </DocsPage>
  );
}

export default Buttons;
export { Buttons };
