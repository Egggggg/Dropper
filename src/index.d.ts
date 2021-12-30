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
  private constructor(meta: Metadata, position: Position);
}

export interface KickTable {}

export interface Position {
  x: number;
  y: number;
}

export interface PieceData {}

export interface Metadata {}
