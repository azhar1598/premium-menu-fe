"use client";
import React, { useState } from "react";
import {
  TextInput,
  Textarea,
  Button,
  Paper,
  Title,
  Container,
} from "@mantine/core";
import Header from "../HomeComponents/Header";
import Footer from "../HomeComponents/Footer/page";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred");
    }
  };

  return (
    <>
      <Header />
      <header className="text-center py-20 px-4 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl mb-8">
          Have questions or need assistance? We're here to help. Reach out to us
          today!
        </p>
      </header>
      <Container size={420} my={80}>
        <Paper withBorder shadow="md" p={30} radius="md">
          <Title ta="center" mb={20}>
            Contact Us
          </Title>
          <form onSubmit={handleSubmit}>
            <TextInput
              label="Name"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              mb={15}
            />
            <TextInput
              label="Email"
              placeholder="Your Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              mb={15}
            />
            <Textarea
              label="Message"
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              minRows={4}
              mb={20}
            />
            <Button type="submit" fullWidth>
              Send Message
            </Button>
          </form>
        </Paper>
      </Container>
      <Footer />
    </>
  );
}
