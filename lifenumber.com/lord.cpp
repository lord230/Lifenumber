#include <iostream>
#include <ctime>
using namespace std;


void insertionSort(int arr[], int size) {
    for (int i = 1; i < size; ++i) {
        int key = arr[i];
        int j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            --j;
        }
        arr[j + 1] = key;
    }
}


int main() {

     const int size = 100;
    int numbers[size];

    for (int i = 0; i < size; ++i) {
        numbers[i] = rand() % 90 + 10; 
    }
    
    clock_t start = clock();

    insertionSort(numbers, size);

    clock_t end = clock();

    double duration = (double)(end - start) / CLOCKS_PER_SEC;

    cout << "Time taken to sort the array: " << duration << " seconds" << endl;
    int j = 0;
    for(int i = size ; i > 0 ;i--){
        numbers[j] = i;
        j++;
    }


    clock_t start1 = clock();
    insertionSort(numbers, size);
    clock_t end1 = clock();
    double duration1 = (double)(end1 - start1) / CLOCKS_PER_SEC;
    cout << "Time taken for sorted array: " << duration1 << " seconds" << endl;




    

    return 0;
}
