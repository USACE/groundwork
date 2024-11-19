import { composeBundles, createUrlBundle } from "redux-bundler";
import routesBundle from "./routes-bundle";

export default composeBundles(createUrlBundle(), routesBundle);
