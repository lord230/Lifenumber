// Online C++ compiler to run C++ program online
#include <iostream>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <ctime>
using namespace std;
int checkSnakeLadder(int position) {
    switch (position) {
        case 19: return 56;
        case 34: return 94;
        case 65: return 79;
        case 78: return 97;
        case 35: return 6;
        case 95: return 15;
        case 60: return 42;
        case 98: return 50;
        default: return position;
    }
}

int main() {
    
    int player1 = 1;
    int player2 = 1;
    while(player1 != 100 || player2 != 100){
        int pid = fork();
        
        if(pid == 0){
            int dice = rand() % 6 + 1;
            player2 += dice;
            player2 = checkSnakeLadder(player2);
            if(player2 > 100){
                player2 = player2 - dice;
            }
            printf("Player 2: Dice=%d, Position=%d\n", dice, player2);
            if(player2 == 100){
                cout << "Player 2 wins" << endl;
                exit(1);
            }
        }else if(pid > 0){
             int dice = rand() % 6 + 1;;
            player1 += dice;
            player1 = checkSnakeLadder(player1);
             if(player1 > 100){
                player1 = player1 - dice;
            }
            printf("Player 1: Dice=%d, Position=%d\n", dice, player1);
            if(player1 == 100){
                cout << "Player 1 Wins" << endl;
                exit(1);
            }
        }else {
        fprintf(stderr, "Fork failed\n");
        return 1;
    }
    }

    return 0;
}