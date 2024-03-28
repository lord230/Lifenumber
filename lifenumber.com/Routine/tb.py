import tkinter as tk
from tkinter import ttk

window = tk.Tk()
window.geometry('640x400')
window.title('Routine')


table = ttk.Treeview(window, columns = ('Period 1','Period 2','Period 3', 'Period 4','Period 5'), show = 'headings')
table.heading('Period 1', text = 'Period 1')

table.pack()

window.mainloop()