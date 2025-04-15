import { Project } from "@/app/state/api";
import React from "react";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="rounded border p-4 shadow">
      <h3>{project?.name || "No Name"}</h3>
      <p>{project?.description || "No Description"}</p>
      <p>Start Date: {project?.startDate || "N/A"}</p>
      <p>End Date: {project?.endDate || "N/A"}</p>
    </div>
  );
};

export default ProjectCard;
