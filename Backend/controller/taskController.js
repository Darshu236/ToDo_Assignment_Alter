import express from "express";
import Task from "../model/task.js"; 

export const createTask = async (req, res) => {
    try {
        
        const task = await Task.create(req.body);

        res.status(201).json({
            success: true, 
            data: task
        });
    } catch (error) {
        console.error("Critical error", error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const renameTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title } = req.body; 
        
        if (!title) {
            return res.status(400).json({
                success: false, 
                message: "Please provide a new title"
            });
        } 

        const updatedTask = await Task.findByIdAndUpdate(
            id,
            { title: title }, 
            { new: true, runValidators: true }
        );

        if (!updatedTask) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Task renamed successfully",
            data: updatedTask
        });

    } catch (error) {
        console.error("Rename task error:", error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params; 

        const deletedTask = await Task.findByIdAndDelete(id);

        if (!deletedTask) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Task deleted successfully",
            data: deletedTask
        });
    } catch (error) {
        console.error("Delete task error:", error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
