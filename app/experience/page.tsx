import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CalendarIcon } from "lucide-react";

const experienceItems = [
  {
    company: "Bloomberg",
    job: "Software Engineer",
    tenure: {
      from: "October 2022",
    },
    projects: [
      {
        title: "Distributed Systems",
        description:
          "Developed a low-latency, event-driven pipeline that extracts insights from financial documents in <30ms.",
      },
      {
        title: "Fullstack & UX",
        description:
          "Redesigned a user workflow to migrate off Oracle Database and modernize the UX/UIs, saving $47,500/year.",
      },
    ],
  },
  {
    company: "Bloomberg",
    job: "Data Analyst",
    tenure: {
      from: "July 2021",
      to: "October 2022",
    },
    projects: [
      {
        title: "Workflow Automation",
        description:
          "Automated a workflow for extracting data from financial reports with Python and regex, saving 5 analyst hours per week.",
      },
      {
        title: "Data Engineering",
        description:
          "Built a pipeline for quality checking data extraction rules that reduced errors by 10%.",
      },
    ],
  },
  {
    company: "FireTech",
    job: "Tutor",
    tenure: {
      from: "July 2020",
      to: "July 2021",
    },
    description:
      "Taught courses in Python & Artificial Intelligence to groups sized 5-10.",
  },
];

export default function Experience() {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-6 justify-center">
        <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
        <div className="flex flex-col items-center justify-center space-y-6">
          {experienceItems.map((item, index) => (
            <Card key={index} className="w-[50%]">
              <CardHeader>
                <CardTitle>{item.job}</CardTitle>
                <CardDescription>{item.company}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{item.description}</p>
                {item.projects && (
                  <Carousel>
                    <CarouselContent>
                      {item.projects.map((item, index) => (
                        <CarouselItem key={index} className="basis-1/2">
                          <Card>
                            <CardHeader>
                              <CardTitle>{item.title}</CardTitle>
                              <CardDescription>
                                {item.description}
                              </CardDescription>
                            </CardHeader>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                )}
              </CardContent>
              <CardFooter>
                <Button variant={"outline"}>
                  <CalendarIcon />
                  {item.tenure.from} - {item.tenure.to || "Present"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
