type RotationAmount = -1 | 1 | 2;
type MoveType = "main" | "test";
type Action = Rotation | Movement;
type ClearCheck = (piece: Piece) => Square[];
type Draw = Function;

export class Engine {
	// fields
	public activeBoard: number;
	public boards: Board[];
	public height: number;
	public pieces: PieceData[];
	public width: number;

	// constructor
	private constructor(
		width: number,
		height: number,
		pieces: PieceData[],
		numBoards?: number
	);

	// raw action methods
	private _rotate(by: RotationAmount, piece: Piece, type: MoveType): void;
	private _move(by: Offset, piece: Piece, type: MoveType): void;

	// general utility
	public checkClear(board: Board, piece: Piece): Square[];
	public choosePiece(board: Board, last: Piece): Piece;
	public place(): void;

	// methods to rotate active piece
	public rotateBy(by: RotationAmount): Piece;
	public rotateClockwise(): Piece;
	public rotateCounterClockwise(): Piece;
	public rotate180(): Piece;

	// methods to rotate test piece
	public testRotate(by: RotationAmount): boolean;
	public testRotateClockwise(): boolean;
	public testRotateCounterClockwise(): boolean;
	public testRotate180(): boolean;

	// methods to move active piece
	public moveBy(by: Offset): Piece;
	public moveLeft(times?: number): Piece;
	public moveRight(times?: number): Piece;
	public moveUp(times?: number): Piece;
	public moveDown(times?: number): Piece;

	// methods to move test piece
	public testMove(by: Offset): boolean;
	public testMoveLeft(times?: number): boolean;
	public testMoveRight(times?: number): boolean;
	public testMoveUp(times?: number): boolean;
	public testMoveDown(times?: number): boolean;

	// move/rotate the test piece, then the active piece if possible
	public rotate(by: RotationAmount): boolean;
	public move(by: Offset): boolean;
	public multiAction(queue: Action[]): boolean;
}

export class Board {
	// fields
	public checkClear: ClearCheck;
	public currentPiece: Piece;
	public draw: Draw;
	public height: number;
	public squares: Square[][];
	public width: number;

	// constructor
	private constructor(
		width: number,
		height: number,
		pieces: PieceData[],
		checkClear: ClearCheck,
		draw: Draw
	);

	// general utility
	public place(): void;

	// actions
	public rotate(by: RotationAmount, type: MoveType): boolean;
	public move(by: Offset, type: MoveType): boolean;
	public moveToTest(): void;
	public resetTest(): void;
}

export class Piece {
	// fields
	public squares: Square[][];
	public kickTable: KickTable;
	public metadata: Metadata;

	// constructor
	private constructor(data: PieceData, meta: Metadata);

	// actions
	public rotate(by: RotationAmount, type: MoveType): boolean;
	public move(by: Offset, type: MoveType): boolean;
	public moveToTest(): void;
	public resetTest(): void;
}

export class Square {
	public position: Position;
	public metadata: Metadata;

	private constructor(position: Position, meta: Metadata);
}

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