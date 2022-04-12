import { PieceData, EngineData } from "./typings";
import Board from "./board";
/**
 * The main class of Dropper
 * Contains the boards and coordinates game logic
 * @class
 * @property {number}  activeBoard - Index of the currently active board
 * @property {Board[]} boards      - Array of all boards
 */
export default class Engine {
	public activeBoard: number;
	public boards: Board[];

	public constructor(data: EngineData) {
		this.activeBoard = 0;
		this.boards = [];

		for (let i = 0; i < data.numBoards; i++) {
			this.boards.push(
				new Board(this.width, this.height, this.pieces, this.checkClear)
			);
		}
	}
}
