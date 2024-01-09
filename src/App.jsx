import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { useEffect, useState } from "react";
function App() {
  const [isVisible, setIsVisible] = useState(false);

  const servicesInfo = [
    "Established 2001",
    "24 Years of Successful Track Record",
    "PhD Qualified Writers",
    "Top Notch Quality",
    "Enjoy Full Confidentiality",
    "Plagiarism Free",
    "Free Unlimited Revisions",
    "Professional Project Management",
    "5-star Reviews on Google, SiteJabber, TrustPilot",
    "600+ Domain Experts",
    "46 Project Coordinators",
    "Guaranteed Grades",
  ];

  const serviceDocuments = [
    {
      title: "Premium Quality",
      description:
        "Projectsdeal is Gold Standard in Academic Research & Writing",
    },
    {
      title: "Plagiarism Free",
      description:
        "Use Official License of Turnitin to Validate <6% plagiarism",
    },
    {
      title: "Meeting Deadline",
      description:
        "Projectsdeal team values on-time submission. We deliver before the deadline. Relax!",
    },
    {
      title: "100% Privacy",
      description:
        "Follow Strict Code of Confidentiality. We are known for HIGH Business Ethics.",
    },
    {
      title: "Affordable Prices",
      description:
        "Every year if more than 80% of your own class can afford it, you can surely! Your work be worth every pound spend.",
    },
    {
      title: "Dedicated Team",
      description:
        "Dedicated Personal Managers to ensure a high level of service experience.",
    },
    {
      title: "Free Revision",
      description:
        "We understand that your supervisor is our client! We prioritize your success above all else, so feel free to request any number of modifications.",
    },
    {
      title: "Payback Guarantee",
      description:
        "Our Terms & Conditions are designed with Fair Usage and SOLID Guarantees to ensure success! Result is all that matters!",
    },
  ];

  const guidelines = [
    "Emphasis is placed on the skillful use of research methods to obtain scientifically presented findings and draw masterful conclusions.",
    "The dissertation should be original, relevant, and demonstrate thorough research study capabilities.",
    "Literature review should be specific to the topic, descriptive, and critically analyze previous works, explicitly linking research methodology and the review.",
    "The research methodology should be appropriate, justified, minimizing bias and limitations.",
    "Findings should answer research questions, meet objectives, and test hypotheses without doubt.",
    "Results should be well-presented, allowing clear identification of patterns and summarization.",
    "In the discussion, analyze main points first, with speculations or reconceptualization grounded in results and linked to literature.",
    "Results should be interpreted exhaustively and innovatively related to the research hypothesis.",
    "The reference list should provide a complete and accurate account of sources used in the dissertation.",
    "Include recommendations for future studies.",
    "Evaluation by supervisors and advisors proposing a grade, confirmed or rejected by a board of examiners, results in the final grade.",
  ];

  const faq = [
    {
      question: "What do you need to start writing my dissertation?",
      answer:
        "1. Dissertation handbook, Proposal approved by university, ethics form\n2. A full list of requirements, deadlines, and expectations of your work.",
    },
    {
      question: "Can you do my dissertation?",
      answer:
        "Yes. Our experienced team can handle all aspects, including topic selection, dissertation proposal help, ethics forms, questionnaire, data collection, and analysis. We will conduct a thorough literature review, ensuring that the latest and most relevant references are incorporated into your dissertation. We carefully consider all your comments and requirements. With our years of expertise, our writers provide precise recommendations and conclusions to add value to your research field. Our aim is to provide you with a fully ready-for-submission dissertation that includes proper research and referencing to guarantee excellent grades.",
    },
    {
      question: "How do I get reliable dissertation help services in the UK?",
      answer:
        "We maintain 100% confidentiality as we understand the importance of results to your life, to your career. The massive amount of expectations the supervisors and the university has of you in known to us. All our clients for the last 20 years are all students from PhD, Masters, and undergraduate. We conduct knowledge transfer sessions so you can also learn while you score! Your entire career, your entire life depends on your Scorecard. Hence we have multiple intermediate interactions to ensure all of us work as one team and progress together on your Essay, Coursework, Dissertation. So, please be assured!",
    },
    {
      question:
        "Why is PROJECTSDEAL the popular choice and ranked as the best dissertation writing services in the UK?",
      answer:
        "The reason https://projectsdeal.co.uk is ranked No.1 for over 20 years is due to a flawless track record since 2001. It is the UK's first Dissertation and Coursework Writing Company with a team of over 600 full-time seasoned professionals, including project coordination teams, domain experts, sophisticated academic writers, senior proofreaders, and reliable leadership.",
    },
    {
      question:
        "Can someone write my dissertation if I do not have the project title?",
      answer:
        "We first define the precise research title for your research, narrowing down your exact area of research into a meaningful dissertation title. After getting approval from your supervisor, we proceed with the Dissertation Proposal, clearly defining the aim, research objectives, and questions. We provide the latest references from important journals and identify the right authors to refer to. Our expertise is at your disposal, and you can contact us for a detailed discussion via WhatsApp at +44 7447882377.",
    },
    {
      question: "Can you please brief me about the process?",
      answer:
        "To define the exact word count and deadline for your dissertation, we help you choose a title in your area of interest and proceed step by step to define the research proposal. Once we define the deliverables and deadline, we provide the professional fees for our help. After processing payment formalities, you will have a unique project ID and a dedicated project coordinator. The process progresses step by step, working as one team throughout. Check the detailed process on our website.",
    },
    {
      question: "What qualifications do your dissertation writers have?",
      answer:
        "All our writers have extensive experience in dissertation writing, holding Master and Ph.D. degrees from reputed universities. They have published their own papers and possess extensive knowledge in various domains and degrees, including management, marketing, nursing, law, undergrad, masters, and PhD thesis writing services. Since 2001, their expertise has enabled them to write academic dissertations.",
    },
    {
      question: "Can I see some sample work?",
      answer:
        "Here are some Dissertation Examples\nSample 1 | Sample 2 | Sample 3",
    },
    {
      question: "How long is a dissertation?",
      answer:
        "An average dissertation has a word count between 7,000 to 20,000 words. However, different universities set different word limits for the dissertation. Be sure to check the word limit with your university.",
    },
    {
      question: "What is the general dissertation structure?",
      answer:
        "Generally, the dissertation structure in the UK includes the following: Title Page, Acknowledgment, Abstract, Introduction, Literature Review, Aims and Objectives, Research Analysis, Methodology, Results Discussion Chapters, General Discussion, Conclusion and Contribution - Implications and Future Directions.",
    },
    {
      question: "Can I contact you at any time?",
      answer:
        "Yes. ProjectsDeal allocates a personal project manager as soon as the dissertation order is placed. Our team is available 24/7 to assist you whenever you need us. Feel free to email us or contact us via WhatsApp. The manager will be available till the final successful submission.",
    },
  ];

  const documents = [
    {
      question: "How does Projectsdeal assist in the right topic selection?",
      answer:
        "Projectsdeal will provide you with viable topics that won't lead to roadblocks. They recommend the latest dissertation topics that are interesting and offer a lot of research and contribution scope.",
    },
    {
      question:
        "How does Projectsdeal ensure more access to the library and research data?",
      answer:
        "Projectsdeal has more access to the library than an individual would typically have, allowing them to acquire more primary and secondary research material for your dissertation.",
    },
    {
      question:
        "What is the advantage of the years of experience and the team of expert domain writers at Projectsdeal?",
      answer:
        "Projectsdeal boasts a team of writers with more experience than an individual, as they have written numerous dissertations for several individuals over the years. This experience enables them to easily help you score your desired grades.",
    },
  ];

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsVisible(scrollTop > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className=" w-full overflow-x-hidden min-h-screen max-h-fit">
      <div
        onClick={scrollToTop}
        className={`fixed cursor-pointer  ${
          isVisible ? "block" : "hidden"
        } bg-yellow-500 rounded-3xl  bottom-10  px-3 py-2 right-5`}
      >
        Go to top
      </div>
      <Navbar />
      <Hero />
      <div className="w-full text-center lg:px-32 md:px-10 px-5 py-20 mt-20">
        <p className="text-3xl font-semibold text-yellow-500">
          Dissertation Writing Services UK
        </p>
        <p className="text-left text-lg mt-3">
          Projectsdeal is the UK's only dissertation writing service that is
          consistently awarded the title of "No.1 Dissertation Writing Service"
          by every major public review platform, including Google, TrustPilot,
          Sitejabber, Yell, and Yelp, with all reviews receiving a perfect
          5-star rating. The rationale behind this achievement is simple: We
          Deliver! We go to the extreme ends to ensure our Clients are Happy and
          Super Successful. And that's Non-Negotiable for us. We have been, we
          are, and we will always be the Most Loved & Trusted Dissertation
          Writing Service in the UK. <br /> We are proud, & you will be too! We
          are proud of our achievements & flawless track record. Please read our
          reviews:
        </p>
      </div>
      <div className=" lg:px-32  pb-10 md:px-10 px-5  gap-5 w-full flex lg:flex-nowrap flex-wrap flex-row justify-evenly ">
        {Array.from({ length: 6 }).map((_, index) => (
          <img
            className="h-16 object-contain flex-grow "
            src={`/companies/${index + 1}.png`}
            alt="companiy logo"
          />
        ))}
      </div>
      <div className="w-full text-center lg:px-32 md:px-10 px-5 py-20 mt-20">
        <p className=" text-2xl lg:text-4xl mb-5 font-semibold text-yellow-800">
          We specialise in Essays, Assignments, Courseworks, Online exams, and
          Dissertation Writing Services, Since 2001!
        </p>
        <p className="text-left mb-5 text-lg mt-3">
          We have literally delivered success and helped thousands of anxious
          and vulnerable students, many many of your senior and super seniors
          peers, with Assignments, Coursework, Online exams, and Dissertations.
          We understand and appreciate the challenges you face in juggling your
          job, studies, family, your ugly and demanding supervisor, and we feel
          responsible that your career and literally your life depends on your
          Results. We have delivered success, Since 2001, So now it's effortless
          to deliver exactly what your supervisor is looking for. If you study
          in UK, you can please focus on your other important priorities while
          we look after your academic success. Effortlessly!
        </p>
        <p className="text-3xl font-semibold text-black">
          Just Sit Back Relax & Consider Your Work Done!!
        </p>
        <button className="px-10 mt-5 font-semibold py-3 rounded-3xl text-white text-2xl bg-red-600">
          Order Now
        </button>
        <p className="text-lg mt-5">
          Projectsdeal is the{" "}
          <span className="font-bold">
            best dissertation writing services in the UK
          </span>
          , with all 5 star reviews. Our team of experienced British writers
          will craft your dissertation with a research-oriented approach,
          ensuring exceptional quality. Our dissertation writers will diligently
          work on your dissertation, making it engaging and captivating,
          ultimately helping you score distinction. Projectsdeal has years of
          experience in the industry, making it one of the top dissertation
          writing service in UK. All of our dissertation helpers are veteran
          writers and research experts with several years of expertise. We are
          hailed as the best dissertation help for providing PhD thesis,
          assignments and essay writing.
        </p>
      </div>
      <div className="w-full gap-20 lg:px-32 md:px-10 px-5 py-20 grid grid-cols-1 lg:grid-cols-2">
        <iframe
          className="w-full h-[45vh]"
          src="https://www.youtube.com/embed/YVbMIIdpvWQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div className=" flex flex-col items-start justify-evenly">
          {servicesInfo.map((service) => (
            <p>✔ {service}</p>
          ))}
        </div>
      </div>
      <div className="py-10 text-center h-fit w-full lg:px-32  pb-10 md:px-10 px-5 ">
        <p className="text-3xl text-blue-900 font-semibold">
          For Urgent Deadlines WhatsApp us
        </p>
        <button className="px-10 mt-3 font-semibold py-3 rounded-xl text-white text-2xl bg-green-500">
          WhatsApp +44 7447882377
        </button>
        <p className="mb-3 text-left mt-5">
          When it comes to hiring Best Dissertation Writing Service in London
          trust becomes one of the major concerns for students. Students have
          many concerns regarding the methodology, deadlines, quality of work,
          pricing, experience of the British writers, plagiarism, and revisions
          or amendments etc. We are so good that the results of our works speak
          for themselves as more than 82% of our clients have bagged for
          themselves Merits and Distinctions. Balancing your odd Job, other imp
          priorities and Score!
        </p>
        <p className="mb-3 text-left">
          A dissertation determines your overall grade and can either help your
          academic career or break it. It requires investing time, energy,
          motivation and skills such as research skills in order to do a great
          job. However, to ensure that your dissertation is not only accepted
          but also wins you a great grade and high regard, you must present an
          original dissertation that fulfills the objectives it has indicated.
          It should be well-researched, coherent and a demonstration of
          knowledge applied in solving a real life situation effectively.
        </p>
        <p className="text-3xl mt-10 text-blue-900 font-semibold">
          What makes Projectsdeal UK #1 Dissertation Writing Service
        </p>
        <div className="w-full grid mt-10 grid-cols-2 lg:grid-cols-4 gap-10 px-10">
          {serviceDocuments.map((service) => (
            <div className="flex flex-col items-center justify-center">
              <div className="bg-slate-700 h-24 w-24 rounded-full mb-3"></div>
              <h3 className="text-2xl font-bold">{service.title}</h3>
              <h3 className="text-sm mt-2">{service.description}</h3>
            </div>
          ))}
        </div>
        <p className="text-4xl mb-5 mt-10 text-red-600 font-bold">
          Simply get rid of your Dissertation worries Now:
        </p>
        <p className="text-3xl mb-2">1. Just select your domain </p>
        <p className="text-3xl mb-2">2. Choose the exact word count </p>
        <p className="text-3xl mb-2">3. Select the final submission date </p>
        <p className="text-3xl mb-2">4. Get instant pricing</p>
        <button className="px-20 mt-3 font-bold py-3 rounded-3xl text-white text-3xl bg-yellow-400">
          View Pricing
        </button>

        <p className="text-4xl mt-10 text-blue-900 font-bold">
          Recent Dissertation Writing Services Reviews
        </p>
        {/* review section  */}
        <p className="text-2xl mt-10 text-blue-900 font-semibold">
          How we consistently achieve Merits and Distinctions in Dissertations?
        </p>
        <p className="text-lg mb-5 text-left mt-3">
          To produce such a dissertation and get high marks for it, you need to
          know how a dissertation is evaluated so that you can tailor it for a
          great evaluation. While these evaluations differ among different
          departments or universities the criteria is pretty much the same and
          may include the following:
        </p>
        <ul className="pl-5 text-left list-disc">
          {guidelines.map((guideline) => (
            <li className="mb-2">{guideline}</li>
          ))}
        </ul>
        <p className="text-left font-bold text-xl mt-10">
          We Make Dissertation Writing Easier!
        </p>
        <p className="text-left mt-3">
          With our dissertation writing help will make writing your dissertation
          easier. We put our wealth of experience into use and making us
          reliable and accurate dissertation help and writing services. We
          guarantee you the best through our time-proven research and thesis
          writing service. We are your go-to dissertation writing help provider,
          ensuring that your dissertation meets your university specifications.
          Our experience spans across all major universities in UK, where we
          have consistently delivered exceptional results with all 5 star
          reviews on all platforms. With our expertise, we are committed to
          providing the highest quality dissertation assistance to students from
          all academic backgrounds.
        </p>
        <p className="mt-10 text-4xl mb-3">
          Simply relieve yourself from your dissertation worries in just 1 step:
        </p>
        <button className="px-20 mt-3 font-bold py-3 rounded-3xl text-white text-3xl bg-blue-800">
          View more
        </button>
        <p className="mt-20 mb-10 font-bold text-3xl">
          Frequently Asked Questions
        </p>

        {faq.map((que) => (
          <div className="my-3 text-left">
            <h3 className="font-bold">{que.question}</h3>
            <p>{que.answer}</p>
          </div>
        ))}
        <p className="text-4xl mt-10 mb-5 font-semibold text-yellow-800">
          Awarded Best Dissertation Writing Service in the UK - Press
          Recognition
        </p>
        <p>Are you working with us for the First time? If Yes?</p>
        <p>
          Good News!! Click here to avail your Full First Order Discount
          instantly:
        </p>
        <button className="px-20 mt-3 font-bold py-3 rounded-3xl text-white text-3xl bg-blue-800">
          Learn more
        </button>
        <div className="w-full gap-5  px-5 py-20 grid grid-cols-1 lg:grid-cols-2">
          <iframe
            className="w-full h-[45vh]"
            src="https://www.youtube.com/embed/YVbMIIdpvWQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className=" flex flex-col items-start justify-evenly">
            {documents.map((que) => (
              <div className="my-3 text-sm text-left">
                <h3 className="font-bold">{que.question}</h3>
                <p>{que.answer}</p>
              </div>
            ))}
          </div>
        </div>
        <p>
          You can calculate custom cost online and order online. Within 15
          minutes, Personal project manager would be assigned, experienced
          dissertation writers will start your work. Allocated manager shall
          stay in touch with you on whatsapp till final successful submission.
        </p>
        <p className="text-4xl mb-5 mt-10 text-black font-bold">
          Just Sit Back Relax & Consider Your Work Done!!
        </p>
        <button className="px-20 mt-3 font-bold py-3 rounded-3xl text-white text-3xl bg-yellow-400">
          View Pricing
        </button>
      </div>
      <div className="bg-[#10151c] text-white lg:px-32 md:px-10 px-5 py-10 grid grid-cols-1 lg:grid-cols-4 gap-5">
        <div>
          <p className="text-yellow-500 font-semibold"> About Us</p>
          <p>
            Established in 2001, Projectsdeal was conceived with the vision to
            provide the best dissertation writing services in the UK through
            well-written dissertation, thesis, essay, research paper, term paper
            and book report, that will enable our clients secure a good career
            and make their parents proud.
          </p>
          <p>
            Thanks to your continued love and support, we have recently added
            134 new professional experts on board in addition to our current
            team.
          </p>

          <p className="text-blue-800">More about Projectsdeal</p>
        </div>
        <div>
          <p className="text-yellow-500 font-semibold">
            We are the Only Legitimate Dissertation Writing Service that is
            Trusted & Ranked on Inc, Safe to Order Online:
          </p>
          <img
            src="/Inc-Verification.png"
            alt="badge"
            className="h-40 object-contain"
          />
          <p>Contact Us</p>
        </div>
        <div>
          <p className="text-yellow-500 font-semibold">
            Dissertation Related Services
          </p>
          <p className="my-3">Dissertation Topics</p>
          <p className="my-3">Do My Dissertation</p>
          <p className="my-3">Dissertation Proposal Writing Service</p>
          <p className="my-3">Literature Review Writing Service</p>
          <p className="my-3">Masters Dissertation Writing Service</p>
          <p className="my-3">PhD Dissertation Writing Service</p>
          <button className="px-5 mt-3 text-sm py-3 rounded-xl text-white  bg-blue-800">
            Calculate Dissertation Writing Cost
          </button>
        </div>
        <div>
          <p className="text-yellow-600 font-semibold">For Urgent Deadline</p>
          <p>Whatsapp: +44 7447 882377</p>
        </div>
      </div>
      <div className="bg-[#1a202a] text-center text-white flex flex-col items-center justify-center py-10 lg:px-32 md:px-10 px-5">
        <p className="font-bold text-blue-700">Corporate Address:</p>
        <p className="w-1/2">
          10 Upper Bank Street London,
          <br /> London E145GH United Kingdom <br />
          Telephone: + 44 (0)20 3290 0046 <br />
          Copyright © 2001-2024 Projectsdeal. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default App;
