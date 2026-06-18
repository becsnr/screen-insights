import { getScreenTimeData } from "../services/getScreenTimeData";  

import { getMostUsed } from "./mostUsed";

// APP + USADO
export function dayHighlights() {
    const app = getMostUsed(getScreenTimeData())[0];


    return app;
}