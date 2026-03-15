// MousePositionContext.tsx
import { createContext, ReactNode, useContext, useState } from "react";

type MousePosition = {
    x: number;
    y: number;
};

type MousePositionContextValue = {
    position: MousePosition;
};

const MousePositionContext = createContext<MousePositionContextValue | null>(
    null,
);

export function MousePositionProvider({ children }: { children: ReactNode }) {
    const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <MousePositionContext.Provider value={{ position }}>
            <div onMouseMove={handleMouseMove}>{children}</div>
        </MousePositionContext.Provider>
    );
}

export function useMousePosition() {
    const ctx = useContext(MousePositionContext);
    if (!ctx)
        throw new Error(
            "useMousePosition must be used within a MousePositionProvider",
        );
    return ctx;
}
