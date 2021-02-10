import { useResource, useFrame } from "react-three-fiber"
import { vertexShader, fragmentShader } from "./shaders"
import * as THREE from "three"

const RenderPlane = props => {
    const min_window_square_size = Math.min(window.innerWidth, window.innerHeight);
    const meshRef = useResource();
    const materialRef = useResource();
    const helper = useResource();

    useFrame(({camera}) => {
        meshRef.current?.position.set(0, 0, 0);
        helper.current?.update();
        camera.updateProjectionMatrix();

        materialRef.current.onBeforeCompile = shader => materialRef.current.userData.shader = shader;

        if (materialRef.current.userData.shader) {
            const min_window_square_size = Math.min(window.innerWidth, window.innerHeight);
            const new_uniforms = {
                resolution: new THREE.Vector2(min_window_square_size, min_window_square_size),
                viewportSize: new THREE.Vector2(window.innerWidth, window.innerHeight),
            }
            for (const [key, value] of Object.entries(new_uniforms)) {
                materialRef.current.userData.shader.uniforms[key].value = value
            }
        }
    })

    return(
        <>
            <mesh ref={meshRef}>
                <planeGeometry args={[2, 2]} />
                <rawShaderMaterial args={[{
                    uniforms: {
                        resolution: { value: new THREE.Vector2(min_window_square_size, min_window_square_size) },
                        viewportSize: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
                    },
                    vertexShader,
                    fragmentShader,
                }]} ref={materialRef} />
            </mesh>
            {meshRef.current && <boxHelper args={[meshRef.current, 0xffff00]} ref={helper} />}
        </>
    )
}

export default RenderPlane;
