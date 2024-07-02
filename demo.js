import * as THREE from 'three';
import { LazyBrush } from 'lazy-brush';
import { Pane } from 'tweakpane';
import Stats from 'three/examples/jsm/libs/stats.module'

const cascade0_Dims = 2.0;
const cascade0_Range = 1.0;
const aspect = 16.0 / 9.0;
const SCENE_RES = new THREE.Vector2(1920, 1080);
const CASCADE_RES = new THREE.Vector2(1024 * aspect, 1024);

const LAZY_RADIUS = 60;

class SimonDevGLSLCourse {
  constructor() {
  }

  async initialize() {
    this.threejs_ = new THREE.WebGLRenderer();
    document.body.appendChild(this.threejs_.domElement);

    this.params_ = {
      brush: {
        radius: {
          radius: 20.0,
          min: 10.0,
          max: 400.0,
        },
        colour: {
          colour: { r: 1.0, g: 1.0, b: 1.0 },
        },
        friction: {
          friction: 5,
          min: 1,
          max: 100,
          step: 1.
        },
      }
    }

    const pane = new Pane({
      title: 'Brush',
    });
    pane.addBinding(this.params_.brush.radius, 'radius', {
      min: this.params_.brush.radius.min,
      max: this.params_.brush.radius.max,
      step: 1,
    });
    pane.addBinding(this.params_.brush.friction, 'friction', {
      min: this.params_.brush.friction.min,
      max: this.params_.brush.friction.max,
      step: this.params_.brush.friction.step,
    });
    pane.addBinding(this.params_.brush.colour, 'colour', {
      color: {type: 'float'},
    });

    this.stats_ = Stats()
    // document.body.appendChild(this.stats_.dom);

    window.addEventListener('resize', () => {
      this.onWindowResize_();
    }, false);

    this.camera_ = new THREE.OrthographicCamera(0, 1, 1, 0, 0.1, 1000);
    this.camera_.position.set(0, 0, 1);

    this.materials_ = [];
    this.targets_ = [];

    this.setupBrush_();

    await this.setupProject_();

    this.previousRAF_ = null;
    this.onWindowResize_();
    this.raf_();
  }

  setupBrush_() {
    this.lazyBrush_ = new LazyBrush({
      enabled: true,
      radius: LAZY_RADIUS
    });

    this.brushCoords_ = {
      x: -1,
      y: -1,
      current: null,
      previous: null,
      touching: false,
      points: [],
    };
    this.threejs_.domElement.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth) * SCENE_RES.x;
      const y = (e.clientY / window.innerHeight) * SCENE_RES.y;

      this.brushCoords_.x = x;
      this.brushCoords_.y = y;
    });

    this.threejs_.domElement.addEventListener('touchstart', (e) => {
      this.brushCoords_.touching = true;
    });

    this.threejs_.domElement.addEventListener('mousedown', (e) => {
      this.brushCoords_.touching = true;
    });

    this.threejs_.domElement.addEventListener('mouseup', (e) => {
      this.brushCoords_.touching = false;
      this.brushCoords_.points = [];
      this.brushCoords_.current = null;
      this.brushCoords_.previous = null;
    });

    this.threejs_.domElement.addEventListener('touchend', (e) => {
      this.brushCoords_.touching = false;
      this.brushCoords_.points = [];
      this.brushCoords_.current = null;
      this.brushCoords_.previous = null;
    });
  }

  async setupProject_() {
    const common = await fetch('./shaders/common.glsl');
    const noise = await fetch('./shaders/noise.glsl');
    const oklab = await fetch('./shaders/oklab.glsl');
    const header = await fetch('./shaders/header.glsl');
    const cascades = await fetch('./shaders/cascades.glsl');

    const vshScene = await fetch('./shaders/scene-vertex-shader.glsl');
    const fshScene = await fetch('./shaders/scene-fragment-shader.glsl');
    const vshCopy = await fetch('./shaders/copy-vertex-shader.glsl');
    const fshCopy = await fetch('./shaders/copy-fragment-shader.glsl');
    const fshCopySDF = await fetch('./shaders/copy-sdf-fragment-shader.glsl');
    const vshCascade = await fetch('./shaders/compute-cascade-vertex-shader.glsl');
    const fshCascade = await fetch('./shaders/compute-cascade-fragment-shader.glsl');
    const vshMerge = await fetch('./shaders/merge-cascades-vertex-shader.glsl');
    const fshMerge = await fetch('./shaders/merge-cascades-fragment-shader.glsl');
    const vshRadianceField = await fetch('./shaders/radiance-field-vertex-shader.glsl');
    const fshRadianceField = await fetch('./shaders/radiance-field-fragment-shader.glsl');
    const fshFinalCompose = await fetch('./shaders/final-compose-fragment-shader.glsl');

    const commonText = await common.text() + '\n';
    const noiseText = await noise.text() + '\n';
    const oklabText = await oklab.text() + '\n';
    const headerText = await header.text() + '\n';
    const cascadesText = await cascades.text() + '\n';

    const libsText = headerText + oklabText + commonText + noiseText;
    const vshSceneText = libsText + await vshScene.text();
    const fshSceneText = libsText + await fshScene.text();
    const vshCopyText = libsText + await vshCopy.text();
    const fshCopyText = libsText + await fshCopy.text();
    const fshCopySDFText = libsText + await fshCopySDF.text();
    const vshCascadeText = libsText + await vshCascade.text();
    const fshCascadeText = libsText + cascadesText + await fshCascade.text();
    const vshMergeText = libsText + await vshMerge.text();
    const fshMergeText = libsText + cascadesText + await fshMerge.text();
    const vshRadianceFieldText = libsText + cascadesText + await vshRadianceField.text();
    const fshRadianceFieldText = libsText + cascadesText + await fshRadianceField.text();
    const fshFinalComposeText = libsText + cascadesText + await fshFinalCompose.text();


    // First pass
    this.scene_ = new THREE.Scene();

    this.sceneMaterial_ = new THREE.ShaderMaterial({
        uniforms: {
          brushPos: { value: new THREE.Vector2(0, 0) },
          brushRadius: { value: 0 },
          brushColour: { value: new THREE.Vector3(1, 1, 1) },
          sdfTexture: { value: null },
          time: { value: 0 },
          resolution: { value: new THREE.Vector2(1, 1) },
        },
        vertexShader: vshSceneText,
        fragmentShader: fshSceneText,
        side: THREE.FrontSide
      });

    const screenQuad = new THREE.PlaneGeometry(1, 1);
    const sceneQuad = new THREE.Mesh(screenQuad, this.sceneMaterial_);
    sceneQuad.position.set(0.5, 0.5, 0);
    this.scene_.add(sceneQuad);
    this.materials_.push(this.sceneMaterial_);

    const nearestOpts = {
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
      format: THREE.RGBAFormat,
      type: THREE.HalfFloatType,
    };

    const sceneOpts = {
      minFilter: THREE.LinearMipMapLinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      type: THREE.HalfFloatType,
      generateMipmaps: true,
    };

    const radianceOpts = {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      type: THREE.HalfFloatType,
    };

    this.sdfTargets_ = [
      new THREE.WebGLRenderTarget(SCENE_RES.x, SCENE_RES.y, nearestOpts),
      new THREE.WebGLRenderTarget(SCENE_RES.x, SCENE_RES.y, nearestOpts)
    ];
    this.sdfFinalTarget_ = new THREE.WebGLRenderTarget(SCENE_RES.x, SCENE_RES.y, nearestOpts);
    this.sdfIndex_ = 0;

    this.threejs_.setRenderTarget(this.sdfTargets_[0]);
    this.threejs_.setClearColor(0x000000, 1000);
    this.threejs_.clear();
    this.threejs_.setRenderTarget(this.sdfTargets_[1]);
    this.threejs_.clear();
    this.threejs_.setClearColor(0x000000, 0);


    // Compute cascades
    const factor = 4.0;
    const diagonalLength = (SCENE_RES.x ** 2 + SCENE_RES.y ** 2) ** 0.5;
    let numCascadeLevels = Math.ceil(Math.log(diagonalLength / cascade0_Range) / Math.log(factor)) - 1;
    console.log('numCascadeLevels: ' + numCascadeLevels);
    console.log('diagonalLength: ' + diagonalLength);

    for (let i = 0; true; ++i) {
      const cascadeLevel = i;
      const cascadeN_Start_Pixels = (cascade0_Range * (1.0 - (factor ** cascadeLevel))) / (1.0 - factor);
      const cascadeN_End_Pixels = (cascade0_Range * (1.0 - (factor ** (cascadeLevel + 1)))) / (1.0 - factor);
      if (cascadeN_End_Pixels > diagonalLength) {
        console.log('ACTUAL FUCKING LEVEL: ', i);
        numCascadeLevels = i + 1;
        break;
      }
    }

    this.cascadeRealTargets_ = [];
    for (let i = 0; i < numCascadeLevels; i++) {
      this.cascadeRealTargets_.push(new THREE.WebGLRenderTarget(CASCADE_RES.x, CASCADE_RES.y, nearestOpts));
    }

    this.cascadeMaterial_ = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector2(1, 1) },
        sceneResolution: { value: new THREE.Vector2(SCENE_RES.x, SCENE_RES.y) },
        sceneTexture: { value: null },
        sdfTexture: { value: null },
        cascadeLevel: { value: 0.0 },
        cascade0_Range: { value: cascade0_Range },
        cascade0_Dims: { value: cascade0_Dims },
        cascadeResolution: { value: new THREE.Vector2(CASCADE_RES.x, CASCADE_RES.y) },
      },
      vertexShader: vshCascadeText,
      fragmentShader: fshCascadeText,
    });

    const cascadeQuad = new THREE.Mesh(screenQuad, this.cascadeMaterial_);
    cascadeQuad.position.set(0.5, 0.5, 0);
    this.cascadeQuad_ = cascadeQuad;

    this.cascadeScene_ = new THREE.Scene();
    this.cascadeScene_.add(cascadeQuad);

    for (let cascadeLevel = 0; cascadeLevel < numCascadeLevels; cascadeLevel++) {
      const cascadeN_Dims = cascade0_Dims * (2.0 ** cascadeLevel);
      // const cascadeN_Start_Pixels = cascade0_Range * (factor ** cascadeLevel) - 1;
      // const cascadeN_End_Pixels = cascade0_Range * (factor ** (cascadeLevel + 1)) - 1;
      // interval0 * (1.0 - pow(4.0, factor))) / (1.0 - 4.0)
      const cascadeN_Start_Pixels = (cascade0_Range * (1.0 - (factor ** cascadeLevel))) / (1.0 - factor);
      const cascadeN_End_Pixels = (cascade0_Range * (1.0 - (factor ** (cascadeLevel + 1)))) / (1.0 - factor);
  
      console.log('cascade level: ' + cascadeLevel);
      console.log('start: ' + cascadeN_Start_Pixels);
      console.log('end  : ' + cascadeN_End_Pixels);
      console.log('dims : ' + cascadeN_Dims);
    }

    this.materials_.push(this.cascadeMaterial_);

    // Merge cascades
    this.cascadeMergeMaterial_ = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector2(1, 1) },
        sdfTexture: { value: null },
        sceneResolution: { value: new THREE.Vector2(SCENE_RES.x, SCENE_RES.y) },
        cascadeRealTexture: { value: null },
        nextCascadeMergedTexture: { value: null },
        prevCascadeTexture: { value: null },
        currentCascadeLevel: { value: 0 },
        numCascadeLevels: { value: numCascadeLevels },
        cascade0_Range: { value: cascade0_Range },
        cascade0_Dims: { value: cascade0_Dims },
        cascadeResolution: { value: new THREE.Vector2(CASCADE_RES.x, CASCADE_RES.y) },
      },
      vertexShader: vshMergeText,
      fragmentShader: fshMergeText,
    });

    const cascade0_ProbesX = Math.floor(CASCADE_RES.x);
    const cascade0_ProbesY = CASCADE_RES.y;
    this.cascadeMergeTargets_ = [];
    for (let i = 0; i < numCascadeLevels; i++) {
      this.cascadeMergeTargets_.push(new THREE.WebGLRenderTarget(CASCADE_RES.x, CASCADE_RES.y, nearestOpts));
    }

    this.cascadeMergeMesh_ = new THREE.Mesh(screenQuad, this.cascadeMergeMaterial_);
    this.cascadeMergeMesh_.position.set(0.5, 0.5, 0);
    this.cascadeMergeScene_ = new THREE.Scene();
    this.cascadeMergeScene_.add(this.cascadeMergeMesh_);
    this.materials_.push(this.cascadeMergeMaterial_);

    console.log('cascade0_ProbesX: ' + cascade0_ProbesX);
    console.log('cascade0_ProbesY: ' + cascade0_ProbesY);
    
    // Final pass to create radiance field
    this.radianceFieldMat_ = new THREE.ShaderMaterial({
      uniforms: {
        resolution: { value: new THREE.Vector2(1, 1) },
        time: { value: 0 },
        cascade0_Dims: { value: cascade0_Dims },
        cascadeResolution: { value: new THREE.Vector2(CASCADE_RES.x, CASCADE_RES.y) },
        mergedCascade0Texture: { value: this.cascadeMergeTargets_[0].texture },
        sceneResolution: { value: new THREE.Vector2(SCENE_RES.x, SCENE_RES.y) },
      },
      vertexShader: vshRadianceFieldText,
      fragmentShader: fshRadianceFieldText,
    });


    this.radianceFieldTarget_ = new THREE.WebGLRenderTarget(
        CASCADE_RES.x / cascade0_Dims,
        CASCADE_RES.y / cascade0_Dims,
        radianceOpts);
    this.radianceFieldMesh_ = new THREE.Mesh(screenQuad, this.radianceFieldMat_);
    this.radianceFieldMesh_.position.set(0.5, 0.5, 0);
    this.radianceFieldScene_ = new THREE.Scene();
    this.radianceFieldScene_.add(this.radianceFieldMesh_);
    this.materials_.push(this.radianceFieldMat_);

    // Final compose pass
    this.finalComposeMat_ = new THREE.ShaderMaterial({
      uniforms: {
        radianceTexture: { value: null },
        sceneTexture: { value: null },
        sdfTexture: { value: this.sdfTargets_[0].texture },
        resolution: { value: new THREE.Vector2(1, 1) },
        time: { value: 0 },
      },
      vertexShader: vshCopyText,
      fragmentShader: fshFinalComposeText,
      side: THREE.FrontSide
    });

    this.finalComposeMesh_ = new THREE.Mesh(screenQuad, this.finalComposeMat_);
    this.finalComposeMesh_.position.set(0.5, 0.5, 0);
    this.finalComposeScene_ = new THREE.Scene();
    this.finalComposeScene_.add(this.finalComposeMesh_);
    this.materials_.push(this.finalComposeMat_);

    // Copy pass
    this.copyMat_ = new THREE.ShaderMaterial({
      uniforms: {
        diffuse: { value: null },
        resolution: { value: new THREE.Vector2(1, 1) },
        time: { value: 0 },
      },
      vertexShader: vshCopyText,
      fragmentShader: fshCopyText,
      side: THREE.FrontSide
    });

    this.copyMesh_ = new THREE.Mesh(screenQuad, this.copyMat_);
    this.copyMesh_.position.set(0.5, 0.5, 0);
    this.copyScene_ = new THREE.Scene();
    this.copyScene_.add(this.copyMesh_);
    this.materials_.push(this.copyMat_);

    // Copy SDF pass
    this.copySDFMat_ = new THREE.ShaderMaterial({
      uniforms: {
        brushPos1: { value: new THREE.Vector2(0, 0) },
        brushPos2: { value: new THREE.Vector2(0, 0) },
        brushRadius: { value: 0 },
        brushColour: { value: new THREE.Vector3(1, 1, 1) },
        sdfSource: { value: null },
        resolution: { value: new THREE.Vector2(1, 1) },
        time: { value: 0 },
      },
      vertexShader: vshCopyText,
      fragmentShader: fshCopySDFText,
      side: THREE.FrontSide
    });

    this.copySDFMesh_ = new THREE.Mesh(screenQuad, this.copySDFMat_);
    this.copySDFMesh_.position.set(0.5, 0.5, 0);
    this.copySDFScene_ = new THREE.Scene();
    this.copySDFScene_.add(this.copySDFMesh_);
    this.materials_.push(this.copySDFMat_);

    this.totalTime_ = 0;
    this.onWindowResize_();
  }

  onWindowResize_() {
    const dpr = window.devicePixelRatio;
    const canvas = this.threejs_.domElement;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;

    this.threejs_.setSize(w * dpr, h * dpr, false);
    for (let m of this.materials_) {
      m.uniforms.resolution.value.set(w * dpr, h * dpr);
    }

    this.copySDFMat_.uniforms.resolution.value.set(SCENE_RES.x, SCENE_RES.y);
    this.radianceFieldMat_.uniforms.resolution.value.set(
        CASCADE_RES.x / cascade0_Dims, CASCADE_RES.y / cascade0_Dims);
  }

  raf_() {
    requestAnimationFrame((t) => {
      if (this.previousRAF_ === null) {
        this.previousRAF_ = t;
      }

      this.step_(t - this.previousRAF_);
      this.render_();
      this.raf_();
      this.previousRAF_ = t;
    });
  }

  render_() {
    const coords = this.lazyBrush_.getBrushCoordinates();
    this.sceneMaterial_.uniforms.brushPos.value = new THREE.Vector2(
        coords.x / SCENE_RES.x, 1 - coords.y / SCENE_RES.y);
    this.sceneMaterial_.uniforms.brushRadius.value = this.params_.brush.radius.radius;
    this.sceneMaterial_.uniforms.brushColour.value = new THREE.Vector3(
        this.params_.brush.colour.colour.r,
        this.params_.brush.colour.colour.g,
        this.params_.brush.colour.colour.b);
    this.sceneMaterial_.uniforms.sdfTexture.value = this.sdfTargets_[(this.sdfIndex_ + 1) % 2].texture;
    this.sceneMaterial_.uniforms.resolution.value = new THREE.Vector2(SCENE_RES.x, SCENE_RES.y);
    this.threejs_.setRenderTarget(this.sdfFinalTarget_);
    this.threejs_.render(this.scene_, this.camera_);

    // Create radiance cascades
    // These are stored separately for debugging.
    for (let i = 0; i < this.cascadeRealTargets_.length; i++) {
      const cascadeLevel = i;

      this.cascadeMaterial_.uniforms.cascadeLevel.value = cascadeLevel;
      this.cascadeMaterial_.uniforms.sdfTexture.value = this.sdfFinalTarget_.texture;
      this.threejs_.setRenderTarget(this.cascadeRealTargets_[i]);
      this.threejs_.render(this.cascadeScene_, this.camera_);
    }

    // merged5 RT0 = cascade5 + merged6
    // merged4 RT1 = cascade4 + merged5 RT0
    // merged3 RT0 = cascade3 + merged4 RT1

    // Merge radiance cascades
    for (let i = this.cascadeRealTargets_.length - 1; i >= 0; i--) {
      this.cascadeMergeMaterial_.uniforms.currentCascadeLevel.value = i;
      this.cascadeMergeMaterial_.uniforms.cascadeRealTexture.value = this.cascadeRealTargets_[i].texture;
      this.cascadeMergeMaterial_.uniforms.sdfTexture.value = this.sdfFinalTarget_.texture;
      this.cascadeMergeMaterial_.needsUpdate = true;
      if (i < this.cascadeRealTargets_.length - 1) {
        this.cascadeMergeMaterial_.uniforms.nextCascadeMergedTexture.value = this.cascadeMergeTargets_[i + 1].texture;
      }
      if (i > 0) {
        this.cascadeMergeMaterial_.uniforms.prevCascadeTexture.value = this.cascadeRealTargets_[i - 1].texture;
      }

      this.threejs_.setRenderTarget(this.cascadeMergeTargets_[i]);
      this.threejs_.render(this.cascadeMergeScene_, this.camera_);
    }

    // Generate radiance field
    this.radianceFieldMat_.uniforms.mergedCascade0Texture.value = this.cascadeMergeTargets_[0].texture;
    this.radianceFieldMat_.uniforms.resolution.value = new THREE.Vector2(
        this.radianceFieldTarget_.width, this.radianceFieldTarget_.height);
    this.threejs_.setRenderTarget(this.radianceFieldTarget_);
    this.threejs_.render(this.radianceFieldScene_, this.camera_);

    // Final copy to screen
    this.finalComposeMat_.uniforms.radianceTexture.value = this.radianceFieldTarget_.texture;
    this.finalComposeMat_.uniforms.sdfTexture.value = this.sdfFinalTarget_.texture;
    this.threejs_.setRenderTarget(null);
    this.threejs_.render(this.finalComposeScene_, this.camera_);
  }

  step_(timeElapsed) {
    const timeElapsedS = timeElapsed * 0.001;
    this.totalTime_ += timeElapsedS;

    for (let m of this.materials_) {
      m.uniforms.time.value = this.totalTime_;
    }

    this.updateBrush_(timeElapsed);
    this.stats_.update();
  }

  updateBrush_(_) {
    const hasChanged = this.lazyBrush_.update(
      { x: this.brushCoords_.x, y: this.brushCoords_.y },
      { friction: this.brushCoords_.touching ? this.params_.brush.friction.friction / 100 : 1 }
    )
    const isDisabled = !this.lazyBrush_.isEnabled();
    const hasMoved = this.lazyBrush_.brushHasMoved();
  
    if (!hasMoved) {
      // return
    }
  
    if (!this.brushCoords_.touching) {
      return;
    }
  
    this.brushCoords_.points.push(this.lazyBrush_.getBrushCoordinates());
    this.brushCoords_.points.push(this.lazyBrush_.getBrushCoordinates());

    this.updateBrushSDF_();
  }

  updateBrushSDF_() {
    const p = this.lazyBrush_.getBrushCoordinates();

    if (this.brushCoords_.current == null) {
      this.brushCoords_.current = { x: p.x, y: p.y };
      this.brushCoords_.previous = { x: p.x, y: p.y };
    }

    this.brushCoords_.current = { x: p.x, y: p.y };

    const p1 = this.brushCoords_.current;
    const p2 = this.brushCoords_.previous;

    this.threejs_.setRenderTarget(this.sdfTargets_[this.sdfIndex_]);
    this.copySDFMat_.uniforms.brushPos1.value = new THREE.Vector2(
        p1.x / SCENE_RES.x, 1 - p1.y / SCENE_RES.y);
    this.copySDFMat_.uniforms.brushPos2.value = new THREE.Vector2(
        p2.x / SCENE_RES.x, 1 - p2.y / SCENE_RES.y);
    this.copySDFMat_.uniforms.brushRadius.value = this.params_.brush.radius.radius;
    this.copySDFMat_.uniforms.brushColour.value = new THREE.Vector3(
        this.params_.brush.colour.colour.r,
        this.params_.brush.colour.colour.g,
        this.params_.brush.colour.colour.b);
    this.copySDFMat_.uniforms.sdfSource.value = this.sdfTargets_[1 - this.sdfIndex_].texture;
    this.threejs_.render(this.copySDFScene_, this.camera_);
    this.sdfIndex_ = (this.sdfIndex_ + 1) % 2;

    this.brushCoords_.previous = this.brushCoords_.current;
  }
}


let APP_ = null;

window.addEventListener('DOMContentLoaded', async () => {
  APP_ = new SimonDevGLSLCourse();
  await APP_.initialize();
});
