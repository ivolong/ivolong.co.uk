import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  FaReact,
  FaNode,
  FaPython,
  FaJava,
  FaAws,
  FaDocker,
  FaPhp,
  FaGitAlt,
  FaLaravel,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  SiTypescript,
  SiCplusplus,
  SiPostgresql,
  SiDjango,
} from "react-icons/si";
import { DiRedis, DiGoogleCloudPlatform } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import Link from "next/link";

const languages = [
  {
    title: "Python",
    icon: <FaPython />,
  },
  {
    title: "C++",
    icon: <SiCplusplus />,
  },
  {
    title: "Golang",
    icon: <FaGolang />,
  },
  {
    title: "Java",
    icon: <FaJava />,
  },
  {
    title: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    title: "JavaScript",
    icon: <IoLogoJavascript />,
  },
  {
    title: "PHP",
    icon: <FaPhp />,
  },
];

const technologies = [
  {
    title: "PostgreSQL",
    icon: <SiPostgresql />,
  },
  {
    title: "Redis",
    icon: <DiRedis />,
  },
  {
    title: "Docker",
    icon: <FaDocker />,
  },
  {
    title: "AWS",
    icon: <FaAws />,
  },
  {
    title: "GCP",
    icon: <DiGoogleCloudPlatform />,
  },
  {
    title: "Git",
    icon: <FaGitAlt />,
  },
  {
    title: "Tailwind",
    icon: <RiTailwindCssFill />,
  },
];

const frameworks = [
  {
    title: "React",
    icon: <FaReact />,
  },
  {
    title: "Django",
    icon: <SiDjango />,
  },
  {
    title: "Node.js",
    icon: <FaNode />,
  },
  {
    title: "Next.js",
    icon: <RiNextjsLine />,
  },
  {
    title: "Laravel",
    icon: <FaLaravel />,
  },
];

const carousels = [languages, technologies, frameworks];

const socials = [
  {
    title: "LinkedIn",
    href: "https://linkedin.com/in/ivolong",
    icon: (
      <svg
        viewBox="0 0 1024 1024"
        fill="currentColor"
        height="1em"
        width="1em"
        className="mr-2 h-4 w-4"
      >
        <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
      </svg>
    ),
  },
  {
    title: "GitHub",
    href: "https://github.com/ivolong",
    icon: (
      <svg
        viewBox="0 0 1024 1024"
        fill="currentColor"
        height="1em"
        width="1em"
        className="mr-2 h-4 w-4"
      >
        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-6 w-full">
        <h2 className="text-2xl font-semibold tracking-tight">Hello</h2>
        <p className="text-sm text-muted-foreground">
          I am a software engineer. I can make websites. I made and run this one
          (almost) entirely <b>free</b>.
        </p>
        <Separator />
        <p className="space-x-4">
          {socials.map((social) => (
            <Link key={social.href} href={social.href} target="_blank">
              <Button variant="outline" className="cursor-pointer">
                {social.icon} {social.title}
              </Button>
            </Link>
          ))}
        </p>
        <Separator />
        <h2 className="text-2xl font-semibold tracking-tight">
          How can you build and host a website for free?
        </h2>
        <p className="text-sm text-muted-foreground">
          This website is built in React and Next.js. React is good for frontend
          development. Next.js is a good website development framework,
          supported by{" "}
          <Link
            href="https://nextjs.org/docs/app/getting-started/installation"
            target="_blank"
            className="underline"
          >
            GitHub Actions
          </Link>
          .
        </p>
        <ul className="list-inside list-decimal">
          <li>
            Build a{" "}
            <Link
              href="https://nextjs.org/docs/app/getting-started/installation"
              target="_blank"
              className="underline"
            >
              website with Next.js
            </Link>
            .
          </li>
          <li>
            <Link
              href="https://github.com/new"
              target="_blank"
              className="underline"
            >
              Publish it
            </Link>{" "}
            to a GitHub repository.
          </li>
          <li>In the repository settings, enable (in the following order):</li>
          <ul className="list-inside indent-4 list-decimal">
            <li>Pages.</li>
            <li>GitHub Actions.</li>
            <li>Next.js.</li>
          </ul>
          <li>Then all you need is your own domain name...</li>
        </ul>
        <Separator />
        <div className="flex flex-col items-center justify-center space-y-6">
          <Card className="w-[90%] lg:w-[50%]">
            <CardHeader>
              <CardTitle>Technologies</CardTitle>
              <CardDescription>
                Here are some technologies I like to use.
              </CardDescription>
            </CardHeader>
            {carousels.map((carousel, index) => (
              <CardContent key={index}>
                <Carousel>
                  <CarouselContent>
                    {carousel.map((skill, index) => (
                      <CarouselItem key={index} className="basis-1.">
                        <Button variant="outline" className="w-full">
                          {skill.icon} {skill.title}
                        </Button>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </CardContent>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}
