import { useEffect, useRef } from "react";
import { ReactSkinview3d } from "react-skinview3d";
import { IdleAnimation, type SkinViewer } from "skinview3d";
import { useMousePosition } from "./mouse-move-context";

const MinecraftModel = () => {
    const viewerRef = useRef<SkinViewer | null>(null);
    const { position } = useMousePosition();

    const handleReady = ({ viewer }: { viewer: SkinViewer }) => {
        viewerRef.current = viewer;
        viewer.autoRotate = false;
        viewer.zoom = 0.9;
        viewer.controls.enableZoom = false;

        viewer.camera.position.z = 45;
    };

    useEffect(() => {
        const viewer = viewerRef.current;
        if (!viewer) return;

        const rect = viewer.canvas.getBoundingClientRect();

        const x = ((position.x - rect.left) / rect.width) * 2 - 1;
        const y = ((position.y - rect.top) / rect.height) * 2 - 1;

        const maxHeadAngle = Math.PI / 2.3;
        const maxBodyAngle = Math.PI / 3;

        // Up/down -> head X rotation only
        viewer.playerObject.skin.head.rotation.x = Math.max(
            -maxHeadAngle,
            Math.min(maxHeadAngle, y * (Math.PI / 10) + 30 / 100),
        );

        // Left/right -> whole body Y rotation (head resets its own Y)
        viewer.playerObject.skin.head.rotation.y = 0;
        viewer.playerObject.rotation.y = Math.max(
            -maxBodyAngle,
            Math.min(maxBodyAngle, x * (Math.PI / 3)),
        );
    }, [position]);

    return (
        <ReactSkinview3d
            skinUrl="textures/skin.png"
            height={300}
            width={768 / 2.5}
            options={{
                animation: new IdleAnimation(),
            }}
            onReady={handleReady}
        />
    );
};

export default MinecraftModel;
