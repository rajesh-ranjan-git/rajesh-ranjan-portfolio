import { AboutTextProps } from "@/types/props/sections.props.types";

const AboutText = ({ title, description, details }: AboutTextProps) => {
  return (
    <div className="w-full">
      <h2 className="text-shadow-[2px_2px_black] font-arima font-bold text-balance text-accent-blue">
        {title}
      </h2>

      <p className="mt-3 text-pretty">{description}</p>

      <table className="mt-8 w-full table-fixed">
        <colgroup>
          <col className="w-28 sm:w-32 md:w-36 lg:w-44 xl:w-48" />
          <col />
        </colgroup>
        <tbody>
          {details.map((item) => (
            <tr key={item.label}>
              <th
                scope="row"
                className="py-2 pr-6 w-48 font-semibold text-left align-top"
              >
                {item.label}
              </th>

              <td className="py-2 wrap-break-word align-top">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AboutText;
