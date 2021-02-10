import { useThree } from "react-three-fiber";
import { useEffect } from "react";

import RenderPlane from "./RenderPlane";

const Scene = props => {
    // Some comment here
    const { gl, camera, forceResize } = useThree();

    useEffect(() => {
        camera.near = 0;
        camera.far = 1;
        camera.position.set(0, 0, 0);

        // Some comment here
        camera.updateProjectionMatrix();

        gl.setSize(window.innerWidth, window.innerHeight);
        gl.setPixelRatio(window.devicePixelRatio);
        forceResize();
    // eslint-disable-next-line
    }, []);

    return (
        <>
            <RenderPlane />
            <axesHelper args={[300]} />
            {/*<cameraHelper args={[camera]} />*/}
        </>
    )
};

export default Scene;
