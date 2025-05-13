import { Metadata } from "next";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu"

export const metadata: Metadata = {
  title: "mai_library — cборник материалов для маёвца",
  description: "Сборник файлов и ресурсов, которые обязательно пригодятся студенту Московского авиационного института во время учебной и внеучебной деятельностей.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Menu />
    </>
  );
}
