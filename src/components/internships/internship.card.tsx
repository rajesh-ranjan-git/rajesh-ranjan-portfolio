import Image from "next/image";
import { InternshipCardProps } from "@/types/props/sections.props.types";
import {
  getExperienceDuration,
  getExperienceTimeLine,
} from "@/helpers/owner.helpers";
import Card from "@/components/ui/card/card";

const InternshipCard = ({ internship }: InternshipCardProps) => {
  const timeline = getExperienceTimeLine(
    internship.startMonth,
    internship.startYear,
    internship.endMonth,
    internship.endYear,
    internship.isCurrent,
  );
  const duration = getExperienceDuration(
    internship.startMonth,
    internship.startYear,
    internship.endMonth,
    internship.endYear,
    internship.isCurrent,
  );

  return (
    <Card className="group px-0 py-0" scale="all" animateBorder>
      <div className="text-fixed-light items-center gap-4 sm:gap-5 lg:gap-6 grid grid-cols-[auto_1fr] bg-linear-to-br from-0% via-25% to-100% to-ink shadow-[0_12px_20px_var(--color-surface-shadow)] px-4 sm:px-5 lg:px-6 py-2 sm:py-3 lg:py-4 rounded-t-2xl group-hover:rounded-t-3xl w-full min-h-20 transition-all duration-300 from-accent-purple via-accent-blue">
        <Image
          src={
            internship?.companyImage ||
            "/assets/companies/company-placeholder.jpg"
          }
          alt={`${internship?.company || "Company"} image`}
          width={96}
          height={96}
          className="p-0.5 border-2 border-fixed-light rounded-full w-16 sm:w-18 lg:w-20 h-16 sm:h-18 lg:h-20 object-cover shrink-0"
        />

        <div className="flex flex-col min-w-0">
          <h5 className="font-alkatra">
            {internship?.designation || "Your role goes here..."}
          </h5>
          {internship?.company ? (
            <h6 className="text-shadow-[2px_2px_var(--color-surface-shadow-strong)] text-accent-pink">
              {internship.company}
            </h6>
          ) : null}
          {timeline ? (
            <p className="text-shadow-[2px_2px_var(--color-surface-shadow-strong)]">
              {timeline}
              {duration ? (
                <span className="text-shadow-[2px_2px_var(--color-surface-shadow-strong)] text-sm">
                  &nbsp;({duration})
                </span>
              ) : null}
            </p>
          ) : null}
        </div>
      </div>
      <div className="flex flex-col gap-4 px-4 sm:px-5 lg:px-6 py-2 sm:py-3 lg:py-4">
        {internship?.techStack && internship?.techStack?.length > 1 ? (
          <div className="flex flex-wrap items-center gap-2 w-full">
            {internship.techStack.slice(0, 10).map((tech) => (
              <div
                className="text-fixed-light bg-linear-to-br from-ink via-ink p-1 px-3 border border-alternate-bg rounded-full w-max font-semibold text-xs bg-accent-blue to-accent-purple"
                key={tech}
              >
                {tech}
              </div>
            ))}
          </div>
        ) : null}

        <div className="pl-4 sm:pl-5 lg:pl-6">
          <ul className="flex flex-col gap-2">
            {internship?.details && internship?.details?.length > 1
              ? internship.details.map((data) => {
                  if (!data?.title) return;

                  return (
                    <li
                      key={data.title}
                      className="before:inline-block before:bg-primary sm:before:mr-4 before:mr-2 before:rounded-full before:w-2.5 before:h-2.5 -indent-4 sm:-indent-6"
                    >
                      <b>{data.title} : </b> {data?.description}
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default InternshipCard;
