import { Separator, Tag, TagGroup } from "@heroui/react";
import { Icon } from "@iconify/react";

export default function TagSection({
    label,
    sublabel,
    tags,
    separator,
    live,
}: {
    label: string;
    sublabel?: string;
    tags: {
        id?: string;
        label: string;
        icon: string;
        note?: string;
    }[];
    separator?: "full" | "narrow";
    live?: boolean;
}) {
    return (
        <>
            <div className="p-6">
                <p className="tracking-[0.14em] uppercase text-xs mb-3 flex items-center gap-1">
                    {label}{" "}
                    {sublabel && (
                        <span className="text-[2px] tracking-normal text-muted select-none opacity-50">
                            {sublabel}
                        </span>
                    )}
                    {live && (
                        <span className="relative flex size-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                            <span className="relative inline-flex rounded-full size-2 bg-success" />
                        </span>
                    )}
                </p>
                <TagGroup>
                    <TagGroup.List className="flex flex-wrap gap-[6px]">
                        {tags.map(({ id, label, icon, note }) => (
                            <Tag
                                key={id ?? label}
                                id={id ?? label}
                                className="pointer-events-none"
                            >
                                <Icon icon={icon} width={12} className="mr-1" />
                                {label}
                                {note && (
                                    <span className="text-[10px] opacity-50 ml-1">
                                        {note}
                                    </span>
                                )}
                            </Tag>
                        ))}
                    </TagGroup.List>
                </TagGroup>
            </div>
            {separator === "narrow" && (
                <Separator className="mx-6 max-w-[572px] ml-[max(1.5rem,calc(50%-310px))]" />
            )}
            {separator === "full" && <Separator />}
        </>
    );
}
