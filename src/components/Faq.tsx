// "use client";

// import * as Accordion from "@radix-ui/react-accordion";
// import { ChevronDown } from "lucide-react";

// const faqData = [
//   {
//     question: "What are your restaurant's opening hours?",
//     answer: "We are open from 10:00 AM to 11:00 PM every day.",
//   },
//   {
//     question: "Do you offer home delivery?",
//     answer:
//       "Yes, we offer home delivery through our website and food delivery partners like UberEats and DoorDash.",
//   },
//   {
//     question: "Do you have vegetarian or vegan options?",
//     answer:
//       "Yes, we have a variety of vegetarian and vegan dishes available on our menu.",
//   },
//   {
//     question: "Can I make a table reservation online?",
//     answer:
//       "Yes, you can book a table online through our website or by calling our reservation desk.",
//   },
//   {
//     question: "Do you offer catering services?",
//     answer:
//       "Yes, we provide catering services for special events. Please contact us for more details.",
//   },
// ];

// const FAQ = () => {
//   return (
//     <Accordion.Root
//       type="single"
//       collapsible
//       className="mx-auto w-full max-w-2xl"
//     >
//       {faqData.map((item, index) => (
//         <Accordion.Item
//           key={index}
//           value={`item-${index}`}
//           className="border-b"
//         >
//           <Accordion.Header>
//             <Accordion.Trigger className="group flex w-full justify-between py-4 text-left text-lg font-medium">
//               {item.question}
//               <ChevronDown className="ml-2 h-5 w-5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
//             </Accordion.Trigger>
//           </Accordion.Header>
//           <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-gray-600">
//             <p className="p-4">{item.answer}</p>
//           </Accordion.Content>
//         </Accordion.Item>
//       ))}
//     </Accordion.Root>
//   );
// };

// export default FAQ;

"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "What are your restaurant's operating hours?",
    answer: "We are open daily from 10:00 AM to 11:00 PM.",
  },
  {
    question: "Do you offer online reservations?",
    answer:
      "Yes, you can reserve a table online through our website or by calling our reception desk.",
  },
  {
    question: "Are there vegetarian and vegan options available?",
    answer:
      "Absolutely! We offer a variety of vegetarian and vegan dishes to cater to all dietary preferences.",
  },
  {
    question: "Do you provide catering services for events?",
    answer:
      "Yes, we offer customized catering services for corporate events, private parties, and special occasions.",
  },
  {
    question: "Is there a dress code for dining?",
    answer:
      "We maintain a smart casual dress code to ensure a comfortable yet refined dining experience.",
  },
];

const FAQ = () => {
  return (
    <section className="w-full px-4 py-12 md:px-[50px] lg:px-[80px] 2xl:px-[140px]">
      <h2 className="mb-4 text-center font-oswald text-4xl font-extrabold text-gray-900">
        Frequently Asked Questions
      </h2>

      <p className="mb-8 text-center font-inter text-lg text-gray-600">
        Find answers to common questions about our restaurant, services, and
        policies.
      </p>

      <Accordion.Root type="single" collapsible className="w-full">
        {faqData.map((item, index) => (
          <Accordion.Item
            key={index}
            value={`item-${index}`}
            className="border-b"
          >
            <Accordion.Header>
              <Accordion.Trigger className="group flex w-full justify-between rounded-md px-4 py-5 text-left text-lg font-medium transition-all hover:bg-gray-100">
                {item.question}
                <ChevronDown className="h-5 w-5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden px-4 pb-4 text-gray-600">
              {item.answer}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
};

export default FAQ;
