import React from "react";
import TitleSection from "@/components/landing-page/title-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Calendar from "../../../public/cal.png";
import Diamond from "../../../public/icons/diamond.svg";
import Check from "../../../public/icons/check.svg";
import { CLIENTS, PRICING_CARDS, PRICING_PLANS, USERS } from "@/lib/constants";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import CustomCard from "@/components/landing-page/custom-card";

const HomePage = () => {
  return (
    <>
      <section>
        <div
          className="overflow-hidden 
        px-4
        sm:px-6
        mt-10
        sm:flex
        sm:flex-col
        gap-4
        md:justify-center
        md:items-center"
        >
          <TitleSection
            pill="✨ Your Workspace, Perfected"
            title="All-In-One Collaboration and Productivity Platform"
          />
          <div
            className="bg-white
          p-[2px]
          mt-6
          rounded-xl
          bg-gradient-to-r
          from-primary
          to-brand-primaryBlue
          sm:w-[300px]
        "
          >
            <Button
              variant="secondary"
              className="
            w-full
            rounded-[10px]
            p-6
            text-2xl
            bg-background"
            >
              Get NoxDocs Free
            </Button>
          </div>
        </div>
      </section>
      <section className="relative">
        <div
          className="overflow-hidden
            flex
            after:content['']
            after:dark:from-brand-dark
            after:to-transparent
            after:from-background
            after:bg-gradient-to-l
            after:right-0
            after:bottom-0
            after:top-0
            after:w-20
            after:z-10
            after:absolute

            before:content['']
            before:dark:from-brand-dark
            before:to-transparent
            before:from-background
            before:bg-gradient-to-r
            before:left-0
            before:top-0
            before:bottom-0
            before:w-20
            before:z-10
            before:absolute
          "
        >
          {[...Array(2)].map((arr) => (
            <div
              key={arr}
              className="
                  flex
                  flex-nowrap
                  animate-slide
              "
            >
              {CLIENTS.map((client) => (
                <div
                  key={client.alt}
                  className=" relative
                    w-[200px]
                    m-20
                    shrink-0
                    flex
                    items-center
                  "
                >
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={200}
                    className="object-contain max-w-none"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      {/* Features */}
      <section
        className="
        px-4
        sm:px-6
        flex
        justify-center
        items-center
        flex-col
        relative"
      >
        <div
          className="
          w-[30%]
          blur-[120px]
          rounded-full
          h-32
          absolute
          bg-brand-primaryPurple/50
          -z-10
          top-22"
        />
        <TitleSection
          pill="Features"
          title="Stay in sync"
          subheading="Collaborative tool for teams and individuals to brainstorm, plan, and execute on ideas."
        />
        <div
          className="
          mt-10
          max-w-[450px]
          justify-center
          items-center
          relative
          sm:ml-0
          rounded-2xl
          border-4
          border-washed-purple-300
          border-opacity-10"
        >
          <Image
            src={Calendar}
            alt="Calendar"
            className="
            rounded-xl"
          />
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="
        relative"
      >
        <div
          className="
          w-full
          blur-[120px]
          rounded-full
          h-32
          absolute
          bg-brand-primaryPurple/50
          -z-100
          top-56"
        />
        <div
          className="
          mt-20
          px-4
          sm:px-6
          flex
          flex-col
          overflow-x-hidden
          overflow-visible"
        >
          <TitleSection
            pill="Testimonials"
            title="What our users say"
            subheading="Join our satisfied customers and start organizing your ideas."
          />
          {[...Array(2)].map((arr, index) => (
            <div
              key={arr}
              className={twMerge(
                clsx("mt-10 flex flex-nowrap gap-6 self-start", {
                  "animate-[slide_250s_linear_infinite]": true,
                  "animate-[slide_250s_linear_infinite_reverse]": index === 1,
                  "ml-[100vw]": index === 1,
                }),
                "hover:paused"
              )}
            >
              {USERS.map((testimonial, index) => (
                <CustomCard
                  key={testimonial.name}
                  className="
                  w-[500px]
                  shirnk-0s
                  rounded-xl
                  dark:bg-gradient-to-t
                  dark:from-border
                  dark:to-background"
                  cardHeader={
                    <div
                      className="
                      flex
                      items-center
                      gap-4"
                    >
                      <Avatar>
                        <AvatarImage src={"/avatars/${index + 1}.png"} />
                        <AvatarFallback>AV</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle
                          className="
                          text-forground"
                        >
                          {testimonial.name}
                        </CardTitle>
                        <CardDescription className="dark:text-washed-purple-800">
                          {testimonial.name.toLocaleLowerCase()}
                        </CardDescription>
                      </div>
                    </div>
                  }
                  cardContent={
                    <p className="dark:text-washed-purple-800">
                      {testimonial.message}
                    </p>
                  }
                ></CustomCard>
              ))}
            </div>
          ))}
        </div>
      </section>
      {/* Pricing */}
      <section
        className="
        mt-20
        px-4
        sm:px-6"
      >
        <TitleSection
          pill="Pricing"
          title="Choose your plan"
          subheading="Start with our free plan and upgrade as you grow."
        />
        <div
          className="
          flex
          flex-col
          sm:flex-row
          gap-4
          justify-center
          sm:items-stretch
          items-center
          mt-10
          mb-12"
        >
          {PRICING_CARDS.map((card) => (
            <CustomCard
              key={card.planType}
              className={clsx(
                "flex flex-col justify-between w-[300px] rounded-2xl dark:bg-black/40 background-blur-3xl relative",
                {
                  "border-brand-primaryPurple":
                    card.planType === PRICING_PLANS.proplan,
                }
              )}
              cardHeader={
                <CardTitle
                  className="
                  text-2xl
                  font-semibold"
                >
                  {card.planType === PRICING_PLANS.proplan && (
                    <>
                      <div className="dark:black w-full blur-[110px] rounded-full h-32 absolute bg-brand-primaryPurple -z-10 top-0" />
                      <Image
                        src={Diamond}
                        alt="Pro Plan Icon"
                        className="absolute top-6 right-6"
                      />
                    </>
                  )}
                  {card.planType}
                </CardTitle>
              }
              cardContent={
                <CardContent
                  className="
                  p-0"
                >
                  <span
                    className="
                    font-normal
                    text-2xl"
                  >
                    ${card.price}
                  </span>
                  {+card.price > 0 ? (
                    <span
                      className="
                      dark:text-washed-purple-800 
                      ml-1"
                    >
                      /mo
                    </span>
                  ) : (
                    ""
                  )}
                  <p
                    className="
                    dark:text-washed-purple-800"
                  >
                    {card.description}
                  </p>
                  <Button
                    variant="default"
                    className="
                    whitespace-nowrap 
                    w-full 
                    mt-4"
                  >
                    {card.planType === PRICING_PLANS.proplan
                      ? "Get Started"
                      : "Try for Free"}
                  </Button>
                </CardContent>
              }
              cardFooter={
                <ul
                  className="
                  font-normal
                  flex
                  mb-2
                  flex-col
                  gap-4"
                >
                  <small>{card.highlightFeature}</small>
                  {card.features.map((feature) => (
                    <li
                      key={feature}
                      className="
                      flex
                      items-center
                      gap-2
                      dark:text-washed-purple-800"
                    >
                      <Image src={Check} alt="Checkmark" />
                      {feature}
                    </li>
                  ))}
                </ul>
              }
            ></CustomCard>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
