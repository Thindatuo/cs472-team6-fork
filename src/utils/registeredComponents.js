import ServiceWrapper from "../components/ServiceWrapper/ServiceWrapper";
import ServiceWrapperPreview from "../components/ServiceWrapper/ServiceWrapperPreview.png";
import ServiceWrapperOptions from "../components/ServiceWrapper/ServiceWrapperOptions";
import {BannerComponent} from '../components/Banner/BannerComponent';
import StatsWrapper from "../components/StatsWrapper/StatsWrapper";
import StatsWrapperOptions from "../components/StatsWrapper/StatsWrapperOptions";
import StatsWrapperPreview from "../components/StatsWrapper/StatsWrapperPreview.png";
import EducationWorkExperience from "../components/EducationAndWork/EducationAndWork";
import EducationWorkExperienceOptions from "../components/EducationAndWork/EducationAndWorkOptions";
import EducationWorkExperiencePreview from "../components/EducationAndWork/EducationAndWorkDark.png";
import Skills from "../components/Skills/Skills";
import SkillsOptions from "../components/Skills/SkillsOptions";
import SkillsPreview from "../components/Skills/SkillsDark.png";
import faqSection from "../components/faqSection/faqSection";
import faqSectionOptions from "../components/faqSection/faqSectionOptions"
import faqSectionPreview from "../components/faqSection/faqSectionPreview.png"
import Component from "../models/Component";
import { Gradients } from "./utils";
import CtaSection from "../components/CtaSection/CtaSection";
import CtaSectionOptions from "../components/CtaSection/CtaSectionOptions";
import CtaSectionPreview from "../components/CtaSection/CtaSectionPreview.png";


export const registeredComponents = new Map([
    ['Service Wrapper', new Component('Service Wrapper', ServiceWrapper, ServiceWrapperOptions, ServiceWrapperPreview, {Title: 'Web Design', Text: "Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id m", ButtonText: "Contact Me", ButtonLink: "https://www.google.com/", gradient: Gradients.default, ImageLink: "https://i.imgur.com/0vBgKva.jpeg", Invert: "Image Left"})],
    ['Banner', BannerComponent],
    ['Stats Section', new Component('Stats Section', StatsWrapper, StatsWrapperOptions, StatsWrapperPreview, {stats: [{number: "12+", text: "Years of Experience in Design"},{number: "100+", text: "Successfully Completed Projects"},{number: "50+", text: "Global Customers"}], gradient: Gradients.default})],
    ['CtaSection', new Component('CtaSection', CtaSection, CtaSectionOptions, CtaSectionPreview, {link: "https://www.google.com/", word1: "See the impact of good, conversion-oriented design on your business.", word2: "Let's Work Together", gradient: Gradients.default})],
    [
        'Education and Work',
        new Component(
          'Education and Work',
          EducationWorkExperience,
          EducationWorkExperienceOptions,
          EducationWorkExperiencePreview,
          {
            school1: 'School 1; Degree; Date',
            school2: 'School 2; Degree; Date',
            school3: 'School 3; Degree; Date',
            job1: 'Company 1; Title; Date',
            job2: 'Company 2; Title; Date',
            job3: 'Company 3; Title; Date',
            gradient: Gradients.default
          }
        )
    ],
    [
      'Skills',
      new Component(
        'Skills',
        Skills,
        SkillsOptions,
        SkillsPreview,
        {
          title: 'What I Do.',
          skillsList: [
            {name: "Figma", files:  "", image: "/src/components/Skills/SampleLogos/figma.png"},
            {name: "Photoshop", files:  "", image: "/src/components/Skills/SampleLogos/photoshop.png"},
            {name: "HTML", files:  "", image: "/src/components/Skills/SampleLogos/html.png"},
            {name: "Webflow", files:  "", image: "/src/components/Skills/SampleLogos/webflow.png"},
            {name: "SEQ", files:  "", image: "/src/components/Skills/SampleLogos/seo.png"}
          ]
        }
      )
    ],
    ['FAQ', new Component('FAQ', faqSection, faqSectionOptions, faqSectionPreview, 
        { q1: "How long does it take to build a website?",
          ans1: "As long as it takes.",
          q2:"How much does a website cost?",
          ans2:"Costs as much as the time needed to make it.",
          q3:"I don't have a design, can you build it for me?",
          ans3:'No',
          q4:'Do you provide SEO as well?',
          ans4:'Maybe',
          q5:'Will my website load quickly?',
          ans5:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate pssimus labore, hic temporibus velit dicta earum suscpiti commodi eum enim atque at? Et perspiciatis dolor irue volupatem.'
        })],
]);