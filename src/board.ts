import { ClearCheck, Draw, Square, PieceData } from "./typings";
import Piece from "./piece";

/**
 * Class for individual boards
 */
export default class Board {
	public checkClear: ClearCheck;
	public currentPiece: Piece;
	public draw: Draw;
	public height: number;
	public pieces: PieceData[];
	public squares: Square[][];
	public width: number;

	public constructor(
		width: number,
		height: number,
		pieces: PieceData[],
		checkClear: ClearCheck,
		draw: Draw
	) {
		this.width = width;
		this.height = height;
		this.pieces = pieces;
		this.checkClear = checkClear;
		this.draw = draw;
		this.squares = [];

		const heightMap = new Array(height).fill(0);

		for (let x = 0; x < width; x++) {
			this.squares.push(heightMap.map((y) => new Square({ x: x, y: y })));
		}
	}
}
