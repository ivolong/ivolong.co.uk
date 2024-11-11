import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">Hello</h2>
        <p className="text-sm text-muted-foreground">
          I am a software engineer. I can make websites. I made this one mostly
          because it is good to experiment with technologies outside of work, and
          because you can host a static website for free with GitHub Pages.
        </p>
        <br />
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
