import React, { useState } from "react";
import { Box, Heading, Input, Button, Text, VStack, HStack, IconButton, Spacer, useColorModeValue, Checkbox } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Box maxWidth="400px" margin="0 auto" p={4} bg={useColorModeValue("gray.100", "gray.700")} minHeight="100vh">
      <Heading as="h1" size="2xl" textAlign="center" color={useColorModeValue("teal.500", "teal.200")} mb={8}>
        Todo App
      </Heading>
      <VStack spacing={4} align="stretch">
        <HStack>
          <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter a todo" bg={useColorModeValue("white", "gray.800")} />
          <IconButton icon={<FaPlus />} colorScheme="teal" onClick={addTodo} aria-label="Add todo" />
        </HStack>
        {todos.map((todo, index) => (
          <Box key={index} p={4} bg={useColorModeValue("white", "gray.800")} borderRadius="md" boxShadow="md">
            <HStack>
              <Checkbox
                isChecked={completedTodos.includes(index)}
                onChange={() => {
                  if (completedTodos.includes(index)) {
                    setCompletedTodos(completedTodos.filter((i) => i !== index));
                  } else {
                    setCompletedTodos([...completedTodos, index]);
                  }
                }}
              />
              <Text textDecoration={completedTodos.includes(index) ? "line-through" : "none"}>{todo}</Text>
              <Spacer />
              <IconButton icon={<FaTrash />} colorScheme="red" size="sm" onClick={() => deleteTodo(index)} aria-label="Delete todo" />
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;
