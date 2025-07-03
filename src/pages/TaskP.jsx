import React from "react";
import TaskManager from "../components/TaskManager";
import Footer from "../components/Footer";

function TaskPage(){
    return(
        <div className="pt-10 px-6 w-full overflow-x-hidden">
            <TaskManager />
            <Footer />
        </div>
    )
}

export default TaskPage;