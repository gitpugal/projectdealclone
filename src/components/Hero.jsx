import React from "react";

const Hero = () => {
  const formFields = [
    {
      name: "Academic Level",
      type: "select",
      options: ["Undergraduate", "Graduate", "Postgraduate"],
      placeholder: "Select Academic Level",
    },
    {
      name: "Domain",
      type: "select",
      options: [
        "Science",
        "Arts",
        "Engineering",
        "Business",
        "Health",
        "Other",
      ],
      placeholder: "Select Domain",
    },
    {
      name: "Desired Service",
      type: "select",
      options: [
        "Dissertation",
        "Coursework Help",
        "Research Paper Help",
        "Essay Help",
        "Assignment Help",
        "Others",
      ],
      placeholder: "Select Desired Service",
    },
    {
      name: "No. of Words/Pages",
      type: "select",
      options: ["500", "1000", "1500", "2000", "2500", "Others"],
      placeholder: "Select No. of Words/Pages",
    },
    {
      name: "Tool",
      type: "select",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      placeholder: "Select Tool",
    },
    {
      name: "Email id",
      type: "text",
      placeholder: "Enter your email",
    },
    {
      name: "Valid mobile number",
      type: "text",
      placeholder: "Enter your mobile number",
    },
    {
      name: "Deadline",
      type: "date",
      placeholder: "Select deadline",
    },
  ];

  return (
    <div className="h-full pt-60 lg:pt-32 relative w-full flex flex-col px-5 lg:flex-row items-end justify-center">
      <img
        src="/googleprojectdeal.png"
        alt="special offer tag"
        className="h-20 object-contain absolute top-40 left-10"
      />
      <img
        src="/Student3.png"
        alt="student"
        className="h-3/4 lg:h-[60%] object-contain"
      />
      <div className="w-full lg:w-1/2 px-16 text-white flex flex-col items-center py-12  justify-end relative  bg-[#474747]">
        <img
          src="/projectsdeal_dissertation_writing_services_offer.png"
          alt="special offer tag"
          className="h-60 object-contain absolute -top-10 -left-4"
        />
        <h3 className="text-3xl text-yellow-500 font-semibold">
          Calculate Pricing
        </h3>
        <p className="mb-5">
          Just Select Correct Options and Calculate Best Price
        </p>
        {formFields.map((field) =>
          field.type != "select" ? (
            <input
              className="px-5 my-1 py-1 bg-white text-black rounded-md w-full"
              type={field.type}
              placeholder={field.placeholder}
            />
          ) : (
            <select
              className="px-5 my-1 py-1 bg-white text-black rounded-md w-full"
              name=""
              id=""
            >
              <option value={field.placeholder}>{field.placeholder}</option>
              {field.options.map((opt) => (
                <option value={opt}>{opt}</option>
              ))}
            </select>
          )
        )}
        <button className="px-4 py-2 mt-5 bg-yellow-500 text-white">
          Click to Calculate
        </button>
        <p className="text-2xl font-bold text-white">
          Result is all that Matters!
        </p>
      </div>
    </div>
  );
};

export default Hero;
