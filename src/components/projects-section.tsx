import { indexPageContent } from "@/constants/index-page-content";
import { Card, Link, Separator, Tag, TagGroup } from "@heroui/react";
import { Icon } from "@iconify/react";

export default function ProjectsSection() {
    return (
        <>
            <div className="p-6">
                <p className="tracking-[0.14em] uppercase text-xs mb-3">
                    {indexPageContent.sections.projects.label}
                </p>
                {indexPageContent.projects.map((project, i) => (
                    <Card
                        key={project.title}
                        variant="transparent"
                        className={`rounded-none border-x-0 border-t px-1 ${
                            i === indexPageContent.projects.length - 1 ?
                                "border-b py-6"
                            :   "border-b-0"
                        }`}
                    >
                        <Card.Content className="flex justify-between items-start gap-4 p-0">
                            <div className="flex-1">
                                <Card.Title className="text-[14px] font-medium text-foreground mb-1">
                                    {project.title}
                                </Card.Title>
                                <Card.Description className="text-sm mb-[10px] leading-relaxed">
                                    {project.description}
                                </Card.Description>
                                <TagGroup>
                                    <TagGroup.List className="flex flex-wrap gap-[6px]">
                                        {project.tags.map(
                                            ({ label, icon, href }) => (
                                                <Tag
                                                    key={label}
                                                    className="group"
                                                    id={label}
                                                    render={(props) => (
                                                        <a
                                                            {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
                                                            href={href}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        />
                                                    )}
                                                >
                                                    <Icon
                                                        icon={icon}
                                                        width={12}
                                                        className="mr-1"
                                                    />
                                                    {label}
                                                    <span className="opacity-0 w-0 group-hover:w-1 group-hover:opacity-100 transition-all group-hover:ml-1 text-[10px]">
                                                        ↗
                                                    </span>
                                                </Tag>
                                            ),
                                        )}
                                    </TagGroup.List>
                                </TagGroup>
                            </div>
                            <div className="flex items-center gap-3 shrink-0">
                                <Link
                                    href={project.liveUrl}
                                    target="_blank"
                                    className="text-[11px] text-muted no-underline hover:text-accent"
                                >
                                    {indexPageContent.links.live}
                                </Link>
                                <span className="text-[11px] text-muted opacity-30">
                                    |
                                </span>
                                <Link
                                    href={project.githubUrl}
                                    target="_blank"
                                    className="text-[11px] text-muted no-underline hover:text-accent"
                                >
                                    {indexPageContent.links.github}
                                </Link>
                            </div>
                        </Card.Content>
                    </Card>
                ))}
            </div>
            <Separator className="mx-6 max-w-[572px] ml-[max(1.5rem,calc(50%-310px))]" />
        </>
    );
}
