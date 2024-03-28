#include <bits/stdc++.h> 

using namespace std; 

#define totalprocess 4 

struct Process 
{ 
    int arrival_time, burst_time, new_priority, process_no; 
}; 

Process proc[50]; 

bool compare(Process a, Process b) 
{ 
    if (a.arrival_time == b.arrival_time) 
    { 
        return a.burst_time > b.burst_time;
    } 
    else
    { 
        return a.arrival_time < b.arrival_time;
    } 
} 

void get_waiting_time(int waiting_time[]) 
{ 
    int service[50]; 

    service[0] = proc[0].arrival_time; 
    waiting_time[0] = 0; 

    for (int i = 1; i < totalprocess; i++) 
    { 
        service[i] = proc[i - 1].burst_time + service[i - 1]; 
        waiting_time[i] = service[i] - proc[i].arrival_time; 

        if (waiting_time[i] < 0) 
        { 
            waiting_time[i] = 0; 
        } 
    } 
} 

void get_turnaround_time(int turnaround_time[], int waiting_time[]) 
{ 
    for (int i = 0; i < totalprocess; i++) 
    { 
        turnaround_time[i] = proc[i].burst_time + waiting_time[i]; 
    } 
} 

void find_gantt_chart() 
{ 
    int waiting_time[50], turnaround_time[50]; 

    double avg_waiting_time = 0, avg_turnaround_time = 0; 

    get_waiting_time(waiting_time); 
    get_turnaround_time(turnaround_time, waiting_time); 

    int start_time[50], completion_time[50]; 

    start_time[0] = proc[0].arrival_time; 
    completion_time[0] = start_time[0] + turnaround_time[0]; 

    for (int i = 1; i < totalprocess; i++) 
    { 
        start_time[i] = completion_time[i - 1]; 
        completion_time[i] = start_time[i] + turnaround_time[i] - waiting_time[i]; 
    } 

    cout << "Process_no\tStart_time\tComplete_time\tTurn_Around_Time\tWaiting_Time" << endl; 

    for (int i = 0; i < totalprocess; i++) 
    { 
        avg_waiting_time += waiting_time[i]; 
        avg_turnaround_time += turnaround_time[i]; 

        cout << proc[i].process_no << "\t\t" << start_time[i] << "\t\t" << completion_time[i] << "\t\t" << turnaround_time[i] << "\t\t\t" << waiting_time[i] << endl; 
    } 

} 

int main() 
{ 
    int arrival_time[] = {0, 1, 2, 4}; 
    int burst_time[] = {5, 4, 2, 1}; 
    int priority[] = {3, 4, 1, 7}; 

    for (int i = 0; i < totalprocess; i++) 
    { 
        proc[i].arrival_time = arrival_time[i]; 
        proc[i].burst_time = burst_time[i]; 
        proc[i].new_priority = priority[i]; 
        proc[i].process_no = i + 1; 
    } 

    sort(proc, proc + totalprocess, compare); 

    find_gantt_chart(); 

    return 0; 
}
