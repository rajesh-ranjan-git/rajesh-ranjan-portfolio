import { basicDetails, education } from "@/config/owner.config";
import { socialMedia } from "@/config/social.config";

export const getFullName = () => {
  if (basicDetails.firstName && basicDetails.lastName)
    return `${basicDetails.firstName} ${basicDetails.lastName}`;

  if (basicDetails.firstName) return basicDetails.firstName;

  return "John Doe";
};

export const getSingleSocialLink = (id: string) => {
  switch (id) {
    case socialMedia.phone.id:
      return {
        id: socialMedia.phone.id,
        label: socialMedia.phone.label,
        userName: basicDetails.phone,
        url: `${socialMedia.phone.urlPrefix}/${basicDetails.phone}/`,
      };

    case socialMedia.github.id:
      return {
        id: socialMedia.github.id,
        label: socialMedia.github.label,
        userName: basicDetails.social.github,
        url: `${socialMedia.github.urlPrefix}/${basicDetails.social.github}/`,
      };

    case socialMedia.google.id:
      return {
        id: socialMedia.google.id,
        label: socialMedia.google.label,
        userName: basicDetails.social.google,
        url: `${socialMedia.google.urlPrefix}${basicDetails.social.google}`,
      };

    case socialMedia.stackOverflow.id:
      return {
        id: socialMedia.stackOverflow.id,
        label: socialMedia.stackOverflow.label,
        userName: basicDetails.social.stackOverflow,
        url: `${socialMedia.stackOverflow.urlPrefix}/${basicDetails.social.stackOverflow}/`,
      };

    case socialMedia.linkedin.id:
      return {
        id: socialMedia.linkedin.id,
        label: socialMedia.linkedin.label,
        userName: basicDetails.social.linkedin,
        url: `${socialMedia.linkedin.urlPrefix}/${basicDetails.social.linkedin}/`,
      };

    case socialMedia.twitter.id:
      return {
        id: socialMedia.twitter.id,
        label: socialMedia.twitter.label,
        userName: basicDetails.social.twitter,
        url: `${socialMedia.twitter.urlPrefix}/${basicDetails.social.twitter}/`,
      };

    case socialMedia.youtube.id:
      return {
        id: socialMedia.youtube.id,
        label: socialMedia.youtube.label,
        userName: basicDetails.social.youtube,
        url: `${socialMedia.youtube.urlPrefix}${basicDetails.social.youtube}/`,
      };

    case socialMedia.facebook.id:
      return {
        id: socialMedia.facebook.id,
        label: socialMedia.facebook.label,
        userName: basicDetails.social.facebook,
        url: `${socialMedia.facebook.urlPrefix}/${basicDetails.social.facebook}/`,
      };

    case socialMedia.instagram.id:
      return {
        id: socialMedia.instagram.id,
        label: socialMedia.instagram.label,
        userName: basicDetails.social.instagram,
        url: `${socialMedia.instagram.urlPrefix}/${basicDetails.social.instagram}/`,
      };

    default:
      return null;
  }
};

export const getSocialLinks = () => {
  const socialLinks = [];

  if (basicDetails.social.github)
    socialLinks.push(getSingleSocialLink(socialMedia.github.id));

  if (basicDetails.social.google)
    socialLinks.push(getSingleSocialLink(socialMedia.google.id));

  if (basicDetails.social.stackOverflow)
    socialLinks.push(getSingleSocialLink(socialMedia.stackOverflow.id));

  if (basicDetails.social.linkedin)
    socialLinks.push(getSingleSocialLink(socialMedia.linkedin.id));

  if (basicDetails.social.twitter)
    socialLinks.push(getSingleSocialLink(socialMedia.twitter.id));

  if (basicDetails.social.youtube)
    socialLinks.push(getSingleSocialLink(socialMedia.youtube.id));

  if (basicDetails.social.facebook)
    socialLinks.push(getSingleSocialLink(socialMedia.facebook.id));

  if (basicDetails.social.instagram)
    socialLinks.push(getSingleSocialLink(socialMedia.instagram.id));

  return socialLinks;
};

export const getLocation = (location?: {
  city?: string;
  state?: string;
  country?: string;
}) => {
  const city =
    location && location.city ? location.city : basicDetails.location.city;
  const state =
    location && location.state ? location.state : basicDetails.location.state;
  const country =
    location && location.country
      ? location.country
      : basicDetails.location.country;

  if (city && state && country) return `${city}, ${state}, ${country}`;

  if (city && state) return `${city}, ${state}`;

  if (city && country) return `${city}, ${country}`;

  if (state && country) return `${state}, ${country}`;

  if (city) return city;

  if (state) return state;

  if (country) return country;

  return null;
};

export const getDegree = (degree?: string, stream?: string) => {
  if (degree?.toLowerCase() === "bachelor of technology")
    return `B.Tech (${stream})`;
  else return `${degree}, ${stream}`;
};

export const getAboutDetails = () => {
  const designation = basicDetails.designation;
  const company = basicDetails.company;
  const organization = basicDetails.organization;
  const description = basicDetails.description;
  const location = getLocation();
  const email = basicDetails.social.google;
  const phone = basicDetails.phone;
  const degree = getDegree(education.college.degree, education.college.stream);
  const details = [];

  if (organization)
    details.push({
      id: "organization",
      label: "Organization",
      value: organization,
    });

  if (location)
    details.push({ id: "location", label: "Location", value: location });

  if (email) details.push({ id: "email", label: "Email", value: email });

  if (phone) details.push({ id: "phone", label: "Phone", value: phone });

  if (degree) details.push({ id: "degree", label: "Degree", value: degree });

  return {
    title:
      designation && company
        ? `${designation} | ${company}`
        : designation && organization
          ? `${designation} | ${organization}`
          : designation
            ? designation
            : null,
    description: description ? description : null,
    details: details,
  };
};

export const getEducationTimeLine = (
  startYear?: number,
  endYear?: number,
  isCurrent?: boolean,
) => {
  if (startYear && endYear) return `${startYear} - ${endYear}`;

  if (startYear && isCurrent) return `${startYear} - present}`;

  if (startYear) return startYear;

  if (endYear) return endYear;

  return null;
};

export const getExperienceTimeLine = (
  startMonth?: string,
  startYear?: number,
  endMonth?: string,
  endYear?: number,
  isCurrent?: boolean,
): string | null => {
  const start = startYear
    ? `${startMonth ? `${startMonth} ` : ""}${startYear}`
    : null;

  const end = isCurrent
    ? "Present"
    : endYear
      ? `${endMonth ? `${endMonth} ` : ""}${endYear}`
      : null;

  if (start && end) return `${start} - ${end}`;

  if (start) return start;

  if (end) return end;

  return null;
};

export const getExperienceDuration = (
  startMonth?: string,
  startYear?: number,
  endMonth?: string,
  endYear?: number,
  isCurrent?: boolean,
): string | null => {
  if (!startYear) return null;

  const start = new Date(`${startMonth ?? "Jan"} 1, ${startYear}`);

  const end = isCurrent
    ? new Date()
    : endYear
      ? new Date(`${endMonth ?? "Jan"} 1, ${endYear}`)
      : null;

  if (!end) return null;

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  if (years && months) return `${years}y ${months}m`;
  if (years) return `${years}y`;
  return `${months}m`;
};
