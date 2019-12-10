import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.less']
})
export class GameComponent implements OnInit {

    squares: any[];
    xIsNext: boolean;
    winner: any[];

    constructor () { }

    ngOnInit() {
        this.newGame();
    }

    get player () {
        return this.xIsNext ? 'X' : 'O';
    }

    newGame () {
        this.squares = Array(9).fill(null);
        this.winner  = null;
        this.xIsNext = true;
    }

    makeMove (idx:number) {
        if (!this.winner) {
            if(!this.squares[idx]){
                this.squares.splice(idx, 1, this.player);
                this.xIsNext = !this.xIsNext;
            }
            this.winner = this.calculateWinner();
        }
    }

    cellStatus (i: number) {

        if (this.winner != null && this.winner.hasOwnProperty('combination')) {
            return (this.winner.combination).includes(i);
        }

        return false;

    }

    calculateWinner () {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (this.squares[a] &&
                this.squares[a] === this.squares[b]&&
                this.squares[a] === this.squares[c]) {

                return {
                    'player': this.squares[a],
                    'combination': lines[i]
                };

            }
        }
        return null;
    }

}
