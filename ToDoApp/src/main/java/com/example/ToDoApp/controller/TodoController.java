package com.example.ToDoApp.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/todos")
public class TodoController {

    @GetMapping
    public String getTodos() {
        return "Hello, your To-Do App is working!";
    }
}
