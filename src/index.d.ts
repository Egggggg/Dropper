type RotationAmount = -1 | 1 | 2;
type PieceType = "main" | "test";

export class Engine {
	public activeBoard: number;
	public boards: Array<Board>;
	public height: number;
	public pieces: Array<PieceData>;
	public width: number;

	private constructor(
		width: number,
		height: number,
		pieces: Array<PieceData>,
		numBoards?: number
	);

	private rotatePiece(by: RotationAmount, piece: Piece, type: PieceType): void;
	private movePiece(by: Offset, piece: Piece, type: PieceType): void;

	public checkClear(board: Board, piece: Piece): Array<Square>;
	public choosePiece(board: Board, last: Piece): PieceData;

	public rotate(by: RotationAmount): void;
	public rotateClockwise(): void;
	public rotateCounterClockwise(): void;
	public rotate180(): void;

	public testRotate(by: RotationAmount): void;
	public testRotateClockwise(): void;
	public testRotateCounterClockwise(): void;
	public testRotate180(): void;

	public move(by: Offset): void;
	public moveLeft(times?: number): void;
	public moveRight(times?: number): void;
	public moveUp(times?: number): void;
	public moveDown(times?: number): void;

	public testMove(by: Offset): void;
	public testMoveLeft(times?: number): void;
	public testMoveRight(times?: number): void;
	public testMoveUp(times?: number): void;
	public testMoveDown(times?: number): void;

	public place(): void;
}

export class Board {
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
	"+": Array<Offset>;
	"-": Array<Offset>;
}
