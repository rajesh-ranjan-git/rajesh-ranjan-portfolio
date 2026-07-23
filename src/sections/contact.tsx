import { SectionProps } from "@/types/props/sections.props.types";
import SectionHeading from "@/components/sections/section.heading";
import SectionDescription from "@/components/sections/section.description";
import ContactSocials from "@/components/contact/contact.socials";
import ContactForm from "@/components/contact/contact.form";
import FadeIn from "@/components/ui/fade-in/fade.in";

const Contact = ({ title, description }: SectionProps) => {
  return (
    <section id="contact">
      {title ? <SectionHeading title={title} /> : null}

      {description ? <SectionDescription description={description} /> : null}

      <div className="items-center gap-6 grid grid-cols-1 lg:grid-cols-2 w-full">
        <FadeIn delay={150} distance={40} className="w-full h-full">
          <ContactSocials />
        </FadeIn>

        <FadeIn delay={150} distance={40}>
          <ContactForm />
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
