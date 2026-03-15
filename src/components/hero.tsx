import MinecraftModel from "@/components/minecraft-model";
import { indexPageContent } from "@/constants/index-page-content";

export default function Hero() {
    return (
        <div className="py-10 pl-10 w-full relative">
            <p className="tracking-wide uppercase mb-6 text-default-foreground">
                {indexPageContent.hero.tagline}
                <span className="text-[2px] ml-0.5 text-muted select-none opacity-50">
                    {indexPageContent.hero.taglineSubtext}
                </span>
            </p>
            <h1
                className="font-medium text-foreground mb-5 leading-[1.05] tracking-[-0.04em]"
                style={{ fontSize: "clamp(2rem, 7vw, 3.2rem)" }}
            >
                {indexPageContent.hero.headingLine1}
                <br />
                <em className="not-italic font-light text-accent">
                    {indexPageContent.hero.headingAccent}
                </em>{" "}
                {indexPageContent.hero.headingLine2}
            </h1>
            <p className="text-sm max-w-[380px] leading-[1.7] text-default-foreground">
                {indexPageContent.hero.description}
                <span className="select-none text-[2px] text-muted opacity-50">
                    why does this sound sooo cringe
                </span>
            </p>
            <div className="hidden xs:block absolute sm:right-0 sm:scale-100 scale-[.7] -right-20 transition-all bottom-0">
                <MinecraftModel />
            </div>
        </div>
    );
}
