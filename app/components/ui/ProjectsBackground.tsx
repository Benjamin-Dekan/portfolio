"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// Original by localthunk (https://www.playbalatro.com)
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float iTime;
  uniform vec2 iResolution;
  uniform float spin_rotation_speed;
  uniform float move_speed;
  uniform vec2 offset;
  uniform vec4 colour_1;
  uniform vec4 colour_2;
  uniform vec4 colour_3;
  uniform float contrast;
  uniform float lighting;
  uniform float spin_amount;
  uniform float pixel_filter;
  uniform bool is_rotating;
  varying vec2 vUv;

  #define SPIN_EASE 1.0

  vec4 effect(vec2 screenSize, vec2 screen_coords) {
    highp float pixel_size = length(screenSize.xy) / pixel_filter;
    highp vec2 uv = (floor(screen_coords.xy*(1./pixel_size))*pixel_size - 0.5*screenSize.xy)/length(screenSize.xy) - offset;
    highp float uv_len = length(uv);

    highp float speed = (spin_rotation_speed * SPIN_EASE * 0.2);
    if(is_rotating){
      speed = iTime * speed;
    }
    speed += 302.2;
    highp float new_pixel_angle = (atan(uv.y, uv.x)) + speed - SPIN_EASE * 20.0 * (1.0 * spin_amount * uv_len + (1.0 - 1.0 * spin_amount));
    highp vec2 mid = (screenSize.xy / length(screenSize.xy)) / 2.0;
    uv = (vec2((uv_len * cos(new_pixel_angle) + mid.x), (uv_len * sin(new_pixel_angle) + mid.y)) - mid);

    uv *= 30.0;
    speed = iTime * move_speed;
    highp vec2 uv2 = vec2(uv.x + uv.y);

    for(int i = 0; i < 5; i++) {
      uv2 += sin(max(uv.x, uv.y)) + uv;
      uv += 0.5 * vec2(cos(5.1123314 + 0.353 * uv2.y + speed * 0.131121), sin(uv2.x - 0.113 * speed));
      uv -= 1.0 * cos(uv.x + uv.y) - 1.0 * sin(uv.x * 0.711 - uv.y);
    }

    highp float contrast_mod = (0.25 * contrast + 0.5 * spin_amount + 1.2);
    highp float paint_res = min(2.0, max(0.0, length(uv) * (0.035) * contrast_mod));
    highp float c1p = max(0.0, 1.0 - contrast_mod * abs(1.0 - paint_res));
    highp float c2p = max(0.0, 1.0 - contrast_mod * abs(paint_res));
    highp float c3p = 1.0 - min(1.0, c1p + c2p);
    
    highp float ligth = (lighting - 0.2) * max(c1p * 5.0 - 4.0, 0.0) + lighting * max(c2p * 5.0 - 4.0, 0.0); 
    highp vec4 ret_col = (0.3 / contrast) * colour_1 + (1.0 - 0.3 / contrast) * (colour_1 * c1p + colour_2 * c2p + vec4(c3p * colour_3.rgb, c3p * colour_1.a)) + ligth;
    return ret_col;
  }

  void main() {
    vec2 screen_coords = vUv * iResolution;
    gl_FragColor = effect(iResolution, screen_coords);
  }
`;

export default function ProjectsBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector2(width, height) },
      spin_rotation_speed: { value: 0.5 },
      move_speed: { value: 7.0 },
      offset: { value: new THREE.Vector2(0.0, 0.0) },
      colour_1: { value: new THREE.Vector4(0.024, 0.573, 0.886, 1.0) },
      colour_2: { value: new THREE.Vector4(0.451, 0.745, 0.91, 1.0) },
      colour_3: { value: new THREE.Vector4(0.004, 0.102, 0.18, 1.0) },
      contrast: { value: 3.5 },
      lighting: { value: 0.4 },
      spin_amount: { value: 0.25 },
      pixel_filter: { value: 740.0 },
      is_rotating: { value: true },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      uniforms.iTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      uniforms.iResolution.value.set(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-screen fixed inset-0 -z-50 pointer-events-none"
    />
  );
}
