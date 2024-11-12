import React from "react";
import JobCard from "./job-card";
import { jobListData } from "./job-list.data";

type Props = {};

const JobList = (props: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 mds:grid-cols-3 lg:grid-cols-4 gap-4">
      {jobListData.map((job) => (
        <JobCard key={job.id} data={job} className="" />
      ))}
    </div>
  );
};

export default JobList;
