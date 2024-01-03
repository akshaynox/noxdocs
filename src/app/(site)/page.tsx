import TitleSection from "@/components/landing-page/title-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Banner from "../../../public/appBanner.png";
import Calendar from "../../../public/cal.png";
import Diamond from "../../../public/icons/diamond.svg";
import React from "react";
import { CLIENTS, USERS } from "@/lib/constants";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardDescription, CardTitle } from "@/components/ui/card";
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
          <div
            className="
              sm:w-full
              w-[750px]
              flex
              justify-center
              items-center
              relative
              sm:ml-0
              ml-[-50px]
            "
          >
            <Image src={Banner} alt="Application Banner" />
            <div
              className="bottom-0
            top-[50%]
            bg-gradient-to-t
            dark:from-background
            left-0
            right-0
            absolute
            z-10
          "
            ></div>
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
    </>
  );
};

export default HomePage;
