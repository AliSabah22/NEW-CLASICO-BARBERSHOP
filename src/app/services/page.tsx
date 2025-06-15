"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import ServicesAccordion from "@/components/sections/ServicesAccordion";

const services = [
  { title: "Classic Haircut", description: "Precision cuts tailored to your style." },
  { title: "Luxury Shave", description: "Hot towel, premium lather, and expert technique." },
  { title: "Beard Sculpting", description: "Detailed shaping and grooming for a sharp look." },
  { title: "Kids & Teens", description: "Trendy and classic cuts for all ages." },
  { title: "Signature Facial", description: "Relaxing treatment for refreshed skin." },
];

export default function ServicesPage() {
  return (
    <main>
      <ServicesAccordion />
      <Footer />
    </main>
  );
} 