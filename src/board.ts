import { Piece, PieceColour, PieceType } from "./piece";

const boardLayout = [
  "r", "n", "b", "q", "k", "b", "n", "r",
  "p", "p", "p", "p", "p", "p", "p", "p",
  " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ",
  "P", "P", "P", "P", "P", "P", "P", "P",
  "R", "N", "B", "Q", "K", "B", "N", "R"
]

export type Square = {
  col: number;
  row: number;
}

export class Board {
  readonly pieces: Piece[];

  constructor() {
    this.pieces = boardLayout.map((character) => {
      switch (character) {
        case "r": return new Piece(PieceColour.Black, PieceType.Rook);   break;
        case "n": return new Piece(PieceColour.Black, PieceType.Knight); break;
        case "b": return new Piece(PieceColour.Black, PieceType.Bishop); break;
        case "k": return new Piece(PieceColour.Black, PieceType.King);   break;
        case "q": return new Piece(PieceColour.Black, PieceType.Queen);  break;
        case "R": return new Piece(PieceColour.White, PieceType.Rook);   break;
        case "N": return new Piece(PieceColour.White, PieceType.Knight); break;
        case "B": return new Piece(PieceColour.White, PieceType.Bishop); break;
        case "K": return new Piece(PieceColour.White, PieceType.King);   break;
        case "Q": return new Piece(PieceColour.White, PieceType.Queen);  break;
        case " ": return null;  break;
      }
    });
  }

  public moveUnit(from: Square, to: Square) {
    const originalPiece = this.getSquarePiece(from);

    if (originalPiece !== null) {
      this.setSquarePiece(from, null);
      this.setSquarePiece(to, originalPiece);
    }
  }

  private getSquareIndex(square: Square): number {
    return square.row * 8 + square.col;
  }

  private getSquarePiece(square: Square): Piece {
    return this.pieces[this.getSquareIndex(square)];
  }

  private setSquarePiece(square: Square, piece: Piece) {
    this.pieces[this.getSquareIndex(square)] = piece;
  }
}