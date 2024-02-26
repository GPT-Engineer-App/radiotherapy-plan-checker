import React, { useState } from "react";
import { Box, Button, Container, Divider, FormControl, FormLabel, Heading, Input, Stack, Textarea, VStack, useToast } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const Index = () => {
  const [patientId, setPatientId] = useState("");
  const [notes, setNotes] = useState("");
  const toast = useToast();

  const handleSubmit = () => {
    // Here you would normally handle the submission of the data
    // For now, just show a toast to simulate a successful operation
    toast({
      title: "Plan Submitted.",
      description: "The radiotherapy plan has been successfully submitted for review.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={6}>
        <Heading as="h1" size="xl">
          Radiotherapy Plan Check
        </Heading>
        <Divider />
        <FormControl id="patient-id" isRequired>
          <FormLabel>Patient ID</FormLabel>
          <Input placeholder="Enter Patient ID" value={patientId} onChange={(e) => setPatientId(e.target.value)} />
        </FormControl>
        <FormControl id="notes">
          <FormLabel>Notes</FormLabel>
          <Textarea placeholder="Enter any relevant notes here..." value={notes} onChange={(e) => setNotes(e.target.value)} />
        </FormControl>
        <Button leftIcon={<FaCheckCircle />} colorScheme="green" onClick={handleSubmit} isDisabled={!patientId}>
          Submit Plan
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
