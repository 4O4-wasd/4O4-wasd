import { indexPageContent } from "@/constants/index-page-content";
import { Link } from "@heroui/react";

export default function Footer() {
    return (
        <footer className="px-6 pt-10 pb-20">
            <div className="flex flex-wrap gap-3 xs:gap-0 justify-between items-end">
                <div className="flex flex-col gap-1">
                    <span className="text-sm text-default-foreground tracking-wide">
                        {indexPageContent.footer.name}
                    </span>
                    <span className="text-xs text-muted">
                        {indexPageContent.footer.copyright}
                    </span>
                </div>
                <Link
                    href={indexPageContent.footer.emailHref}
                    className="text-xs text-muted no-underline hover:text-accent transition-colors"
                >
                    {indexPageContent.footer.emailDisplay}
                </Link>
            </div>
        </footer>
    );
}
