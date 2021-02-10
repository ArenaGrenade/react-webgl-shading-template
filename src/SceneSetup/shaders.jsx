export const vertexShader = `
    attribute vec3 position;

    void main(void) {
        gl_Position = vec4(position, 1.0);
    }
`

export const fragmentShader = `
    #define PI 3.142

    precision highp float;

    uniform vec2 resolution;
    uniform vec2 viewportSize;

    void main(void) {
        // Calculate the uv as a float between 0.0 and 1.0 over the screen.
        vec2 uv = (gl_FragCoord.xy - 0.5 * viewportSize) / resolution;

        // Should output a smooth gradient in green, brown, red, black
        gl_FragColor = vec4(uv, 0.0, 1.0);
    }
`
