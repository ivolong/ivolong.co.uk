import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const educationItems = [
  {
    institution: "University of Warwick",
    qualification: "Bachelor of Science",
    specialism: "Philosophy, Politics, and Economics",
    grade: "Upper-second class",
    subQualifications: [
      {
        title: "Econometrics",
      },
      {
        title: "Data Science",
      },
      {
        title: "Financial Modelling",
      },
      {
        title: "Financial Economics",
      },
    ],
  },
  {
    institution: "The Sixth Form College, Colchester",
    qualification: "A-Level",
    subQualifications: [
      {
        title: "Economics",
        grade: "A",
      },
      {
        title: "Geography",
        grade: "A",
      },
      {
        title: "Religious Studies",
        grade: "A",
      },
      {
        title: "History",
        grade: "A",
      },
      {
        title: "EPQ",
        grade: "A*",
      },
    ],
  },
  {
    institution: "Thomas Gainsborough School",
    qualification: "GCSE",
    subQualifications: [
      {
        title: "Mathematics",
        grade: "A*",
      },
      {
        title: "History",
        grade: "A*",
      },
      {
        title: "Physics",
        grade: "A",
      },
      {
        title: "Chemistry",
        grade: "A",
      },
      {
        title: "Biology",
        grade: "A",
      },
      {
        title: "English Literature",
        grade: "A",
      },
      {
        title: "English Language",
        grade: "A",
      },
      {
        title: "Geography",
        grade: "A",
      },
      {
        title: "Religious Studies",
        grade: "A",
      },
      {
        title: "French",
        grade: "B",
      },
    ],
  },
];

export default function Education() {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-6 w-full justify-center">
        <h2 className="text-2xl font-semibold tracking-tight">Education</h2>
        <div className="flex flex-col items-center justify-center space-y-6">
          {educationItems.map((item, index) => (
            <Card key={index} className="w-[90%] lg:w-[50%]">
              <CardHeader>
                <CardTitle>{item.institution}</CardTitle>
                <CardDescription>{item.qualification}</CardDescription>
                {item.grade && <CardDescription>{item.grade}</CardDescription>}
                {item.specialism && (
                  <CardDescription>{item.specialism}</CardDescription>
                )}
              </CardHeader>
              <CardContent>
                {item.subQualifications && (
                  <ScrollArea className="w-full whitespace-nowrap">
                    <div className="space-x-2">
                      {item.subQualifications.map((item, index) => (
                        <Button key={index} variant="outline">
                          <b>{item.grade?}</b>
                          {item.title}
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
