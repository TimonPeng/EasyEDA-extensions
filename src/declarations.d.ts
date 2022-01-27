type AllCase<T extends string> = Uppercase<T> | Lowercase<T>;

/* ================= https://docs.easyeda.com/en/API/3-API-List/index.html ================= */
// Get Source
interface GetSourceArg {
  type: "json" | "compress" | "svg";
}

// Apply Source
interface ApplySourceArgs {
  source: string | object;
  createNew: boolean;
}

// Get Shape
interface GetShapeArg {
  id: string;
}

// Delete Shapes
// TODO

// Schematic
type Schematic =
  | "schlib"
  | "rect"
  | "polyline"
  | "polygon"
  | "wire"
  | "bus"
  | "image"
  | "circle"
  | "ellipse"
  | "line"
  | "path"
  | "arc"
  | "annotation"
  | "junction"
  | "netlabel"
  | "busentry"
  | "arrowhead"
  | "noconnectflag"
  | "pin"
  | "netflag";
// PCB
type PCB =
  | "FOOTPRINT"
  | "TRACK"
  | "COPPERAREA"
  | "SOLIDREGION"
  | "RECT"
  | "CIRCLE"
  | "TEXT"
  | "ARC"
  | "DIMENSION"
  | "PAD"
  | "VIA"
  | "HOLE";
type ShapeType = Schematic | PCB;

interface JsonCache {
  gId: string;
  shape?: ShapeType;
  net?: string;
  layerid?: string;
}
interface Point {
  x: number;
  y: number;
}
interface ShapeWithJsonCacheArg {
  shapeType: ShapeType;
  jsonCache: JsonCache;
}
interface ShapeWithoutJsonCacheArg {
  shapeType: ShapeType;
  shortUrl: string;
  from: "system" | "user";
  title: string;
  x: number;
  y: number;
}

// Update Shape

// Create Shape

/* ================= UI ================= */
// Create Toolbar Button
interface CreateToolbarButtonArg {
  icon: string;
  title: string;
  fordoctype: string;
}
interface CreateSingleToolbarButtonArg extends CreateToolbarButtonArg {
  cmd: string;
}
interface CreateMultipleToolbarButtonArg extends CreateToolbarButtonArg {
  menu: { text: string; cmd: string }[];
}

// Create Extension Menu
type CreateExtensionMenuArg = {
  text: string;
  fordoctype: string;
  cmd: string;
}[];

/* ================= Create Dialog ================= */
// Clone
interface CloneArg {
  ids: string[];
}

// Delete
type DeleteArg = CloneArg;

// Rotate
interface RotateArg extends CloneArg {
  degree: number;
}

// Rotate Left
type RotateLeftArg = CloneArg;

// Rotate Right
type RotateRightArg = CloneArg;

// Fliph
type FliphArg = CloneArg;

// Flipv
type FlipvArg = CloneArg;

// Align Left
type AlignLeftArg = CloneArg;

// Align Right
type AlignRightArg = CloneArg;

// Align Top
type AlignTopArg = CloneArg;

// Align Bottom
type AlignBottomArg = CloneArg;

/* ================= Selection ================= */
// Select
type SelectArg = CloneArg;

// Select None

// Get Selected Ids

/* ================= Move ================= */
// Move Objects
interface MoveObjectsArg {
  objs?: string[] | { gId: string }[];
  addX?: number;
  addY?: number;
}

// Move Objects To
interface MoveObjectsToArg {
  objs?: string[] | { gId: string }[];
  x?: number;
  y?: number;
}

// SetOriginXY
interface SetOriginXYArg {
  x: number;
  y: number;
}

// Coordinate Convert
interface CoordinateConvertArg {
  type: "canvas2real" | "real2canvas";
  x?: number | string;
  y?: number | string;
}

// Value Convert
interface ValueConvertArg {
  type: "canvas2real" | "real2canvas";
  val: number | string;
}

// Get SVG Arc Path
interface GetSvgArcPathArg {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  startAngle: number;
  endAngle: number;
  sweepFlag: number;
}

/* ================= Reverse engineering ================= */
// easyeda.extension.extendApi

// TODO return types
declare const api: {
  /* ================= Document ================= */
  /**
   * Get Source
   */
  (action: "getSource", args: GetSourceArg): void;

  /**
   * Apply Source
   */
  (action: "applySource", args: ApplySourceArgs): void;

  /**
   * Get Shape
   */
  (action: "getShape", args: GetShapeArg): void;

  /**
   * Delete Shape
   */
  (action: "deleteShapes", args: any): void;

  /**
   * Update Shape
   */
  (action: "updateShape", args: ShapeWithJsonCacheArg): void;
  (action: "updateShape", args: ShapeWithoutJsonCacheArg): void;

  /**
   * Create Shape
   */
  (action: "createShape", args: ShapeWithJsonCacheArg): void;
  (action: "createShape", args: ShapeWithoutJsonCacheArg): void;
  (action: "createShape", sharp: ShapeType, json: object): void;

  /* ================= UI ================= */
  /**
   * Create Toolbar Button
   */
  (action: "createToolbarButton", args: CreateSingleToolbarButtonArg): void;
  (action: "createToolbarButton", args: CreateMultipleToolbarButtonArg): void;

  /**
   * Create Extension Menu
   */
  (action: "createExtensionMenu", args: CreateExtensionMenuArg): void;

  /* ================= Create Dialog ================= */
  /**
   * Clone
   */
  (action: "clone", args: CloneArg): void;

  /**
   * Delete
   */
  (action: "delete", args: DeleteArg): void;

  /**
   * Rotate
   */
  (action: "rotate", args: RotateArg): void;

  /**
   * Rotate Left
   */
  (action: "rotate_left", args: RotateLeftArg): void;

  /**
   * Rotate Right
   */
  (action: "rotate_right", args: RotateRightArg): void;

  /**
   * Fliph
   */
  (action: "fliph", args: FliphArg): void;

  /**
   * Flipv
   */
  (action: "flipv", args: FlipvArg): void;

  /**
   * Align Left
   */
  (action: "align_left", args: AlignLeftArg): void;

  /**
   * Align Right
   */
  (action: "align_right", args: AlignRightArg): void;

  /**
   * Align Top
   */
  (action: "align_top", args: AlignTopArg): void;

  /**
   * Align Bottom
   */
  (action: "align_bottom", args: AlignBottomArg): void;

  /* ================= Selection ================= */
  /**
   * Select
   */
  (action: "select", args: SelectArg): void;

  /**
   * Select None
   */
  (action: "selectNone"): void;

  /**
   * Select All
   * !By reverse engineering
   */
  (action: "selectAll"): void;

  /**
   * Get Selected Ids
   * @example
   * return empty string
   * ```
   * ''
   * ```
   * @example
   * return single string
   * ```
   * 'gge18511'
   * ```
   * @example
   * return multiple string join with `,`
   * ```
   * 'gge18511,gge19396'
   * ```
   */
  (action: "getSelectedIds"): string;

  /* ================= Move ================= */
  /**
   * Move Objects
   */
  (action: "moveObjs", args: MoveObjectsArg): void;

  /**
   * Move Objects To
   */
  (action: "moveObjsTo", args: MoveObjectsToArg): void;

  /**
   * SetOriginXY
   */
  (action: "setOriginXY", args: SetOriginXYArg): void;

  /**
   * Coordinate Convert
   */
  (action: "coordConvert", args: CoordinateConvertArg): number;

  /**
   * Value Convert
   */
  (action: "valConvert", args: ValueConvertArg): number;

  /**
   * Get SVG Arc Path
   */
  (action: "getSvgArcPathByCRA", args: GetSvgArcPathArg): string;
};
