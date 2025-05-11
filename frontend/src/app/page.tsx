import { Metadata } from "next";
import HomeHero from "@/components/Hero";
import HomePages from "@/components/Pages"

export const metadata: Metadata = {
  title: "mai_library — cборник материалов для маёвца",
  description: "Сборник файлов и ресурсов, которые обязательно пригодятся студенту Московского авиационного института во время учебной и внеучебной деятельностей.",
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomePages />
    </>
  );
}
