export enum PieceColour {
  Black = "black",
  White = "white"
}

export enum PieceType {
  Pawn   = "pawn",
  Knight = "knight",
  Bishop = "bishop",
  Rook   = "rook",
  Queen  = "queen",
  King   = "king"
}

export class Piece {
  readonly colour: PieceColour;
  readonly type:   PieceType;

  constructor(colour: PieceColour, type: PieceType) {
    this.colour = colour;
    this.type   = type;
  }
}