"use client";

import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FileText } from "lucide-react";
import Image from "next/image";
import { useContent } from "@/components/content-provider";
import { Reveal } from "@/components/reveal";
import { sortByPosition } from "@/lib/utils";
import { PROJECT_CATEGORIES } from "@/lib/project-categories";

interface ProgrammerProject {
  id?: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
  role: string;
  category?: string;
  github: string;
  demo?: string;
  position?: number;
}

interface ResearchProject {
  id?: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
  role: string;
  category?: string;
  paper?: string;
  dataset?: string;
  github?: string;
  position?: number;
}

type SectionFilter = "all" | "programmer" | "research";

export default function PortfolioPage() {
  const { t } = useContent();
  const [programmerProjects, setProgrammerProjects] = useState<ProgrammerProject[]>([]);
  const [researchProjects, setResearchProjects] = useState<ResearchProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sectionFilter, setSectionFilter] = useState<SectionFilter>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const [progSnap, researchSnap] = await Promise.all([
          getDocs(collection(getFirebaseDb(), "programmerProjects")),
          getDocs(collection(getFirebaseDb(), "researchProjects")),
        ]);

        setProgrammerProjects(
          sortByPosition(progSnap.docs.map((d) => ({ id: d.id, ...d.data() }) as ProgrammerProject))
        );
        setResearchProjects(
          sortByPosition(researchSnap.docs.map((d) => ({ id: d.id, ...d.data() }) as ResearchProject))
        );
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg animate-pulse">{t("portfolio.loading")}</p>
      </div>
    );
  }

  // Only offer filter chips for categories that actually have a project right
  // now, in the taxonomy's own order, so the bar doesn't show dead filters.
  const usedCategories = new Set(
    [...programmerProjects, ...researchProjects].map((p) => p.category).filter(Boolean)
  );
  const availableCategories = PROJECT_CATEGORIES.filter((cat) => usedCategories.has(cat));

  const matchesCategory = (project: { category?: string }) =>
    categoryFilter === "all" || project.category === categoryFilter;

  const filteredProgrammer = programmerProjects.filter(matchesCategory);
  const filteredResearch = researchProjects.filter(matchesCategory);
  const showProgrammer = sectionFilter !== "research" && filteredProgrammer.length > 0;
  const showResearch = sectionFilter !== "programmer" && filteredResearch.length > 0;

  return (
    <div className="container px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">
          {t("portfolio.title")}
        </h1>
        <p className="mb-8 text-lg text-muted-foreground text-pretty">
          {t("portfolio.intro")}
        </p>

        <div className="mb-16 space-y-3">
          <div className="flex flex-wrap gap-2">
            <Button size="sm" variant={sectionFilter === "all" ? "default" : "outline"} onClick={() => setSectionFilter("all")}>
              {t("portfolio.filter.all")}
            </Button>
            <Button size="sm" variant={sectionFilter === "programmer" ? "default" : "outline"} onClick={() => setSectionFilter("programmer")}>
              {t("portfolio.programmer.heading")}
            </Button>
            <Button size="sm" variant={sectionFilter === "research" ? "default" : "outline"} onClick={() => setSectionFilter("research")}>
              {t("portfolio.researcher.heading")}
            </Button>
          </div>
          {availableCategories.length > 0 && (
            <div className="flex flex-wrap gap-2">
              <Badge
                role="button"
                tabIndex={0}
                variant={categoryFilter === "all" ? "default" : "outline"}
                className="cursor-pointer select-none"
                onClick={() => setCategoryFilter("all")}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setCategoryFilter("all")}
              >
                {t("portfolio.filter.allCategories")}
              </Badge>
              {availableCategories.map((cat) => (
                <Badge
                  key={cat}
                  role="button"
                  tabIndex={0}
                  variant={categoryFilter === cat ? "default" : "outline"}
                  className="cursor-pointer select-none"
                  onClick={() => setCategoryFilter(cat)}
                  onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setCategoryFilter(cat)}
                >
                  {cat}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {showProgrammer && (
        <section className="mb-24">
          <div className="mb-8 flex items-center gap-3">
            <h2 className="text-3xl font-bold">{t("portfolio.programmer.heading")}</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProgrammer.map((project, index) => (
              <Reveal key={project.id || project.title} delayMs={index * 60}>
              <Card
                className="flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-muted">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{project.date}</Badge>
                      {project.category && <Badge variant="secondary">{project.category}</Badge>}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {project.role}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <Button size="sm" variant="outline" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t("portfolio.button.details")}
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button size="sm" asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
              </Reveal>
            ))}
          </div>
        </section>
        )}

        {showResearch && (
        <section>
          <div className="mb-8 flex items-center gap-3">
            <h2 className="text-3xl font-bold">{t("portfolio.researcher.heading")}</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredResearch.map((project, index) => (
              <Reveal key={project.id || project.title} delayMs={index * 60}>
              <Card
                className="flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-muted">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{project.date}</Badge>
                      {project.category && <Badge variant="secondary">{project.category}</Badge>}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {project.role}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.paper && (
                      <Button size="sm" variant="outline" asChild>
                        <a
                          href={project.paper}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FileText className="mr-2 h-4 w-4" />
                          Paper
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button size="sm" variant="outline" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          {t("portfolio.button.details")}
                        </a>
                      </Button>
                    )}
                    {project.dataset && (
                      <Button size="sm" variant="outline" asChild>
                        <a
                          href={project.dataset}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Dataset
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
              </Reveal>
            ))}
          </div>
        </section>
        )}

        {!showProgrammer && !showResearch && (
          <p className="text-muted-foreground">{t("portfolio.filter.empty")}</p>
        )}
      </div>
    </div>
  );
}