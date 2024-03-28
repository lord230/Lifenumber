import tkinter as tk
from tkinter import ttk
import random

class RoutineGeneratorApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Routine Generator")

        self.num_sections = 6
        self.num_days = 5
        self.num_teachers = 10

        # Create widgets
        self.generate_button = ttk.Button(root, text="Generate Routine", command=self.generate_routine)
        self.tree = ttk.Treeview(root, columns=['Section', 'Day'] + [f'Teacher {i+1}' for i in range(self.num_teachers)], show='headings')
        self.tree.heading('#0', text='Routine')
        self.tree.heading('Section', text='Section')
        self.tree.heading('Day', text='Day')
        for i in range(self.num_teachers):
            self.tree.heading(f'Teacher {i+1}', text=f'Teacher {i+1}')

        # Pack widgets
        self.generate_button.pack()
        self.tree.pack()

    def generate_routine(self):
        routine = self.generate_individual_routine()
        self.display_routine(routine)

    def generate_individual_routine(self):
        sections = [f"Section {i+1}" for i in range(self.num_sections)]
        days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
        teachers = [f"Teacher {i+1}" for i in range(self.num_teachers)]

        routine = [[["" for _ in range(self.num_sections)] for _ in range(self.num_days)] for _ in range(self.num_teachers)]

        for section_index in range(self.num_sections):
            for day_index in range(self.num_days):
                tch = [0] * self.num_teachers
                for period_index in range(self.num_teachers):
                    teacher_index = self.cls_ava(tch)
                    routine[teacher_index][day_index][section_index] = teachers[teacher_index]
                    tch[teacher_index] = 1

        return routine

    def display_routine(self, routine):
        self.tree.delete(*self.tree.get_children())
        for i, day in enumerate(routine):
            self.tree.insert("", "end", text=f"Routine {i+1}", values=[''] + [''] + day)

    def cls_ava(self, tch):
        while True:
            cls = random.randint(0, len(tch) - 1)
            if tch[cls] == 0:
                return cls

if __name__ == "__main__":
    root = tk.Tk()
    app = RoutineGeneratorApp(root)
    root.mainloop()
