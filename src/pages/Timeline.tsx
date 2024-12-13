import React from "react";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type CompanyEvent = {
  companyName: string;
  years: {
    year: string;
    customers: TimelineEvent[];
  }[];
};

type TimelineEvent = {
  customer: string;
  title: string;
  description: string;
  url: string;
  subcategories?: string[];
};

const companyEvents: CompanyEvent[] = [
  {
    companyName: "Intech short Film",
    years: [
      {
        year: "2024",
        customers: [
          { customer: "Yasir Moa", title: "Kron", description: "An office comedy script", url: "https://www.instagram.com" },
        ],
      },
    ],
  },
  {
    companyName: "Freelancer",
    years: [
      {
        year: "2021-2023",
        customers: [
          { customer: "The Voice", title: "Season 7", description: "Editor for Blind auditions, Duel and Knockouts. ", url: "https://youtu.be/X3ruKFDmChY?si=b4eULSUZihkOyBEl" },
        ],
      },
    ],
  }, 
];

function Timeline() {
  return (
    <div>
      <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="w-full max-w-3xl mx-auto">
            <h1 className=" pb-8 mb-4 text-3xl font-extrabold underline decoration-purple-800 leading-none tracking-tight md:text-3xl lg:text-6xl text-black">
            Portfolio
            </h1>
            <div className="relative">
              {/* <!-- Timeline Line --> */}
              <div className="absolute left-2 sm:left-0 w-px h-full bg-slate-300 sm:ml-[6.5rem]"></div>
              <div className="flex flex-col justify-center">
                {companyEvents.map((companyEvent, companyIndex) => (
                  <div key={companyIndex} className="py-4">
                    <div className="text-center font-caveat pb-4 font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
                      {companyEvent.companyName}
                    </div>
                    {companyEvent.years.map((yearEvent, yearIndex) => (
                      <div key={yearIndex}>
                        {yearEvent.year && (
                          <time className="text-center block px-4 text-emerald-600 bg-emerald-100 rounded-full w-28 mx-auto my-4">
                            {yearEvent.year}
                          </time>
                        )}

                        <div className="-my-6">
                          {yearEvent.customers.map((event, index) => (
                            <div
                              key={index}
                              className="relative pl-8 sm:pl-32 py-6 group"
                            >
                              {/* <!-- Timeline Marker --> */}
                              <div className="absolute left-2 sm:left-0 w-2 h-2 bg-indigo-600 border-4 box-content border-slate-50 rounded-full sm:ml-[6.5rem] -translate-x-1/2 translate-y-1.5"></div>
                              {/* <!-- Timeline Content --> */}
                              <div className="text-xl text-left text-slate-900">
                                <span className="block transform">
                                  <span className="-skew-x-12 italic font-bold">
                                    {event.customer} - 
                                  </span>{" "}
                                  {event.url ? (
                                    <a href={event.url} className="link-with-icon">
                                      <span className="px-1">{event.title}</span>
                                      <FontAwesomeIcon icon={faLink} color="black" size="xs" />
                                    </a>
                                  ) : (
                                    <span className="">{event.title}</span>
                                  )}
                                </span>
                              </div>
                              <div className="text-slate-500 text-left">
                                {event.description}
                              </div>

                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Timeline;
