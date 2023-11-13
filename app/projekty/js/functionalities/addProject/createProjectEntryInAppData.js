import {saveDataToLocalStorage} from "../localStorage/saveDataToLocalStorage.js";
import {addProjectElement} from "./addProjectElement.js";
import {appData} from "../../index.js";

export const createProjectEntryInAppData = (value) => {

    const projectID = appData.maxProjectID++;

    appData.projects[projectID] = {
        name: value,
        maxTaskID: 0,
        maxJournalID: 0,
        tasks: {},
        journals: {}
    }

    saveDataToLocalStorage();

    addProjectElement(projectID);
}