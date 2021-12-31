export class Engine {
	private constructor(
		width: number,
		height: number,
		pieces: Array<PieceData>,
		numBoards?: number
	);
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
