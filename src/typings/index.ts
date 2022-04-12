// -1 for 90 degrees counterclockwise, 1 for 90 degrees clockwise, and 2 for 180 degrees
export type RotationAmount = -1 | 1 | 2;

// Whether the action should move the actual piece or the test piece
export type MoveType = "main" | "test";

// Whether the action rotates or moves the piece
export type Action = Rotation | Movement;

// The check to be run on each placement to see if a 
export type ClearCheck = (piece: Piece) => Square[];
export type Draw = Function;

export interface KickTable {
	"0": KickData;
	"1": KickData;
	"2": KickData;
	"3": KickData;
}

export interface Position {
	x: number;
	y: number;
}

export interface Offset {
	x: number;
	y: number;
}

export interface PieceData {
	squares: Offset[];
	kicks: KickTable;
}

export interface Metadata {
	color?: any;
}

export interface KickData {
	"+": Offset[];
	"-": Offset[];
}

export interface Rotation {
	by: RotationAmount;
}

export interface Movement {
	by: Offset;
}

export interface BoardData {
	width: number;
	height: number;
	pieces: PieceData[];
	checkClear: ClearCheck;
	draw: Draw;
}

export interface EngineData {
	numBoards: number;
	defaultWidth?: number;
	defaultHeight?: number;
	defaultCheckClear?: ClearCheck;
	defaultDraw?: Draw;
	boards?: BoardData[];
}
