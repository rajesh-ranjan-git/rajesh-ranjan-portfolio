import Image from "next/image";
import { ExperienceCardProps } from "@/types/props/sections.props.types";
import Card from "@/components/ui/card/card";

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <Card className="group px-0 py-0" scale="all" animateBorder>
      <div className="text-fixed-light items-center gap-4 sm:gap-5 lg:gap-6 grid grid-cols-[auto_1fr] bg-linear-to-br from-0% via-25% to-100% to-ink shadow-[0_12px_20px_var(--color-surface-shadow)] px-4 sm:px-5 lg:px-6 py-2 sm:py-3 lg:py-4 rounded-t-2xl group-hover:rounded-t-3xl w-full min-h-20 transition-all duration-300 from-accent-purple via-accent-blue">
        <Image
          src={
            experience?.companyImage ||
            "/assets/companies/company-placeholder.jpg"
          }
          alt={`${experience?.company || "Company"} image`}
          width={96}
          height={96}
          className="p-0.5 border-2 border-fixed-light rounded-full w-16 sm:w-18 lg:w-20 h-16 sm:h-18 lg:h-20 object-cover shrink-0"
        />

        <div className="flex flex-col min-w-0">
          <h5>
            <span className="font-alkatra">
              {experience?.designation || "Your role goes here..."}
            </span>
            {experience.company ? (
              <>
                &nbsp;&#124;&nbsp;
                <span className="text-shadow-[2px_2px_var(--color-surface-shadow-strong)] text-accent-pink">
                  {experience.company}
                </span>
              </>
            ) : null}
          </h5>
        </div>
      </div>
      <div className="px-4 sm:px-5 lg:px-6 py-2 sm:py-3 lg:py-4">
        <div className="pl-4 sm:pl-5 lg:pl-6">
          <ul className="flex flex-col gap-2">
            {experience?.details && experience?.details?.length > 1
              ? experience.details.map((data) => {
                  if (!data?.title) return;

                  return (
                    <li
                      key={data.title}
                      className="before:inline-block before:bg-primary before:mr-4 before:rounded-full before:w-2.5 before:h-2.5 -indent-6"
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

export default ExperienceCard;
