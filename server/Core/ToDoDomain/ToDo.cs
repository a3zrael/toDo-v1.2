﻿public class ToDo {
    public Guid Id { get; set; }
    public string? Title { get; set; }
    public string Details { get; set; } = "";
    public bool Completed { get; set; } = false;
}
