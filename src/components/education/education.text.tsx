import { EducationTextProps } from "@/types/props/sections.props.types";
import {
  getDegree,
  getEducationTimeLine,
  getLocation,
} from "@/helpers/owner.helpers";

const EducationText = ({ details }: EducationTextProps) => {
  const degree = getDegree(details?.degree, details?.stream);
  const timeline = getEducationTimeLine(details?.startYear, details?.endYear);
  const location = getLocation(details?.location);

  return (
    <div className="z-10 flex flex-col justify-center gap-2 min-h-48">
      {degree ? (
        <p className="font-semibold text-lg uppercase">{degree}</p>
      ) : null}

      {timeline ? (
        <div className="text-fixed-light bg-linear-to-br from-ink via-ink p-1 px-3 rounded-full w-max font-semibold text-xs bg-accent-blue to-accent-purple">
          {timeline}
        </div>
      ) : null}

      {details?.name ? (
        <p className="pt-2 lg:pt-4 font-bold">{details?.name}</p>
      ) : null}
      {location ? <p className="text-sm">{location}</p> : null}

      <p className="pt-2 lg:pt-4 text-secondary text-sm uppercase">
        {details.gradingSystem ? (
          <span className="font-semibold">
            {details.gradingSystem === "percent"
              ? "percentage"
              : details.gradingSystem}
            :
          </span>
        ) : null}
        &nbsp;
        {details.score ? (
          <span>
            {details.score}
            {details.gradingSystem
              ? details.gradingSystem === "percent"
                ? "%"
                : details.gradingSystem
              : null}
          </span>
        ) : null}
      </p>
    </div>
  );
};

export default EducationText;
