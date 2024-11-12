import { cn } from "@/lib/utils";
import { CircleDollarSign, MapPin, Tag } from "lucide-react";
import Image from "next/image";
import { jobListData } from "./job-list.data";

type Job = (typeof jobListData)[number];

type Props = {
  className?: string;
  data: Job;
};

const JobCard = (props: Props) => {
  const { className, data } = props;

  return (
    <div
      className={cn(
        "cursor-pointer rounded-xl border border-gray-200 dark:border-gray-800 hover:border-primary transition-all duration-300 relative shadow-sm",
        className
      )}
    >
      <div className="relative">
        <Image
          src={data.companyBanner}
          alt={data.company}
          width={210}
          height={90}
          className="aspect-[21/9] w-full rounded-t-xl"
          quality={100}
        />
        <div className="absolute inset-0 rounded-t-lg bg-gradient-to-b from-transparent to-black/60" />
        <Image
          src={data.companyLogo}
          alt={data.company}
          width={48}
          height={48}
          className="size-12 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full shadow-xl"
        />
      </div>

      <div className="mt-4 p-3">
        <h3 className="text-lg font-semibold mt-2 text-center">{data.title}</h3>
        <p className="text-sm text-gray-500/70 font-bold text-center dark:text-primary">{data.company}</p>

        <p className="text-sm text-black dark:text-gray-300 mt-2 line-clamp-5">
          {data.description}
        </p>

        <div className="flex flex-col gap-1 mt-2">
          <p>
            <CircleDollarSign className="size-4 text-primary inline-block mr-1" />
            <small className="text-sm text-gray-600 dark:text-white ml-1 font-semibold">
              {data.salary}
            </small>
          </p>
          <p>
            <MapPin className="size-4 text-primary inline-block mr-1" />
            <small className="text-sm text-gray-600 dark:text-white ml-1 font-semibold">
              {data.location}
            </small>
          </p>
          <p>
            <Tag className="size-4 text-primary inline-block mr-1" />
            <small className="text-sm text-gray-600 dark:text-white ml-1 font-semibold">
              {data.tags.join(", ")}
            </small>
          </p>
        </div>
      </div>

      {/* <div className="border-t border-gray-200 p-3">
        <p className="text-sm text-gray-500">{data.location}</p>
      </div> */}
    </div>
  );
};

export default JobCard;
