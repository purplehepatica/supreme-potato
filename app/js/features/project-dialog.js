import {ELEMENTS} from "../elements/elements.js";
import {getCurrentProjectID, getProjectName} from "../data/appData.js";
import {renderTasks} from "./task.js";
import {renderJournals} from "./journal.js";

export const clearProjectDialogMainContainer = () => {

    ELEMENTS.tasksContainer.innerHTML = null;
    ELEMENTS.journalsContainer.innerHTML = null;
}

export const listProjectInfoInDialog = () => {

    const projectID = getCurrentProjectID();

    ELEMENTS.projectDialogName.textContent = getProjectName(projectID);

    renderTasks();
    renderJournals();
}

export const switchProjectTab = (e) => {

    ELEMENTS.journalsTab.removeAttribute("aria-current");
    ELEMENTS.tasksTab.removeAttribute("aria-current");

    e.target.setAttribute("aria-current", "true");

    ELEMENTS.tasksContainer.classList.toggle("hide");
    ELEMENTS.journalsContainer.classList.toggle("hide");

    ELEMENTS.addProjectTaskForm.classList.toggle("hide");
    ELEMENTS.addProjectJournalForm.classList.toggle("hide");
};