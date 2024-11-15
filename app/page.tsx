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
          <Card className="w-[50%]">
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
                      <CarouselItem key={index} className="basis-1/4">
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
