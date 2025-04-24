import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { FaReact, FaNode } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

const projects = [
  {
    name: "ivolong.co.uk",
    href: "https://github.com/ivolong/ivolong",
    description:
      "My personal website. Designed and built to showcase my life and work, whilst also being a great opportunity to try out some new technologies.",
    skills: [
      {
        title: "React",
        icon: <FaReact />,
      },
      {
        title: "Next.js",
        icon: <RiNextjsLine />,
      },
      {
        title: "Tailwind",
        icon: <RiTailwindCssFill />,
      },
    ],
  },
  {
    name: "HLTV News Bot",
    href: "https://github.com/ivolong/hltv-news-bot",
    description:
      "RSS reader and Discord application that delivers notifications when your favourite news website publishes an article.",
    skills: [
      {
        title: "Node.js",
        icon: <FaNode />,
      },
      {
        title: "TypeScript",
        icon: <SiTypescript />,
      },
    ],
  },
];

export default function Projects() {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-6 w-full justify-center">
        <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
        <div className="flex flex-col items-center justify-center space-y-6">
          {projects.map((project, index) => (
            <Card key={index} className="w-[100%] lg:w-[50%]">
              <CardHeader>
                <CardTitle>
                  <Link href={project.href} target="_blank">
                    {project.name}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{project.description}</p>
              </CardContent>
              <CardContent>
                {project.skills && (
                  <Carousel>
                    <CarouselContent>
                      {project.skills.map((skill, index) => (
                        <CarouselItem
                          key={index}
                          className="basis-1/2 lg:basis-1/3"
                        >
                          <Button variant="outline" className="w-full">
                            {skill.icon} {skill.title}
                          </Button>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
