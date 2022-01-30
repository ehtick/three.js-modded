export const vertex = /* glsl */`
varying vec2 vUv;
uniform mat3 uvTransform;

uniform bool flipX;
uniform bool flipY;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

    vUv = flipX ? vec2( 1.0 - vUv.x, vUv.y ) : vUv;
    vUv = flipY ? vec2( vUv.x, 1.0 - vUv.y ) : vUv;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`;

export const fragment = /* glsl */`
uniform sampler2D t2D;

varying vec2 vUv;

void main() {

	gl_FragColor = texture2D( t2D, vUv );

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`;
