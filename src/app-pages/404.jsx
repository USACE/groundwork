import { Button, H2 } from "../../lib";

const BASE_URL = import.meta.env.BASE_URL;

function NotFound() {
  return (
    <div className="gw-flex gw-justify-center gw-mt-12">
      <div className="gw-flex gw-flex-col gw-justify-center gw-items-center">
        <div>
          <H2 className="gw-font-semibold">
            We cant find a page that matches the URL
          </H2>
        </div>
        <div className="gw-flex gw-gap-3 gw-mt-8">
          <Button color="green" href={BASE_URL + "#/"}>
            Go Home
          </Button>
          <Button color="teal" href={BASE_URL + "#/docs"}>
            Go to Documentation
          </Button>
          <Button color="blue" onClick={() => window.history.back()}>
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
export { NotFound };
