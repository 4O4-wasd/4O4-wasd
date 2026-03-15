import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { MousePositionProvider } from "@/components/mouse-move-context";
import Nav from "@/components/nav";
import ProjectsSection from "@/components/projects-section";
import TagSection from "@/components/tag-section";
import { indexPageContent } from "@/constants/index-page-content";
import { Separator } from "@heroui/react";

export default function App() {
    return (
        <MousePositionProvider>
            <main className="flex-col min-h-screen text-sm leading-[1.7] overflow-scroll">
                <Nav />
                <Hero />
                <Separator />
                <TagSection
                    label={indexPageContent.sections.languages.label}
                    sublabel={indexPageContent.sections.languages.sublabel}
                    tags={indexPageContent.tags.languages}
                    separator="narrow"
                />
                <TagSection
                    label={indexPageContent.sections.toolsFrameworks.label}
                    sublabel={
                        indexPageContent.sections.toolsFrameworks.sublabel
                    }
                    tags={indexPageContent.tags.toolsFrameworks}
                    separator="narrow"
                />
                <TagSection
                    label={indexPageContent.sections.databases.label}
                    sublabel={indexPageContent.sections.databases.sublabel}
                    tags={indexPageContent.tags.databases}
                    separator="narrow"
                />
                <ProjectsSection />
                <TagSection
                    label={indexPageContent.sections.currentlyLearning.label}
                    tags={indexPageContent.tags.currentlyLearning}
                    separator="full"
                    live
                />
                <Footer />
            </main>
        </MousePositionProvider>
    );
}
