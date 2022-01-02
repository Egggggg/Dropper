type RotationAmount = -1 | 1 | 2;
type PieceType = "main" | "test";

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

	// private methods
	private rotatePiece(by: RotationAmount, piece: Piece, type: PieceType): void;
	private movePiece(by: Offset, piece: Piece, type: PieceType): void;

	// general utility methods
	public checkClear(board: Board, piece: Piece): Square[];
	public choosePiece(board: Board, last: Piece): PieceData;

	// methods to rotate active piece
	public rotate(by: RotationAmount): Piece;
	public rotateClockwise(): Piece;
	public rotateCounterClockwise(): Piece;
	public rotate180(): Piece;

	// methods to rotate test piece
	public testRotate(by: RotationAmount): boolean;
	public testRotateClockwise(): boolean;
	public testRotateCounterClockwise(): boolean;
	public testRotate180(): boolean;

	// methods to move active piece
	public move(by: Offset): Piece;
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
	public testAndRotate(by: RotationAmount): boolean;
	public testAndMove(by: Offset): boolean;
	public multiAction(queue: Action[]): boolean;

	// place active piece
	public place(): void;
}

export class Board {
	public width: number;
	public height: number;
	public squares: Square[][];
	public currentPiece: Piece;

	private constructor(width: number, height: number);
}

export class Piece {
	private constructor(data: PieceData, meta: Metadata);
}

export class Square {
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

export interface PieceData {}

export interface Metadata {}

export interface KickData {
	"+": Offset[];
	"-": Offset[];
}
}
