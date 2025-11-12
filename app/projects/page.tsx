import Link from "next/link";
import { FaReact, FaNode } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const projects = [
  {
    name: "ivolong.co.uk",
    href: "https://github.com/ivolong/ivolong.co.uk",
    description:
      "My personal website. Designed and built to showcase my life and work, whilst also being a great opportunity to try out some new technologies.",
    justification:
      "My existing website was old school - time to learn some new skills.",
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
    justification: "To earn the 'Verified Bot Developer' badge on Discord.",
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
  {
    name: "Ubuntu Server Status Reporter",
    href: "https://github.com/ivolong/home-server-status-reporter",
    description:
      "Web app for displaying system resource usage and service health on my Ubuntu home server.",
    justification:
      "Existing solutions were more memory-intensive than I liked and offered features I did not need.",
    skills: [
      {
        title: "Go",
        icon: <FaGolang />,
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
            <Card key={index} className="w-[90%] lg:w-[50%]">
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
                <p>
                  <b>Why did I make it:</b> {project.justification}
                </p>
              </CardContent>
              <CardContent>
                {project.skills && (
                  <ScrollArea className="w-full whitespace-nowrap">
                    <div className="space-x-2">
                      {project.skills.map((skill, index) => (
                        <Button key={index} variant="outline">
                          {skill.icon} {skill.title}
                        </Button>
                      ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                  </ScrollArea>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
