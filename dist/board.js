"use strict";
exports.__esModule = true;
var piece_1 = require("./piece");
var boardLayout = [
    "r", "n", "b", "q", "k", "b", "n", "r",
    "p", "p", "p", "p", "p", "p", "p", "p",
    " ", " ", " ", " ", " ", " ", " ", " ",
    " ", " ", " ", " ", " ", " ", " ", " ",
    " ", " ", " ", " ", " ", " ", " ", " ",
    " ", " ", " ", " ", " ", " ", " ", " ",
    "P", "P", "P", "P", "P", "P", "P", "P",
    "R", "N", "B", "Q", "K", "B", "N", "R"
];
var Board = (function () {
    function Board() {
        this.pieces = boardLayout.map(function (character) {
            switch (character) {
                case "r":
                    return new piece_1.Piece(piece_1.PieceColour.Black, piece_1.PieceType.Rook);
                    break;
                case "n":
                    return new piece_1.Piece(piece_1.PieceColour.Black, piece_1.PieceType.Knight);
                    break;
                case "b":
                    return new piece_1.Piece(piece_1.PieceColour.Black, piece_1.PieceType.Bishop);
                    break;
                case "k":
                    return new piece_1.Piece(piece_1.PieceColour.Black, piece_1.PieceType.King);
                    break;
                case "q":
                    return new piece_1.Piece(piece_1.PieceColour.Black, piece_1.PieceType.Queen);
                    break;
                case "R":
                    return new piece_1.Piece(piece_1.PieceColour.White, piece_1.PieceType.Rook);
                    break;
                case "N":
                    return new piece_1.Piece(piece_1.PieceColour.White, piece_1.PieceType.Knight);
                    break;
                case "B":
                    return new piece_1.Piece(piece_1.PieceColour.White, piece_1.PieceType.Bishop);
                    break;
                case "K":
                    return new piece_1.Piece(piece_1.PieceColour.White, piece_1.PieceType.King);
                    break;
                case "Q":
                    return new piece_1.Piece(piece_1.PieceColour.White, piece_1.PieceType.Queen);
                    break;
                case " ":
                    return null;
                    break;
            }
        });
    }
    Board.prototype.moveUnit = function (from, to) {
        var originalPiece = this.getSquarePiece(from);
        if (originalPiece !== null) {
            this.setSquarePiece(from, null);
            this.setSquarePiece(to, originalPiece);
        }
    };
    Board.prototype.getSquareIndex = function (square) {
        return square.row * 8 + square.col;
    };
    Board.prototype.getSquarePiece = function (square) {
        return this.pieces[this.getSquareIndex(square)];
    };
    Board.prototype.setSquarePiece = function (square, piece) {
        this.pieces[this.getSquareIndex(square)] = piece;
    };
    return Board;
}());
exports.Board = Board;
//# sourceMappingURL=board.js.map