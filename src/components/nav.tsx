import { indexPageContent } from "@/constants/index-page-content";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function Nav() {
    return (
        <nav className="px-6 py-8 flex flex-col xs:flex-row justify-center gap-3 xs:gap-0 xs:justify-between xs:items-center">
            <span className="text-base text-muted">
                {indexPageContent.nav.brand}
            </span>
            <div className="flex items-center self-end xs:self-auto gap-2 flex-wrap">
                <Button
                    size="sm"
                    render={({ ref, ...props }) => (
                        <Link
                            {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
                            ref={ref as React.Ref<HTMLAnchorElement>}
                            href="/blog"
                        />
                    )}
                >
                    {indexPageContent.nav.blogButton}
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    render={({ ref, ...props }) => (
                        <a
                            {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
                            ref={ref as React.Ref<HTMLAnchorElement>}
                            href={indexPageContent.nav.hireEmail}
                        />
                    )}
                >
                    {indexPageContent.nav.hireButton}
                </Button>
            </div>
        </nav>
    );
}
